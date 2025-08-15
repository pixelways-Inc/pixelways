# GitHub OAuth Authentication Setup - JavaScript Version

## Overview
Successfully converted TypeScript GitHub authentication files to JavaScript and integrated with the existing preview API for React Vite project deployment pipeline.

## Files Created/Updated

### API Routes (JavaScript)
- ✅ `app/api/auth/github/route.js` - Main OAuth route (GET for authorize, POST for token exchange)
- ✅ `app/api/auth/github/callback/route.js` - OAuth callback handler
- ✅ `app/api/auth/github/status/route.js` - Auth status checker and logout
- ✅ `app/api/export-to-github/route.js` - Export projects to GitHub (fixed to match preview API file handling)

### Components
- ✅ `components/GitHubAuth.js` - Updated to work with new JavaScript API routes
- ✅ `app/auth/github/callback/page.js` - Callback page (existing)

## GitHub OAuth App Configuration
- **Client ID**: `Ov23liVwQzorWABZkC5t`
- **Redirect URI**: `https://pixelways.co/api/auth/github/callback`
- **Scopes**: `repo user:email delete_repo`

## How It Works

### 1. Authentication Flow
1. User clicks "Connect with GitHub" in `GitHubAuth` component
2. Redirects to `/api/auth/github?action=authorize`
3. GitHub OAuth page → `/api/auth/github/callback` 
4. Callback processes token and redirects to main app with auth params
5. `GitHubAuth` component detects auth success and stores token/user info

### 2. Preview API Integration
The preview API (`app/api/preview/route.js`) already supports GitHub tokens:
```javascript
const { files, project_type = 'static', github_token = null, github_username = null } = await request.json();
```

For React/Vite projects, it:
- Creates temporary GitHub repo using user's token
- Pushes files via GitHub Actions workflow
- Builds and deploys to Supabase
- Cleans up repo after deployment

### 3. Export to GitHub API
Fixed `app/api/export-to-github/route.js` to match preview API file handling:
- Accepts `{ projectName, files, githubToken, githubUsername }`
- Files format: `[{ path: string, content: string }]`
- Creates permanent GitHub repository
- Uploads all files using GitHub Git API (tree/commit/ref)
- Returns repo URL and deployment instructions

## Usage in Components

### Get Auth Status
```javascript
import { getGitHubAuthStatus } from '../components/GitHubAuth';

const authStatus = getGitHubAuthStatus();
if (authStatus.isAuthenticated) {
  const { token, user } = authStatus;
  // Use token for GitHub API calls
}
```

### Integration with Preview
The workspace components can now pass GitHub credentials to preview API:
```javascript
const response = await fetch('/api/preview', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    files: generatedFiles, // Array of {path, content}
    project_type: 'react-vite',
    github_token: authStatus.token,
    github_username: authStatus.user.login
  })
});
```

## Key Improvements
1. ✅ Converted all TypeScript files to JavaScript
2. ✅ Fixed export API to use same file format as preview API
3. ✅ Removed unnecessary framework-specific file generation
4. ✅ Uses existing file structure from AI generation
5. ✅ Proper Git API usage for bulk file uploads
6. ✅ Enhanced error handling and validation
7. ✅ Added helper function for auth status checking

## Testing
- ✅ No linter errors
- ✅ Development server runs successfully
- ✅ All routes follow Next.js 14 App Router patterns
- ✅ Compatible with existing preview pipeline

The system is now ready for React Vite project deployment pipeline with user GitHub access tokens!
