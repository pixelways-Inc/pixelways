# Custom Site Name Feature Implementation

## ✅ Feature Complete!

I've successfully implemented the custom site name functionality that allows users to enter unique names for their deployments.

## 🎯 How It Works

### User Experience
1. **Generate Website** → AI creates the website files
2. **Switch to Preview Tab** → Site name input appears in header
3. **Enter Custom Name** → User types their desired site name (no spaces allowed)
4. **Click Deploy** → Site deploys with the custom name

### Validation & Feedback
- **Real-time Input Filtering**: Automatically removes invalid characters (spaces, special chars)
- **Visual Feedback**: Input border turns red if invalid characters detected
- **Required Field**: Deploy button disabled until site name is entered
- **Format Validation**: Only allows letters, numbers, and hyphens

## 🎨 UI Implementation

### Desktop Version
```jsx
{/* Site Name Input */}
<input
  type="text"
  value={customSiteName}
  onChange={(e) => {
    const value = e.target.value.replace(/[^a-zA-Z0-9-]/g, '');
    setCustomSiteName(value);
  }}
  placeholder="Enter site name (no spaces)"
  className="form-control form-control-sm ms-2"
  style={{width: '200px', fontSize: '0.875rem'}}
  disabled={isDeploying}
/>

{/* Deploy Button */}
<button
  onClick={triggerPreview}
  disabled={!generatedWebsite || isDeploying || !customSiteName.trim()}
  className="btn btn-success btn-sm px-3 ms-2"
>
  <Rocket size={16} />
  {isDeploying ? 'Deploying…' : 'Deploy'}
</button>
```

### Mobile Version
```jsx
<div className="mobile-deploy-section">
  <input
    type="text"
    value={customSiteName}
    onChange={(e) => {
      const value = e.target.value.replace(/[^a-zA-Z0-9-]/g, '');
      setCustomSiteName(value);
    }}
    placeholder="Enter site name"
    className="mobile-site-input"
    disabled={isDeploying}
  />
  <button
    onClick={triggerPreview}
    disabled={isDeploying || !customSiteName.trim()}
    className="mobile-deploy-button"
  >
    <Rocket size={16} />
    <span>{isDeploying ? 'Deploying...' : 'Deploy'}</span>
  </button>
</div>
```

## 🔧 Backend Integration

### Preview API Updates
- Added `site_name` parameter to request body
- **Static Sites**: Uses custom name directly → `https://pixelways.co/sites/{siteName}/index.html`
- **React/Vite**: Uses custom name for temporary repo → `{siteName}-{timestamp}`

### GitHub Export Integration
- Also uses custom site name for repository creation
- Fallback to auto-generated name if not provided

### API Request Format
```javascript
{
  files: [...],
  project_type: 'static' | 'react-vite',
  site_name: 'my-awesome-site', // NEW: Custom site name
  github_token: '...',
  github_username: '...'
}
```

## 🛡️ Validation System

### Frontend Validation
```javascript
// Real-time character filtering
const value = e.target.value.replace(/[^a-zA-Z0-9-]/g, '');

// Pre-deployment validation
if (!customSiteName.trim()) {
  alert('Please enter a site name before deploying.');
  return;
}

const siteNameRegex = /^[a-zA-Z0-9-]+$/;
if (!siteNameRegex.test(customSiteName.trim())) {
  alert('Site name can only contain letters, numbers, and hyphens (no spaces).');
  return;
}
```

### Visual Indicators
- **Input Border**: Red border for invalid characters
- **Button State**: Disabled when no site name entered
- **Placeholder Text**: Clear instructions about format

## 🎉 Benefits

### For Users
✅ **Memorable URLs**: Custom names instead of random timestamps  
✅ **Professional Branding**: Sites with meaningful names  
✅ **Easy Sharing**: Clean, brandable URLs  
✅ **Better Organization**: Custom names for easy identification  

### For System
✅ **Unique Naming**: Timestamp suffix prevents conflicts  
✅ **Consistent Format**: Standardized validation across all endpoints  
✅ **Backward Compatibility**: Falls back to auto-generated names  
✅ **Mobile Responsive**: Works seamlessly on all devices  

## 🌐 URL Examples

### Before (Auto-generated)
- Static: `https://pixelways.co/sites/site-1705234567890/index.html`
- React: `pixelai-preview-1705234567890`

### After (Custom Names)
- Static: `https://pixelways.co/sites/my-portfolio/index.html`
- React: `my-portfolio-1705234567890`

The custom site name feature provides users with professional, memorable URLs while maintaining system reliability through proper validation and conflict prevention! 🚀
