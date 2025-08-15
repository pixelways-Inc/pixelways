import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const GITHUB_PAT = process.env.GH_PAT;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME; // Assuming user's GitHub username is also available

export async function POST(request) {
  try {
    const { files, project_type } = await request.json(); // Assuming files and project_type are sent
    console.log('Received preview request:', { files: files.length, project_type });

    // If GitHub is not configured, fall back to direct Supabase upload for immediate previews
    if (!GITHUB_PAT || !GITHUB_USERNAME) {
      console.log('GitHub not configured. Falling back to direct Supabase upload.');

      const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
      const SUPABASE_SERVICE_ROLE =
        process.env.SUPABASE_SERVICE_ROLE ||
        process.env.SUPABASE_SERVICE_ROLE_KEY ||
        process.env.SUPABASE_ANON_KEY ||
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
      if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE) {
        return NextResponse.json({ error: 'Supabase credentials are not configured.' }, { status: 500 });
      }

      const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE);

      const siteName = `site-${Date.now()}`;
      const bucket = 'sites';

      // Ensure bucket exists (best-effort; ignore error if it already exists)
      try {
        // @ts-ignore - admin API not typed here; if unavailable, uploads will still work if bucket already exists
        // Some Supabase setups may not allow bucket creation with service key; ignore failures
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
      return NextResponse.json({ preview_url: previewUrl, site: siteName, project_type, message: 'Preview uploaded to Supabase successfully.' });
    }

    const repoName = `pixelai-preview-${Date.now()}`; // Unique repository name

    // --- Step 1: Create GitHub Repository ---
    console.log(`Attempting to create GitHub repository: ${repoName}`);
    const createRepoResponse = await fetch(`https://api.github.com/user/repos`, {
      method: 'POST',
      headers: {
        Authorization: `token ${GITHUB_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: repoName,
        private: true, // Set to true for private repositories
        auto_init: true, // Initialize with a README
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

    const owner = GITHUB_USERNAME;
    const repo = repoName;
    const defaultBranch = 'main'; // Assuming 'main' as the default branch

    // 1. Get the latest commit SHA of the default branch
    const refResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${defaultBranch}`, {
      headers: { Authorization: `token ${GITHUB_PAT}` },
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
      mode: '100644', // Blob (file)
      type: 'blob',
      content: file.content,
    }));

    const treeResponse = await fetch(`https://api.github.com/repos/${owner}/${repo}/git/trees`, {
      method: 'POST',
      headers: {
        Authorization: `token ${GITHUB_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        base_tree: latestCommitSha, // Base the new tree on the latest commit's tree
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
        Authorization: `token ${GITHUB_PAT}`,
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
        Authorization: `token ${GITHUB_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sha: newCommitSha,
        force: true, // Force update in case of non-fast-forward (e.g., initial auto_init commit)
      }),
    });
    if (!updateRefResponse.ok) {
      const errorData = await updateRefResponse.json();
      throw new Error(`Failed to update ref: ${updateRefResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    console.log('Files pushed successfully. New commit SHA:', newCommitSha);

    // --- Step 3: Trigger GitHub Actions Workflow ---
    console.log(`Triggering GitHub Actions workflow for ${repoName}...`);
    const workflowDispatchResponse = await fetch(`https://api.github.com/repos/${GITHUB_USERNAME}/${repoName}/actions/workflows/preview-build.yml/dispatches`, {
      method: 'POST',
      headers: {
        Authorization: `token ${GITHUB_PAT}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ref: 'main', // The branch the workflow is on
        inputs: {
          repo_name: repoName,
          commit_sha: newCommitSha, // Use the commit SHA from the push step
          project_type: project_type,
        },
      }),
    });
    if (!workflowDispatchResponse.ok) {
      const errorData = await workflowDispatchResponse.json();
      throw new Error(`Failed to dispatch workflow: ${workflowDispatchResponse.statusText} - ${JSON.stringify(errorData)}`);
    }
    console.log('GitHub Actions workflow dispatched.');

    return NextResponse.json({ preview_build_started: true, repo_name: repoName, message: 'Preview build initiated (GitHub integration placeholders).' });
  } catch (error) {
    console.error('Error in /api/preview:', error);
    return NextResponse.json({ error: `Failed to initiate preview build: ${error.message}` }, { status: 500 });
  }
}
