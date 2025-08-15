# PixelWays Preview & Deployment System Analysis

## Overview
The preview system has **two distinct deployment pipelines** based on project type:

1. **Static Sites** → Direct Supabase upload
2. **React/Vite Projects** → GitHub Actions build pipeline

## 🎯 Input Format
```javascript
{
  files: [{ path: string, content: string }], // Array of files
  project_type: 'static' | 'react-vite' | 'next',
  github_token?: string,    // Optional user token
  github_username?: string  // Optional username
}
```

## 📊 Deployment Paths

### Path 1: Static Sites (HTML/CSS/JS)
**Direct Supabase Upload - Instant Deployment**

1. **File Processing**: Receives files array directly
2. **Storage Setup**: Creates `site-{timestamp}` folder in Supabase storage
3. **File Upload**: Uploads each file with proper content-type detection
4. **Preview URL**: Returns `https://pixelways.co/sites/{siteName}/index.html`

**Advantages:**
- ⚡ Instant deployment (no build time)
- 💰 No GitHub Actions usage
- 🔒 No temporary repositories

### Path 2: React/Vite Projects
**GitHub Actions Build Pipeline - Full CI/CD**

#### Phase 1: Repository Setup
1. **Token Selection**: Uses user token if available, otherwise app token (`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`)
2. **Repo Creation**: Creates `pixelai-preview-{timestamp}` (private, temporary)
3. **Workflow Injection**: Adds `.github/workflows/preview-build.yml` to files array
4. **File Upload**: Uses Git Tree API to upload all files at once

#### Phase 2: GitHub Actions Execution
```yaml
name: Preview Build and Deploy
on:
  workflow_dispatch:
    inputs:
      repo_name: string
      commit_sha: string  
      project_type: string
```

**Build Steps:**
1. **Environment**: Ubuntu latest with Node.js 18
2. **Dependencies**: `npm ci` for lockfile-based install
3. **Build**: `npm run build` (creates `dist/` folder)
4. **Upload Script**: Dynamic Node.js script uploads built files to Supabase
5. **Webhook**: Notifies `/api/build-complete` with preview URL
6. **Cleanup**: Deletes temporary repository

#### Phase 3: Webhook Processing
- **Success**: Logs preview URL, handles cleanup confirmation
- **Failure**: Logs error details for debugging
- **Repository Cleanup**: Ensures temporary repos are deleted

## 🔧 Technical Architecture

### Supabase Integration
- **Bucket**: `sites` (public storage)
- **URL Pattern**: `https://pixelways.co/sites/{siteName}/{filePath}`
- **Content Types**: Automatic detection (HTML, CSS, JS, images)
- **Authentication**: Service role key for uploads

### GitHub Integration
- **App Account**: `Hansade2005` (fallback for anonymous users)
- **User Tokens**: Preferred when available (from OAuth)
- **Repository Pattern**: `pixelai-preview-{timestamp}` (temporary)
- **Cleanup Token**: Separate token for repository deletion

### File Serving
Files are served through your custom route:
```
GET /sites/[site-name]/[...path]/route.js
```
This route proxies Supabase storage with proper content-type headers.

## 🔄 GitHub Actions Workflow Details

### Environment Variables
```bash
SUPABASE_URL=https://dlunpilhklsgvkegnnlp.supabase.co
SUPABASE_SERVICE_ROLE_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
BUILD_WEBHOOK_URL=https://pixelways.co/api/build-complete
REPO_CLEANUP_TOKEN=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
```

### Upload Logic
The GitHub Actions creates a Node.js script that:
1. Detects build directory (`dist/` or root)
2. Recursively uploads all files
3. Sets proper content-types
4. Uses repository name as site identifier
5. Returns preview URL to workflow

### Cleanup Strategy
- **Double Cleanup**: Both in GitHub Actions AND webhook endpoint
- **Fail-Safe**: 10-second delay before cleanup to ensure webhook processing
- **Error Handling**: Cleanup failures don't fail the entire deployment

## 🚀 Performance Characteristics

### Static Sites
- **Deployment Time**: ~2-5 seconds
- **Resource Usage**: Minimal (direct upload)
- **Reliability**: Very high (no external dependencies)

### React/Vite Projects  
- **Deployment Time**: ~3-8 minutes
- **Resource Usage**: GitHub Actions minutes
- **Reliability**: High (with automated cleanup)

## 🔐 Security Features

1. **Temporary Repositories**: Auto-deleted after deployment
2. **Private Repos**: Build artifacts not publicly visible during build
3. **Token Isolation**: User tokens used for their own repos only
4. **Service Authentication**: Separate service keys for Supabase
5. **Webhook Validation**: Proper payload validation

## 🎯 User Experience Flow

### For Static Projects
```
Generate → Preview (instant) → Deploy to GitHub (optional)
```

### For React Projects
```
Generate → Build (3-8min) → Preview → Deploy to GitHub (optional)
```

## 💡 Key Insights

1. **Smart Routing**: Automatically detects project type from files
2. **Dual Authentication**: Supports both anonymous and authenticated users
3. **Resource Optimization**: Only uses GitHub Actions when necessary
4. **Cleanup Automation**: Prevents repository accumulation
5. **Webhook Architecture**: Reliable build completion notification
6. **Content-Type Intelligence**: Automatic MIME type detection

The system is designed for **maximum flexibility** while maintaining **performance** and **cost efficiency**. Static sites get instant previews, while complex projects get full CI/CD with automatic cleanup.
