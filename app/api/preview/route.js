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

    // TODO: Future support for React/Vite sites with GitHub Actions deployment
    // Currently only supporting static HTML sites for simplicity
    console.log(`${project_type} site detected - but currently only static sites are supported`);
    
    return NextResponse.json({
      error: 'Project type not supported',
      message: 'Currently only static HTML sites are supported. React/Vite support may be added in the future.',
      supportedTypes: ['static']
    }, { status: 400 });

    /* 
    // COMMENTED OUT: GitHub Actions workflow for React/Vite projects
    // This section can be uncommented and modified when adding React/Vite support back
    
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

    // All GitHub repository creation and workflow logic commented out for future use
    
    // END OF COMMENTED SECTION - GitHub Actions workflow */
  } catch (error) {
    console.error('Error in /api/preview:', error);
    return NextResponse.json({ error: `Failed to initiate preview build: ${error.message}` }, { status: 500 });
  }
}
