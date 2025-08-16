# 🚀 E2B + Supabase Direct Deployment Flow

## **Overview**
This document describes the new streamlined deployment flow that replaces GitHub Actions with E2B (sandbox) + Supabase direct deployment for React + Vite projects.

## **🔄 Deployment Flow Diagram**

```mermaid
flowchart TD
    A[AI Builder generates React + Vite project] --> B[User clicks Deploy]
    B --> C[Preview API receives request]
    C --> D[Create E2B Node.js sandbox]
    D --> E[Upload project files to sandbox]
    E --> F[Run npm install in sandbox]
    F --> G[Run npm run build in sandbox]
    G --> H[Generate dist/ folder with static assets]
    H --> I[Loop through dist/ files]
    I --> J[Upload each file to Supabase Storage]
    J --> K[Files available at pixelways.co/sites/[appName]/]
    K --> L[Close E2B sandbox]
    
    style A fill:#e1f5fe
    style K fill:#c8e6c9
    style L fill:#ffcdd2
```

## **📋 Step-by-Step Process**

### **1. Project Generation**
- AI Builder creates React + Vite project structure
- Includes package.json, src/ files, and configuration
- User provides custom site name

### **2. E2B Sandbox Creation**
- Creates isolated Node.js environment
- Provides clean build environment
- Handles dependency installation and building

### **3. File Upload to Sandbox**
- All project files uploaded to E2B sandbox
- Preserves exact file structure
- Files are ready for npm operations

### **4. Dependency Installation**
- Runs `npm install` in sandbox
- Installs all required packages
- Creates node_modules directory

### **5. Project Building**
- Runs `npm run build` in sandbox
- Generates optimized static assets
- Creates dist/ folder with build output

### **6. Build Output Processing**
- Scans dist/ folder recursively
- Identifies all files and subdirectories
- Prepares for Supabase upload

### **7. Supabase Storage Upload**
- Each file uploaded to `sites/[appName]/` bucket
- Preserves folder structure
- Sets appropriate MIME types
- Enables upsert for file updates

### **8. Live Deployment**
- Files immediately available at:
  `https://pixelways.co/sites/[appName]/`
- No build time or deployment delays
- Instant preview access

### **9. Cleanup**
- E2B sandbox automatically closed
- Resources freed up
- Ready for next deployment

## **🔧 Technical Implementation**

### **E2B Sandbox Operations**
```javascript
// Create sandbox
const sandbox = await Sandbox.create('base');

// Upload files
await sandbox.files.write(filePath, fileContent);

// Run commands
await sandbox.commands.run('npm install');
await sandbox.commands.run('npm run build');

// List build output
const buildOutput = await sandbox.files.list('dist', { recursive: true });

// Read file content
const fileContent = await sandbox.files.read(`dist/${fileName}`);

// Close sandbox
await sandbox.close();
```

### **Supabase Storage Upload**
```javascript
// Upload each build file
const { error } = await supabase.storage
  .from('sites')
  .upload(`${appName}/${filePath}`, fileContent, {
    upsert: true,
    contentType: getMimeType(fileName)
  });
```

### **MIME Type Detection**
```javascript
function getMimeType(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const mimeTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'svg': 'image/svg+xml',
    // ... more types
  };
  return mimeTypes[ext] || 'application/octet-stream';
}
```

## **✅ Benefits of New Flow**

### **Speed & Efficiency**
- ⚡ **No GitHub Actions delays** - Direct deployment
- 🚀 **Instant preview** - Files available immediately
- 🔄 **Streamlined pipeline** - E2B → Supabase in one flow

### **Reliability**
- 🛡️ **Isolated builds** - Clean E2B environment
- 🔒 **No token issues** - Direct Supabase upload
- 📦 **Consistent builds** - Same environment every time

### **Cost & Resource Management**
- 💰 **No GitHub Actions minutes** consumed
- 🧹 **Automatic cleanup** - Sandboxes closed after use
- 📊 **Better monitoring** - Direct control over build process

### **Developer Experience**
- 🎯 **Simplified workflow** - One click deployment
- 📱 **Real-time feedback** - Build progress logging
- 🚫 **No repository management** - Direct file handling

## **🆚 Comparison: Old vs New**

| Aspect | GitHub Actions (Old) | E2B + Supabase (New) |
|--------|---------------------|----------------------|
| **Speed** | 2-5 minutes | 30 seconds - 2 minutes |
| **Reliability** | Token issues, repo conflicts | Clean builds, no conflicts |
| **Setup** | OAuth, repo creation | Direct deployment |
| **Monitoring** | GitHub Actions logs | Direct API logs |
| **Cost** | GitHub Actions minutes | E2B sandbox time |
| **Complexity** | Multiple API calls | Single deployment flow |

## **🚨 Error Handling**

### **Common Issues & Solutions**

#### **E2B Sandbox Creation Failed**
- Check E2B API key and quotas
- Verify network connectivity
- Retry with exponential backoff

#### **Build Process Failed**
- Check npm install errors
- Verify package.json dependencies
- Review build script configuration

#### **Supabase Upload Failed**
- Verify Supabase credentials
- Check storage bucket permissions
- Ensure file size limits

#### **MIME Type Issues**
- Verify file extensions
- Check MIME type mapping
- Handle binary files properly

## **🔮 Future Enhancements**

### **Planned Features**
- 📊 **Build analytics** - Track build times and success rates
- 🔄 **Rollback support** - Previous version restoration
- 🌐 **Custom domains** - Direct domain mapping
- 📱 **Mobile optimization** - Build-time mobile checks

### **Advanced Options**
- 🧪 **Preview environments** - Multiple deployment stages
- 🔍 **Build validation** - Automated quality checks
- 📈 **Performance monitoring** - Lighthouse integration
- 🎨 **Design system validation** - Component consistency checks

## **📚 Usage Examples**

### **Basic Deployment**
```javascript
// Deploy React + Vite project
const result = await fetch('/api/preview', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    files: projectFiles,
    projectType: 'react-vite',
    siteName: 'my-awesome-app'
  })
});

const { previewUrl } = await result.json();
console.log(`Live at: ${previewUrl}`);
```

### **Deployment with Custom Options**
```javascript
// Advanced deployment with options
const deploymentOptions = {
  files: projectFiles,
  projectType: 'react-vite',
  siteName: 'my-app',
  buildOptions: {
    optimize: true,
    minify: true,
    sourcemap: false
  }
};
```

## **🔐 Security Considerations**

### **E2B Sandbox Security**
- Isolated execution environment
- No access to host system
- Automatic cleanup after use
- Resource limits enforced

### **Supabase Storage Security**
- Bucket-level access control
- File-level permissions
- Secure upload endpoints
- Content validation

### **API Security**
- Rate limiting
- Request validation
- Error message sanitization
- Logging and monitoring

---

## **📞 Support & Troubleshooting**

For issues with the new deployment flow:

1. **Check logs** - Review API response and console logs
2. **Verify credentials** - Ensure E2B and Supabase keys are valid
3. **Test connectivity** - Verify network access to external services
4. **Review quotas** - Check E2B sandbox limits and Supabase storage

---

*This deployment flow represents a significant improvement in speed, reliability, and developer experience for React + Vite project deployments.*
