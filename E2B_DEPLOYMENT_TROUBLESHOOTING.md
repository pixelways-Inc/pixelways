# 🚨 E2B + Supabase Deployment Troubleshooting Guide

## **Common Error: "Dependency installation failed: exit status 1"**

This error typically occurs during the npm/pnpm dependency installation phase in the E2B sandbox. Here are the most common causes and solutions:

## **🔍 Root Causes & Solutions**

### **1. Node.js Version Issues**
**Problem**: The React-Vite template requires Node.js >=20, but the sandbox might have an older version.

**Solution**: The deployment now automatically detects and upgrades Node.js to version 20.x.

**Check**: Look for logs like:
```
Node.js version: v18.x.x
Node.js version < 20, upgrading...
New Node.js version: v20.x.x
```

### **2. Memory Constraints**
**Problem**: E2B sandboxes have limited RAM (512MB - 8GB) which can cause npm install to fail.

**Solutions**:
- **Use larger templates**: The deployment automatically tries templates in this order:
  - `desktop` (8GB RAM) - Optimal for complex builds
  - `code-interpreter-v1` (1GB RAM) - Good balance
  - `base` (512MB RAM) - Minimal resources, may fail on complex projects

- **Optimize dependencies**: Use production-only installs
- **Monitor resources**: Check logs for memory warnings

**Check**: Look for logs like:
```
⚠️  Warning: Memory usage is 87%
⚠️  Warning: Using base template with limited resources (512MB RAM)
```

### **3. Package Manager Conflicts**
**Problem**: Template uses `pnpm` but deployment might try `npm` first.

**Solution**: The deployment now uses `pnpm` as the primary package manager for better memory efficiency.

**Check**: Look for logs like:
```
Installing pnpm...
Starting pnpm install with optimized settings...
```

### **4. Disk Space Issues**
**Problem**: Limited disk space in sandbox for node_modules and build output.

**Solutions**:
- Clean up before installation
- Use production-only installs
- Monitor disk usage

**Check**: Look for logs like:
```
💾 Disk space: [disk usage info]
⚠️  Warning: Disk usage is above 90%
```

## **🛠️ Step-by-Step Troubleshooting**

### **Step 1: Check Deployment Logs**
Look for these key indicators in your deployment logs:

```
📊 Resource Monitor - Before Dependency Installation:
💾 Disk space: [check if >90%]
🧠 Memory usage: [check if >85%]

📊 Resource Monitor - After Dependency Installation:
[compare with before to see resource consumption]
```

### **Step 2: Identify the Failure Point**
The logs will show exactly where the failure occurred:

- **Sandbox Creation**: E2B API issues
- **Template Copy**: File system issues
- **Dependency Installation**: npm/pnpm issues
- **Build Process**: Compilation issues
- **File Upload**: Supabase issues

### **Step 3: Apply Specific Solutions**

#### **For Dependency Installation Failures**:
1. **Check package.json**: Ensure all dependencies are valid
2. **Use larger template**: Force desktop template if available
3. **Optimize dependencies**: Remove unused packages
4. **Check npm registry**: Ensure packages are available

#### **For Memory Issues**:
1. **Upgrade template**: Use desktop or code-interpreter-v1
2. **Production installs**: Use `--prod` flag
3. **Clean environment**: Remove unnecessary files
4. **Break down projects**: Deploy smaller components

#### **For Build Failures**:
1. **Check TypeScript**: Look for compilation errors
2. **Verify Vite config**: Ensure build configuration is correct
3. **Check dependencies**: Ensure all required packages are installed
4. **Review build script**: Verify package.json scripts

## **🔧 Advanced Solutions**

### **Force Template Selection**
If you're consistently having issues with smaller templates, you can modify the deployment to prefer larger ones:

```javascript
// In the sandbox creation section, prioritize larger templates
try {
  sandbox = await Sandbox.create('desktop', { apiKey: E2B_CONFIG.API_KEY });
} catch (error) {
  // Only fall back to smaller templates if absolutely necessary
  console.log('Desktop template failed, this may cause resource issues');
  sandbox = await Sandbox.create('code-interpreter-v1', { apiKey: E2B_CONFIG.API_KEY });
}
```

### **Optimize Package Installation**
For memory-constrained environments:

```bash
# Use production-only installs
pnpm install --prod --no-frozen-lockfile --no-audit --no-fund

# Clear cache before install
pnpm store prune

# Use specific Node.js version
nvm use 20
```

### **Monitor Resource Usage**
The deployment now includes comprehensive resource monitoring:

```
📊 Resource Monitor - Before Dependency Installation:
💾 Disk space: Filesystem      Size  Used Avail Use% Mounted on
🧠 Memory usage:               total        used        free      shared  buff/cache   available
⚡ Top memory processes: [top 5 memory-consuming processes]

📊 Resource Monitor - After Dependency Installation:
[Same metrics to compare resource consumption]
```

## **🚨 Emergency Solutions**

### **If All Else Fails**:

1. **Use Static Deployment**: For simple projects, use the static site deployment path
2. **External Build Service**: Consider using GitHub Actions or Vercel for builds
3. **Manual Deployment**: Build locally and upload to Supabase manually
4. **Contact Support**: Reach out with specific error logs and project details

### **Fallback Deployment Path**:
The system automatically detects project type and can fall back to static deployment:

```
Static site detected - using direct Supabase upload.
Static site uploaded to Supabase successfully.
```

## **📊 Error Classification**

The deployment now provides specific error types for better troubleshooting:

```json
{
  "error": "E2B + Supabase deployment failed: [specific error]",
  "troubleshooting": {
    "suggested_solutions": [
      "• Check if the project has valid package.json dependencies",
      "• Verify that all required packages are available on npm",
      "• Consider using a larger E2B template"
    ],
    "error_type": "dependency_install"
  }
}
```

## **🔍 Debugging Commands**

### **Check Sandbox Environment**:
```bash
# Check Node.js version
node --version

# Check available memory
free -h

# Check disk space
df -h .

# Check running processes
ps aux --sort=-%mem | head -5

# Check package manager versions
npm --version
pnpm --version
```

### **Test Package Installation**:
```bash
# Test with minimal package
npm init -y
npm install react

# Test with pnpm
pnpm init
pnpm add react
```

## **📞 Getting Help**

### **When to Contact Support**:
- All E2B templates fail to create
- Consistent memory/disk space issues
- Package installation failures across multiple projects
- Build failures with valid configurations

### **Information to Provide**:
1. **Complete error logs** from the deployment
2. **Project type** (React, Vite, static, etc.)
3. **Project size** (number of files, dependencies)
4. **E2B template used** (desktop, code-interpreter-v1, base)
5. **Resource monitoring output** (if available)

### **Support Channels**:
- **E2B Issues**: Check E2B service status and quotas
- **Supabase Issues**: Verify credentials and storage permissions
- **Project Issues**: Review package.json and build configuration

---

## **🎯 Quick Fix Checklist**

- [ ] Check E2B API key and quotas
- [ ] Verify Node.js version (should be >=20)
- [ ] Use larger E2B template if available
- [ ] Monitor resource usage during deployment
- [ ] Check package.json for valid dependencies
- [ ] Verify Supabase credentials and permissions
- [ ] Review build configuration and scripts
- [ ] Check for TypeScript compilation errors
- [ ] Monitor disk space and memory usage
- [ ] Use production-only dependency installation

**Remember**: The deployment now automatically handles most common issues and provides detailed error information with specific solutions!
