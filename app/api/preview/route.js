import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG, GITHUB_CONFIG } from '../../../utility/supabaseConstants';

export async function POST(request) {
  try {
    const { files, project_type } = await request.json(); // Assuming files and project_type are sent
    console.log('Received preview request:', { files: files.length, project_type });

    // Check if this needs building (React/Vite) or can be directly uploaded (static)
    if (project_type === 'static') {
      // Direct Supabase upload for static sites
      console.log('Static site detected - using direct Supabase upload.');

      const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.SERVICE_ROLE_KEY);
      const siteName = `site-${Date.now()}`;
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

    const repoName = `pixelai-preview-${Date.now()}`;

    // --- Step 1: Create GitHub Repository ---
    console.log(`Creating GitHub repository: ${repoName}`);
    const createRepoResponse = await fetch(`https://api.github.com/user/repos`, {
      method: 'POST',
      headers: {
        Authorization: `token ${GITHUB_CONFIG.PAT}`,
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
          -H "Authorization: token \$REPO_CLEANUP_TOKEN"
        
        echo "✅ Repository cleanup completed"`;

      // Add workflow file to the files array
      files.push({
        path: '.github/workflows/preview-build.yml',
        content: workflowContent
      });
      
      console.log('Added GitHub Actions workflow file to deployment');
    }

    const owner = GITHUB_CONFIG.USERNAME;
    const repo = repoName;
    const defaultBranch = 'main';

    // 1. Get the latest commit SHA of the default branch
    const refResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${defaultBranch}`, {
      headers: { Authorization: `token ${GITHUB_CONFIG.PAT}` },
    });
    if (!refResponse.ok) {
      const errorData = await refResponse.json();
      throw new Error(`Failed to get ref: ${refResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    const refData = await refResponse.json();
    const latestCommitSha = refData.object.sha;

    // 2. Create a new Git tree object
    const tree = files.map(file => ({
      path: file.path,
      mode: '100644',
      type: 'blob',
      content: file.content,
    }));

    const treeResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees`, {
      method: 'POST',
      headers: {
        Authorization: `token ${GITHUB_CONFIG.PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        base_tree: latestCommitSha,
        tree: tree,
      }),
    });
    if (!treeResponse.ok) {
      const errorData = await treeResponse.json();
      throw new Error(`Failed to create tree: ${treeResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    const treeData = await treeResponse.json();
    const newTreeSha = treeData.sha;

    // 3. Create a new Git commit object
    const commitResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/commits`, {
      method: 'POST',
      headers: {
        Authorization: `token ${GITHUB_CONFIG.PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Initial commit from PixelAI Builder',
        tree: newTreeSha,
        parents: [latestCommitSha],
      }),
    });
    if (!commitResponse.ok) {
      const errorData = await commitResponse.json();
      throw new Error(`Failed to create commit: ${commitResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    const commitData = await commitResponse.json();
    const newCommitSha = commitData.sha;

    // 4. Update the branch reference
    const updateRefResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs/heads/${defaultBranch}`, {
      method: 'PATCH',
      headers: {
        Authorization: `token ${GITHUB_CONFIG.PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sha: newCommitSha,
        force: true,
      }),
    });
    if (!updateRefResponse.ok) {
      const errorData = await updateRefResponse.json();
      throw new Error(`Failed to update ref: ${updateRefResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    console.log('Files pushed successfully. New commit SHA:', newCommitSha);

    // --- Step 3: Trigger GitHub Actions Workflow ---
    console.log(`Triggering GitHub Actions workflow for ${repoName}...`);
    const workflowDispatchResponse = await fetch(`https://api.github.com/repos/${GITHUB_CONFIG.USERNAME}/${repoName}/actions/workflows/preview-build.yml/dispatches`, {
      method: 'POST',
      headers: {
        Authorization: `token ${GITHUB_CONFIG.PAT}`,
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
      message: `${project_type} build initiated via GitHub Actions.` 
    });
  } catch (error) {
    console.error('Error in /api/preview:', error);
    return NextResponse.json({ error: `Failed to initiate preview build: ${error.message}` }, { status: 500 });
  }
}
