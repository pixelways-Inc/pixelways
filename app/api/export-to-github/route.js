import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { 
      projectName, 
      files, 
      githubToken,
      githubUsername 
    } = await request.json();

    // Validate inputs - only need projectName, files, and GitHub credentials
    if (!projectName || !files || !githubToken || !githubUsername) {
      return NextResponse.json(
        { error: 'Missing required fields: projectName, files, githubToken, githubUsername' },
        { status: 400 }
      );
    }

    // Validate files format - should be array of {path, content}
    if (!Array.isArray(files)) {
      return NextResponse.json(
        { error: 'Files must be an array of {path, content} objects' },
        { status: 400 }
      );
    }

    console.log(`Creating GitHub repository: ${projectName} with ${files.length} files`);

    // Create GitHub repository using GitHub API directly
    const createRepoResponse = await fetch('https://api.github.com/user/repos', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: projectName,
        description: `Generated with PixelWays`,
        private: false,
        auto_init: true // Initialize with README
      })
    });

    if (!createRepoResponse.ok) {
      const errorData = await createRepoResponse.json();
      console.error('GitHub repo creation error:', errorData);
      return NextResponse.json(
        { error: errorData.message || 'Failed to create repository' },
        { status: createRepoResponse.status }
      );
    }

    const repoData = await createRepoResponse.json();
    const repoUrl = repoData.html_url;
    const defaultBranch = repoData.default_branch || 'main';

    console.log('Repository created:', repoUrl);

    // Get the latest commit SHA to properly commit files
    const refResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${projectName}/git/ref/heads/${defaultBranch}`, {
      headers: { 
        'Authorization': `Bearer ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json'
      },
    });

    if (!refResponse.ok) {
      const errorData = await refResponse.json();
      throw new Error(`Failed to get branch ref: ${refResponse.statusText} - ${JSON.stringify(errorData)}`);
    }

    const refData = await refResponse.json();
    const latestCommitSha = refData.object.sha;

    // Create a new Git tree with all files
    const tree = files.map(file => ({
      path: file.path,
      mode: '100644',
      type: 'blob',
      content: file.content,
    }));

    const treeResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${projectName}/git/trees`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
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

    // Create a new commit
    const commitResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${projectName}/git/commits`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        message: 'Add project files from PixelWays',
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

    // Update the branch reference
    const updateRefResponse = await fetch(`https://api.github.com/repos/${githubUsername}/${projectName}/git/refs/heads/${defaultBranch}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `Bearer ${githubToken}`,
        'Accept': 'application/vnd.github.v3+json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sha: newCommitSha,
        force: true,
      }),
    });

    if (!updateRefResponse.ok) {
      const errorData = await updateRefResponse.json();
      throw new Error(`Failed to update branch: ${updateRefResponse.statusText} - ${JSON.stringify(errorData)}`);
    }

    console.log('Files pushed successfully. New commit SHA:', newCommitSha);

    // Create deployment instructions based on file types
    const hasPackageJson = files.some(file => file.path === 'package.json');
    const hasIndexHtml = files.some(file => file.path === 'index.html');
    
    const deploymentInstructions = {
      vercelDeploy: {
        steps: [
          'Connect your GitHub repository to Vercel',
          'Import the project at https://vercel.com/new',
          'Select the repository and deploy'
        ],
        directLink: `https://vercel.com/new/git/external?repository-url=${encodeURIComponent(repoUrl)}`
      },
      githubPages: hasIndexHtml ? {
        steps: [
          'Go to repository Settings > Pages',
          'Select "Deploy from a branch"',
          'Choose "main" branch and "/ (root)" folder',
          'Save and wait for deployment'
        ],
        note: 'Static sites can be deployed to GitHub Pages for free'
      } : null,
      projectType: hasPackageJson ? 'React/Node.js Project' : 'Static Website'
    };

    return NextResponse.json({
      success: true,
      repoUrl,
      commitSha: newCommitSha,
      deploymentInstructions,
      filesUploaded: files.length,
      message: `Successfully created repository and pushed ${files.length} files to GitHub!`
    });

  } catch (error) {
    console.error('Export error:', error);
    return NextResponse.json(
      { error: 'Failed to export to GitHub' },
      { status: 500 }
    );
  }
}
