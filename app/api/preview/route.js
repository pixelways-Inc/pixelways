import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG, GITHUB_CONFIG } from '../../../utility/supabaseConstants';

export async function POST(request) {
  try {
    const { files, project_type = 'static', site_name = null, github_token = null, github_username = null } = await request.json();
    console.log('Received preview request:', { files: files.length, project_type });

    // Get GitHub token from request body or cookies (fallback)
    const requestToken = github_token;
    const requestUsername = github_username;
    const cookieToken = request.cookies.get('github_token')?.value;
    const cookieUsername = request.cookies.get('github_username')?.value;
    
    // Prefer request body, fallback to cookies
    const finalGithubToken = requestToken || cookieToken;
    const finalGithubUsername = requestUsername || cookieUsername;
    
    console.log('GitHub auth status:', {
      hasRequestToken: !!requestToken,
      hasCookieToken: !!cookieToken,
      finalHasToken: !!finalGithubToken,
      username: finalGithubUsername
    });

    // Check if this needs building (React/Vite) or can be directly uploaded (static)
    if (project_type === 'static') {
      // Direct Supabase upload for static sites
      console.log('Static site detected - using direct Supabase upload.');

      const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.SERVICE_ROLE_KEY);
      const siteName = site_name || `site-${Date.now()}`;
      const bucket = 'sites';

      // Ensure bucket exists (best-effort; ignore error if it already exists)
      try {
        await supabase.storage.createBucket(bucket, { public: true });
      } catch (e) {
        console.log('Bucket create attempt result:', e?.message || 'skip');
      }

      // Upload files
      const contentTypeFromPath = (path) => {
        const lower = path.toLowerCase();
        if (lower.endsWith('.html')) return 'text/html; charset=utf-8';
        if (lower.endsWith('.css')) return 'text/css; charset=utf-8';
        if (lower.endsWith('.js')) return 'application/javascript; charset=utf-8';
        if (lower.endsWith('.json')) return 'application/json; charset=utf-8';
        if (lower.endsWith('.svg')) return 'image/svg+xml';
        if (lower.endsWith('.png')) return 'image/png';
        if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
        if (lower.endsWith('.webp')) return 'image/webp';
        return 'text/plain; charset=utf-8';
      };

      for (const file of files) {
        const storagePath = `${siteName}/${file.path}`.replace(/\\/g, '/');
        const { error: uploadError } = await supabase.storage
          .from(bucket)
          .upload(storagePath, Buffer.from(file.content, 'utf-8'), {
            contentType: contentTypeFromPath(file.path),
            upsert: true,
          });
        if (uploadError) {
          console.error('Supabase upload error:', uploadError);
          return NextResponse.json({ error: `Failed to upload ${file.path}: ${uploadError.message}` }, { status: 500 });
        }
      }

      const previewUrl = `https://pixelways.co/sites/${siteName}/index.html`;
      return NextResponse.json({ preview_url: previewUrl, site: siteName, project_type, message: 'Static site uploaded to Supabase successfully.' });
    }

    // React/Vite sites need GitHub Actions to build before deployment
    console.log(`${project_type} site detected - using GitHub Actions workflow for build process.`);

    // Check if user provided GitHub token (from request or cookies)
    const useUserToken = finalGithubToken && finalGithubUsername;
    
    // For React/Vite projects, encourage user authentication for better experience
    if (!useUserToken) {
      console.log('No user GitHub token found - encouraging user authentication');
      return NextResponse.json({
        error: 'GitHub authentication required',
        message: 'Please connect your GitHub account to deploy React/Vite projects to your own repositories.',
        requiresAuth: true,
        authUrl: '/api/auth/github?action=authorize',
        benefits: [
          'Deploy to your own GitHub repositories',
          'Full control over your projects',
          'No repository limits',
          'Private repositories supported'
        ]
      }, { status: 401 });
    }
    
    const authToken = finalGithubToken;
    const githubUser = finalGithubUsername;

    console.log(`Using user GitHub token for deployment to ${githubUser}'s account`);

    const repoName = site_name ? `${site_name}-${Date.now()}` : `pixelai-preview-${Date.now()}`;

    // --- Step 1: Create GitHub Repository ---
    console.log(`Creating GitHub repository: ${repoName} under ${githubUser}`);
    const createRepoResponse = await fetch(`https://api.github.com/user/repos`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: repoName,
        private: true,
        auto_init: true,
      }),
    });
    if (!createRepoResponse.ok) {
      const errorData = await createRepoResponse.json();
      throw new Error(`Failed to create repository: ${createRepoResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    const repoData = await createRepoResponse.json();
    console.log('Repository created:', repoData.html_url);

    // --- Step 2: Push Project Files ---
    console.log('Pushing files to repository...');

    // Add workflow file to the files array for React/Vite projects
    if (project_type !== 'static') {
      const workflowContent = `name: Preview Build and Deploy

on:
  workflow_dispatch:
    inputs:
      repo_name:
        description: 'Repository name'
        required: true
        type: string
      commit_sha:
        description: 'Commit SHA'
        required: true
        type: string
      project_type:
        description: 'Project type (react-vite, next, static)'
        required: true
        type: string
        default: 'react-vite'

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout repository
      uses: actions/checkout@v4
      with:
        repository: \${{ github.repository_owner }}/\${{ inputs.repo_name }}
        token: \${{ secrets.GITHUB_TOKEN }}
        ref: \${{ inputs.commit_sha }}

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: '18'
        cache: 'npm'

    - name: Install dependencies
      run: npm ci

    - name: Build project
      run: |
        if [ "\${{ inputs.project_type }}" == "react-vite" ]; then
          npm run build
        elif [ "\${{ inputs.project_type }}" == "next" ]; then
          npm run build
        else
          echo "Static project - no build step needed"
          mkdir -p dist
          cp -r . dist/ || true
        fi

    - name: Upload to Supabase Storage
      env:
        SUPABASE_URL: https://dlunpilhklsgvkegnnlp.supabase.co
        SUPABASE_SERVICE_ROLE_KEY: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRsdW5waWxoa2xzZ3ZrZWdubmxwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc1NTA1MDQxOSwiZXhwIjoyMDcwNjI2NDE5fQ.k-2OJ4p3hr9feR4ks54OQM2HhOhaVJ3pUK-20tGJwpo
        SUPABASE_ACCESS_TOKEN: sbp_b9d84ba60246e9e22db433a7cbc50be9669cb698
        SUPABASE_PROJECT_REF: dlunpilhklsgvkegnnlp
      run: |
        # Install Supabase CLI
        npm install -g @supabase/supabase-js
        
        # Create upload script
        cat > upload.js << 'EOF'
        const { createClient } = require('@supabase/supabase-js');
        const fs = require('fs');
        const path = require('path');
        
        const supabase = createClient(
          process.env.SUPABASE_URL,
          process.env.SUPABASE_SERVICE_ROLE_KEY
        );
        
        async function uploadFiles() {
          const buildDir = fs.existsSync('dist') ? 'dist' : '.';
          const siteName = process.env.GITHUB_REPOSITORY.split('/')[1];
          const bucket = 'sites';
          
          console.log(\`Uploading from \${buildDir} to \${siteName}\`);
          
          // Ensure bucket exists
          try {
            await supabase.storage.createBucket(bucket, { public: true });
          } catch (e) {
            console.log('Bucket exists or creation skipped');
          }
          
          // Upload files recursively
          async function uploadDirectory(dirPath, prefix = '') {
            const items = fs.readdirSync(dirPath);
            
            for (const item of items) {
              const fullPath = path.join(dirPath, item);
              const relativePath = path.join(prefix, item).replace(/\\\\/g, '/');
              
              if (fs.statSync(fullPath).isDirectory()) {
                await uploadDirectory(fullPath, relativePath);
              } else {
                const fileContent = fs.readFileSync(fullPath);
                const storagePath = \`\${siteName}/\${relativePath}\`;
                
                console.log(\`Uploading: \${storagePath}\`);
                
                const { error } = await supabase.storage
                  .from(bucket)
                  .upload(storagePath, fileContent, {
                    contentType: getContentType(item),
                    upsert: true,
                  });
                
                if (error) {
                  console.error(\`Error uploading \${storagePath}:\`, error);
                  process.exit(1);
                }
              }
            }
          }
          
          function getContentType(filename) {
            const ext = path.extname(filename).toLowerCase();
            const contentTypes = {
              '.html': 'text/html',
              '.css': 'text/css',
              '.js': 'application/javascript',
              '.json': 'application/json',
              '.png': 'image/png',
              '.jpg': 'image/jpeg',
              '.jpeg': 'image/jpeg',
              '.gif': 'image/gif',
              '.svg': 'image/svg+xml',
              '.ico': 'image/x-icon'
            };
            return contentTypes[ext] || 'text/plain';
          }
          
          await uploadDirectory(buildDir);
          console.log('✅ Upload completed successfully!');
          console.log(\`🌐 Site available at: https://pixelways.co/sites/\${siteName}/index.html\`);
          
          return \`https://pixelways.co/sites/\${siteName}/index.html\`;
        }
        
        uploadFiles().catch(console.error);
        EOF
        
        # Run upload and capture the preview URL
        PREVIEW_URL=\$(node upload.js | grep "Site available at:" | cut -d' ' -f4)
        echo "PREVIEW_URL=\$PREVIEW_URL" >> \$GITHUB_ENV

    - name: Notify build completion
      env:
        BUILD_WEBHOOK_URL: https://pixelways.co/api/build-complete
      run: |
        # Send webhook notification to PixelAI app
        curl -X POST "\$BUILD_WEBHOOK_URL" \\
          -H "Content-Type: application/json" \\
          -d "{
            \\"status\\": \\"completed\\",
            \\"repo_name\\": \\"\${{ inputs.repo_name }}\\",
            \\"project_type\\": \\"\${{ inputs.project_type }}\\",
            \\"commit_sha\\": \\"\${{ inputs.commit_sha }}\\",
            \\"preview_url\\": \\"\$PREVIEW_URL\\",
            \\"build_time\\": \\"\$(date -u +%Y-%m-%dT%H:%M:%SZ)\\",
            \\"success\\": true
          }"
        
        echo "🎉 Build and deployment completed!"
        echo "📊 Project type: \${{ inputs.project_type }}"
        echo "📂 Repository: \${{ inputs.repo_name }}"
        echo "🔗 Commit: \${{ inputs.commit_sha }}"
        echo "🌐 Preview URL: \$PREVIEW_URL"

    - name: Cleanup repository
      if: always()
      env:
        REPO_CLEANUP_TOKEN: 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
      run: |
        # Wait a bit to ensure webhook is processed
        sleep 10
        
        # Delete the temporary repository
        echo "🗑️ Cleaning up temporary repository: \${{ inputs.repo_name }}"
        curl -X DELETE "https://api.github.com/repos/\${{ github.repository_owner }}/\${{ inputs.repo_name }}" \\
          -H "Authorization: Bearer \$REPO_CLEANUP_TOKEN"
        
        echo "✅ Repository cleanup completed"`;

      // Add workflow file to the files array
      files.push({
        path: '.github/workflows/preview-build.yml',
        content: workflowContent
      });
      
      console.log('Added GitHub Actions workflow file to deployment');
    }

    const owner = githubUsername;
    const repo = repoName;
    const defaultBranch = 'main';

    // 1. Check if the repository has any commits (try to get the default branch)
    let latestCommitSha = null;
    let hasExistingCommits = false;
    
    const refResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${defaultBranch}`, {
      headers: { 
        Authorization: `Bearer ${authToken}`,
        'Accept': 'application/vnd.github.v3+json'
      },
    });
    
    if (refResponse.ok) {
      const refData = await refResponse.json();
      latestCommitSha = refData.object.sha;
      hasExistingCommits = true;
    } else {
      // Repository is empty, no existing commits
      console.log('Repository is empty, creating initial commit');
    }

    // 2. Create a new Git tree object
    const tree = files.map(file => ({
      path: file.path,
      mode: '100644',
      type: 'blob',
      content: file.content,
    }));

    const treeRequestBody = {
      tree: tree,
    };
    
    // Only include base_tree if there are existing commits
    if (hasExistingCommits && latestCommitSha) {
      treeRequestBody.base_tree = latestCommitSha;
    }

    const treeResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(treeRequestBody),
    });
    if (!treeResponse.ok) {
      const errorData = await treeResponse.json();
      throw new Error(`Failed to create tree: ${treeResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    const treeData = await treeResponse.json();
    const newTreeSha = treeData.sha;

    // 3. Create a new Git commit object
    const commitRequestBody = {
      message: 'Initial commit from PixelAI Builder',
      tree: newTreeSha,
    };
    
    // Only include parents if there are existing commits
    if (hasExistingCommits && latestCommitSha) {
      commitRequestBody.parents = [latestCommitSha];
    }

    const commitResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commitRequestBody),
    });
    if (!commitResponse.ok) {
      const errorData = await commitResponse.json();
      throw new Error(`Failed to create commit: ${commitResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    const commitData = await commitResponse.json();
    const newCommitSha = commitData.sha;

    // 4. Create or update the branch reference
    let updateRefResponse;
    
    if (hasExistingCommits) {
      // Update existing branch
      updateRefResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${defaultBranch}`, {
        method: 'PATCH',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          sha: newCommitSha,
          force: true,
        }),
      });
    } else {
      // Create new branch reference
      updateRefResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${authToken}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ref: `refs/heads/${defaultBranch}`,
          sha: newCommitSha,
        }),
      });
    }
    
    if (!updateRefResponse.ok) {
      const errorData = await updateRefResponse.json();
      throw new Error(`Failed to ${hasExistingCommits ? 'update' : 'create'} ref: ${updateRefResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    console.log('Files pushed successfully. New commit SHA:', newCommitSha);

    // --- Step 3: Trigger GitHub Actions Workflow ---
    console.log(`Triggering GitHub Actions workflow for ${repoName}...`);
    const workflowDispatchResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}/actions/workflows/preview-build.yml/dispatches`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${authToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ref: 'main',
        inputs: {
          repo_name: repoName,
          commit_sha: newCommitSha,
          project_type: project_type,
        },
      }),
    });
    if (!workflowDispatchResponse.ok) {
      const errorData = await workflowDispatchResponse.json();
      throw new Error(`Failed to dispatch workflow: ${workflowDispatchResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    console.log('GitHub Actions workflow dispatched.');

        return NextResponse.json({
      preview_build_started: true,
      repo_name: repoName,
      site: repoName,
      github_user: githubUser,
      cleanup_token: authToken,
      message: `${project_type} build initiated via GitHub Actions. Repo will be cleaned up after deployment.`
    });
  } catch (error) {
    console.error('Error in /api/preview:', error);
    return NextResponse.json({ error: `Failed to initiate preview build: ${error.message}` }, { status: 500 });
  }
}
