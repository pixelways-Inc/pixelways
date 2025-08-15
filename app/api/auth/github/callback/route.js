import { NextResponse } from 'next/server';

const GITHUB_CLIENT_ID = 'Ov23liVwQzorWABZkC5t';
const GITHUB_CLIENT_SECRET = '8567050e0d7a7d568fdc152ea2bb516172609414';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  
  // Get stored state and origin
  const storedState = request.cookies.get('github_oauth_state')?.value;
  const storedOrigin = request.cookies.get('github_oauth_origin')?.value;
  
  // Verify state parameter
  if (!state || state !== storedState) {
    if (storedOrigin) {
      // Return HTML page that sends error message to parent window
      return new Response(createAuthResultPage('error', null, null, 'Invalid state parameter'), {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    return NextResponse.redirect(new URL('/?error=invalid_state', request.url));
  }

  if (!code) {
    if (storedOrigin) {
      // Return HTML page that sends error message to parent window
      return new Response(createAuthResultPage('error', null, null, 'No authorization code received'), {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    return NextResponse.redirect(new URL('/?error=no_code', request.url));
  }

  try {
    // Exchange code for access token
    const tokenResponse = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        code,
      }),
    });

    const tokenData = await tokenResponse.json();
    
    if (tokenData.error) {
      console.error('GitHub OAuth error:', tokenData);
      if (storedOrigin) {
        return new Response(createAuthResultPage('error', null, null, 'GitHub OAuth failed'), {
          headers: { 'Content-Type': 'text/html' }
        });
      }
      return NextResponse.redirect(new URL('/?error=oauth_failed', request.url));
    }

    const accessToken = tokenData.access_token;

    // Get user information
    const userResponse = await fetch('https://api.github.com/user', {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/vnd.github.v3+json',
      },
    });

    const userData = await userResponse.json();

    if (!userResponse.ok) {
      console.error('GitHub user fetch error:', userData);
      if (storedOrigin) {
        return new Response(createAuthResultPage('error', null, null, 'Failed to fetch user data'), {
          headers: { 'Content-Type': 'text/html' }
        });
      }
      return NextResponse.redirect(new URL('/?error=user_fetch_failed', request.url));
    }

    const user = {
      id: userData.id,
      login: userData.login,
      name: userData.name,
      email: userData.email,
      avatar_url: userData.avatar_url,
    };

    // If this was opened in a new tab (has origin), send message to parent window
    if (storedOrigin) {
      const response = new Response(createAuthResultPage('success', accessToken, user), {
        headers: { 'Content-Type': 'text/html' }
      });
      
      // Clear cookies
      response.headers.append('Set-Cookie', 'github_oauth_state=; Max-Age=0; Path=/');
      response.headers.append('Set-Cookie', 'github_oauth_origin=; Max-Age=0; Path=/');
      
      // Set secure cookies with the auth data
      response.headers.append('Set-Cookie', `github_token=${accessToken}; HttpOnly; Secure=${process.env.NODE_ENV === 'production'}; Max-Age=${60 * 60 * 24 * 7}; Path=/`);
      response.headers.append('Set-Cookie', `github_username=${userData.login}; HttpOnly; Secure=${process.env.NODE_ENV === 'production'}; Max-Age=${60 * 60 * 24 * 7}; Path=/`);
      
      return response;
    }

    // Regular redirect flow (for non-popup auth)
    const redirectUrl = new URL('/', request.url);
    redirectUrl.searchParams.set('github_auth_success', 'true');
    redirectUrl.searchParams.set('github_token', accessToken);
    redirectUrl.searchParams.set('github_username', userData.login);

    const response = NextResponse.redirect(redirectUrl);
    
    // Clear the OAuth state cookie
    response.cookies.delete('github_oauth_state');
    
    // Set secure cookies with the auth data
    response.cookies.set('github_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });
    
    response.cookies.set('github_username', userData.login, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7 // 7 days
    });

    return response;

  } catch (error) {
    console.error('OAuth callback error:', error);
    if (storedOrigin) {
      return new Response(createAuthResultPage('error', null, null, 'Authentication failed'), {
        headers: { 'Content-Type': 'text/html' }
      });
    }
    return NextResponse.redirect(new URL('/?error=callback_failed', request.url));
  }
}

// Helper function to create HTML page that sends message to parent window
function createAuthResultPage(status, token = null, user = null, errorMessage = null) {
  const data = status === 'success' 
    ? { type: 'GITHUB_AUTH_SUCCESS', token, user }
    : { type: 'GITHUB_AUTH_ERROR', error: errorMessage };

  return `
<!DOCTYPE html>
<html>
<head>
    <title>GitHub Authentication</title>
    <style>
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: #f8f9fa;
        }
        .container {
            text-align: center;
            padding: 2rem;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        .success { color: #28a745; }
        .error { color: #dc3545; }
        .loading { color: #6c757d; }
    </style>
</head>
<body>
    <div class="container">
        <div class="${status === 'success' ? 'success' : status === 'error' ? 'error' : 'loading'}">
            ${status === 'success' 
                ? '✅ Authentication successful! Returning to workspace...' 
                : status === 'error' 
                ? '❌ Authentication failed: ' + errorMessage
                : '🔄 Processing authentication...'
            }
        </div>
    </div>
    
    <script>
        // Send message to parent window
        const messageData = ${JSON.stringify(data)};
        
        if (window.opener) {
            window.opener.postMessage(messageData, '*');
            // Close the popup window
            setTimeout(() => {
                window.close();
            }, 1000);
        } else {
            // Fallback: redirect to home page
            setTimeout(() => {
                window.location.href = '/workspace';
            }, 2000);
        }
    </script>
</body>
</html>`;
}
