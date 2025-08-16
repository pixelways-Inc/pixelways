// Utility functions for exporting Sandpack projects to static files

/**
 * Export a Sandpack project to static files that can be uploaded to Supabase
 * @param {Object} sandpackInstance - The Sandpack instance
 * @param {Array} originalFiles - Original project files
 * @param {string} projectType - Type of project (react, vue, vanilla, static)
 * @returns {Promise<Array>} Array of files ready for upload
 */
export async function exportSandpackToStatic(sandpackInstance, originalFiles, projectType) {
  try {
    console.log('Starting Sandpack static export...');
    
    let exportedFiles = [];
    
    switch (projectType) {
      case 'react':
      case 'react-vite':
        exportedFiles = await exportReactProject(sandpackInstance, originalFiles);
        break;
      case 'vue':
        exportedFiles = await exportVueProject(sandpackInstance, originalFiles);
        break;
      case 'vanilla':
      case 'static':
        exportedFiles = await exportStaticProject(sandpackInstance, originalFiles);
        break;
      default:
        exportedFiles = await exportStaticProject(sandpackInstance, originalFiles);
    }
    
    console.log(`Exported ${exportedFiles.length} files for ${projectType} project`);
    return exportedFiles;
    
  } catch (error) {
    console.error('Export failed:', error);
    throw new Error(`Failed to export Sandpack project: ${error.message}`);
  }
}

/**
 * Export React project to static files
 */
async function exportReactProject(sandpackInstance, originalFiles) {
  const files = [];
  
  // Get the built output from Sandpack's preview iframe
  const previewFrame = await getPreviewFrame(sandpackInstance);
  if (previewFrame) {
    // Extract HTML content
    const htmlContent = await extractHTMLFromFrame(previewFrame);
    
    // Create index.html
    files.push({
      path: 'index.html',
      content: htmlContent,
      action: 'create'
    });
    
    // Extract CSS from the frame
    const cssContent = await extractCSSFromFrame(previewFrame);
    if (cssContent) {
      files.push({
        path: 'styles.css',
        content: cssContent,
        action: 'create'
      });
    }
    
    // Extract JavaScript from the frame
    const jsContent = await extractJSFromFrame(previewFrame);
    if (jsContent) {
      files.push({
        path: 'app.js',
        content: jsContent,
        action: 'create'
      });
    }
  }
  
  // If we couldn't extract from frame, fall back to original files
  if (files.length === 0) {
    return fallbackToOriginalFiles(originalFiles, 'react');
  }
  
  return files;
}

/**
 * Export Vue project to static files
 */
async function exportVueProject(sandpackInstance, originalFiles) {
  const files = [];
  
  // Similar to React but handle Vue-specific files
  const previewFrame = await getPreviewFrame(sandpackInstance);
  if (previewFrame) {
    const htmlContent = await extractHTMLFromFrame(previewFrame);
    
    files.push({
      path: 'index.html',
      content: htmlContent,
      action: 'create'
    });
    
    // Extract Vue-specific assets
    const cssContent = await extractCSSFromFrame(previewFrame);
    if (cssContent) {
      files.push({
        path: 'styles.css',
        content: cssContent,
        action: 'create'
      });
    }
  }
  
  if (files.length === 0) {
    return fallbackToOriginalFiles(originalFiles, 'vue');
  }
  
  return files;
}

/**
 * Export static project (HTML/CSS/JS)
 */
async function exportStaticProject(sandpackInstance, originalFiles) {
  // For static projects, we can directly use the original files
  // but we might want to process them to ensure they're properly formatted
  
  const files = originalFiles.map(file => ({
    ...file,
    action: 'create'
  }));
  
  // Ensure we have an index.html
  if (!files.find(f => f.path === 'index.html')) {
    // Create a basic index.html if none exists
    files.push({
      path: 'index.html',
      content: createBasicHTML(originalFiles),
      action: 'create'
    });
  }
  
  return files;
}

/**
 * Get the preview iframe from Sandpack
 */
async function getPreviewFrame(sandpackInstance) {
  try {
    // This is a simplified approach - in practice you'd need to:
    // 1. Access the Sandpack iframe
    // 2. Wait for it to load
    // 3. Extract content from it
    
    // For now, return null to trigger fallback
    return null;
  } catch (error) {
    console.warn('Could not access Sandpack preview frame:', error);
    return null;
  }
}

/**
 * Extract HTML content from preview frame
 */
async function extractHTMLFromFrame(frame) {
  try {
    // This would extract the rendered HTML from the Sandpack preview
    // Implementation depends on Sandpack's internal structure
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Project</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <div id="root"></div>
    <script src="app.js"></script>
</body>
</html>`;
  } catch (error) {
    console.warn('Could not extract HTML from frame:', error);
    return createBasicHTML();
  }
}

/**
 * Extract CSS content from preview frame
 */
async function extractCSSFromFrame(frame) {
  try {
    // Extract CSS from the frame's computed styles
    // This is a placeholder implementation
    
    return `/* Exported CSS */
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

#root {
    min-height: 100vh;
}`;
  } catch (error) {
    console.warn('Could not extract CSS from frame:', error);
    return '';
  }
}

/**
 * Extract JavaScript content from preview frame
 */
async function extractJSFromFrame(frame) {
  try {
    // Extract JavaScript from the frame
    // This is a placeholder implementation
    
    return `// Exported JavaScript
console.log('App loaded successfully');`;
  } catch (error) {
    console.warn('Could not extract JS from frame:', error);
    return '';
  }
}

/**
 * Fallback to original files when frame extraction fails
 */
function fallbackToOriginalFiles(originalFiles, projectType) {
  console.log('Using fallback to original files');
  
  const files = [];
  
  // Process original files to ensure they're web-ready
  originalFiles.forEach(file => {
    let content = file.content;
    
    // Ensure HTML files are complete
    if (file.path.endsWith('.html') && !content.includes('<!DOCTYPE html>')) {
      content = wrapInHTMLTemplate(content);
    }
    
    // Ensure React components are properly formatted
    if (file.path.endsWith('.jsx') || file.path.endsWith('.tsx')) {
      content = ensureReactComponent(content);
    }
    
    files.push({
      path: file.path,
      content: content,
      action: 'create'
    });
  });
  
  // Add missing essential files
  if (!files.find(f => f.path === 'index.html')) {
    files.push({
      path: 'index.html',
      content: createBasicHTML(originalFiles),
      action: 'create'
    });
  }
  
  return files;
}

/**
 * Create basic HTML template
 */
function createBasicHTML(files = []) {
  const hasCSS = files.some(f => f.path.endsWith('.css'));
  const hasJS = files.some(f => f.path.endsWith('.js') || f.path.endsWith('.jsx'));
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Project</title>
    ${hasCSS ? '<link rel="stylesheet" href="styles.css">' : ''}
</head>
<body>
    <div id="root"></div>
    ${hasJS ? '<script src="app.js"></script>' : ''}
</body>
</html>`;
}

/**
 * Wrap content in HTML template
 */
function wrapInHTMLTemplate(content) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exported Project</title>
</head>
<body>
    ${content}
</body>
</html>`;
}

/**
 * Ensure React component is properly formatted
 */
function ensureReactComponent(content) {
  if (!content.includes('import React') && !content.includes('import {')) {
    return `import React from 'react';\n\n${content}`;
  }
  return content;
}

/**
 * Get file extension from path
 */
function getFileExtension(path) {
  return path.split('.').pop().toLowerCase();
}

/**
 * Check if file is a web asset
 */
function isWebAsset(path) {
  const ext = getFileExtension(path);
  return ['html', 'css', 'js', 'jsx', 'tsx', 'json', 'svg', 'png', 'jpg', 'jpeg', 'gif', 'webp'].includes(ext);
}
