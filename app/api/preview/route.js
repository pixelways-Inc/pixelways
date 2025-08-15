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
