import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '../../../utility/supabaseConstants';

export async function POST(request) {
  try {
    const { files, project_type = 'static', site_name = null } = await request.json();
    console.log('Received preview request:', { files: files.length, project_type });

    // All projects now use direct Supabase upload (no more E2B)
    console.log(`${project_type} project detected - using direct Supabase upload with Sandpack preview.`);

    const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.URL);
    const siteName = site_name || `${project_type}-${Date.now()}`;
    const bucket = 'sites';

    // Ensure bucket exists
    try {
      await supabase.storage.createBucket(bucket, { public: true });
    } catch (e) {
      console.log('Bucket exists or creation skipped');
    }

    // Process files based on project type
    const processedFiles = await processFilesForDeployment(files, project_type);
    
    // Upload processed files to Supabase
    const uploadResults = await uploadFilesToSupabase(supabase, bucket, siteName, processedFiles);
    
    if (uploadResults.errors.length > 0) {
      console.error('Upload errors:', uploadResults.errors);
      return NextResponse.json({ 
        error: `Failed to upload some files: ${uploadResults.errors.join(', ')}`,
        deployment_method: 'sandpack-supabase',
        project_type,
        upload_summary: uploadResults
      }, { status: 500 });
    }

    // Return success response
    const previewUrl = `https://pixelways.co/sites/${siteName}/index.html`;
    console.log(`Deployment completed successfully! Preview URL: ${previewUrl}`);
    
    return NextResponse.json({
      preview_url: previewUrl,
      site: siteName,
      project_type,
      message: `${project_type} project deployed successfully using Sandpack + Supabase!`,
      deployment_method: 'sandpack-supabase',
      upload_summary: uploadResults,
      sandpack_preview: true,
      persistent_deployment: true
    });

  } catch (error) {
    console.error('Error in /api/preview:', error);
    return NextResponse.json({ 
      error: `Failed to deploy project: ${error.message}`,
      deployment_method: 'sandpack-supabase',
      project_type: 'unknown'
    }, { status: 500 });
  }
}

/**
 * Process files for deployment based on project type
 */
async function processFilesForDeployment(files, projectType) {
  const processedFiles = [];
  
  for (const file of files) {
    let content = file.content;
    let path = file.path;
    
    // Process content based on project type
    switch (projectType) {
      case 'react':
      case 'react-vite':
        content = processReactFile(content, path);
        break;
      case 'vue':
        content = processVueFile(content, path);
        break;
      case 'vanilla':
      case 'static':
        content = processStaticFile(content, path);
        break;
      default:
        content = processStaticFile(content, path);
    }
    
    processedFiles.push({
      path: path,
      content: content,
      action: 'create'
    });
  }
  
  // Add missing essential files
  addMissingEssentialFiles(processedFiles, projectType);
  
  return processedFiles;
}

/**
 * Process React files for deployment
 */
function processReactFile(content, path) {
  if (path.endsWith('.jsx') || path.endsWith('.tsx')) {
    // Ensure React components are properly formatted
    if (!content.includes('import React') && !content.includes('import {')) {
      content = `import React from 'react';\n\n${content}`;
    }
  }
  
  // Handle JSX in HTML files
  if (path.endsWith('.html') && content.includes('jsx')) {
    content = content.replace(/jsx/g, 'js');
  }
  
  return content;
}

/**
 * Process Vue files for deployment
 */
function processVueFile(content, path) {
  if (path.endsWith('.vue')) {
    // Ensure Vue components are properly formatted
    if (!content.includes('<template>')) {
      content = `<template>\n  <div>\n    ${content}\n  </div>\n</template>`;
    }
  }
  
  return content;
}

/**
 * Process static files for deployment
 */
function processStaticFile(content, path) {
  // Ensure HTML files are complete
  if (path.endsWith('.html') && !content.includes('<!DOCTYPE html>')) {
    content = wrapInHTMLTemplate(content);
  }
  
  return content;
}

/**
 * Add missing essential files
 */
function addMissingEssentialFiles(files, projectType) {
  const hasIndexHTML = files.find(f => f.path === 'index.html');
  const hasCSS = files.find(f => f.path.endsWith('.css'));
  const hasJS = files.find(f => f.path.endsWith('.js') || f.path.endsWith('.jsx'));
  
  if (!hasIndexHTML) {
    files.push({
      path: 'index.html',
      content: createBasicHTML(files, projectType),
      action: 'create'
    });
  }
  
  // Add basic CSS if none exists
  if (!hasCSS) {
    files.push({
      path: 'styles.css',
      content: createBasicCSS(projectType),
      action: 'create'
    });
  }
  
  // Add basic JS if none exists and it's a JS project
  if (!hasJS && (projectType === 'react' || projectType === 'react-vite' || projectType === 'vue')) {
    files.push({
      path: 'app.js',
      content: createBasicJS(projectType),
      action: 'create'
    });
  }
}

/**
 * Create basic HTML template
 */
function createBasicHTML(files = [], projectType = 'static') {
  const hasCSS = files.some(f => f.path.endsWith('.css'));
  const hasJS = files.some(f => f.path.endsWith('.js') || f.path.endsWith('.jsx'));
  
  let title = 'Exported Project';
  if (projectType === 'react' || projectType === 'react-vite') {
    title = 'React App';
  } else if (projectType === 'vue') {
    title = 'Vue App';
  }
  
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    ${hasCSS ? '<link rel="stylesheet" href="styles.css">' : ''}
</head>
<body>
    <div id="root"></div>
    ${hasJS ? '<script src="app.js"></script>' : ''}
</body>
</html>`;
}

/**
 * Create basic CSS
 */
function createBasicCSS(projectType) {
  return `/* Basic styles for ${projectType} project */
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    background-color: #f5f5f5;
}

#root {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
}

h1, h2, h3, h4, h5, h6 {
    color: #333;
    margin-bottom: 1rem;
}

p {
    color: #666;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.button {
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s;
}

.button:hover {
    background-color: #0056b3;
}`;
}

/**
 * Create basic JavaScript
 */
function createBasicJS(projectType) {
  if (projectType === 'react' || projectType === 'react-vite') {
    return `// Basic React app setup
console.log('React app loaded successfully');

// You can add your React components here
// This is a basic setup for the exported project`;
  } else if (projectType === 'vue') {
    return `// Basic Vue app setup
console.log('Vue app loaded successfully');

// You can add your Vue components here
// This is a basic setup for the exported project`;
  } else {
    return `// Basic JavaScript setup
console.log('App loaded successfully');

// You can add your JavaScript code here
// This is a basic setup for the exported project`;
  }
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
 * Upload files to Supabase storage
 */
async function uploadFilesToSupabase(supabase, bucket, siteName, files) {
  const results = {
    uploaded: [],
    errors: [],
    total: files.length
  };
  
  for (const file of files) {
    try {
      const storagePath = `${siteName}/${file.path}`.replace(/\\/g, '/');
      const contentType = getMimeType(file.path);
      
      const { error: uploadError } = await supabase.storage
        .from(bucket)
        .upload(storagePath, Buffer.from(file.content, 'utf-8'), {
          contentType: contentType,
          upsert: true,
        });
        
      if (uploadError) {
        console.error(`Failed to upload ${file.path}:`, uploadError);
        results.errors.push({
          file: file.path,
          error: uploadError.message
        });
      } else {
        results.uploaded.push(file.path);
        console.log(`Uploaded: ${storagePath}`);
      }
    } catch (error) {
      console.error(`Error uploading ${file.path}:`, error);
      results.errors.push({
        file: file.path,
        error: error.message
      });
    }
  }
  
  return results;
}

/**
 * Determine MIME type from file extension
 */
function getMimeType(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const mimeTypes = {
    'html': 'text/html; charset=utf-8',
    'css': 'text/css; charset=utf-8',
    'js': 'application/javascript; charset=utf-8',
    'jsx': 'application/javascript; charset=utf-8',
    'tsx': 'application/javascript; charset=utf-8',
    'json': 'application/json; charset=utf-8',
    'svg': 'image/svg+xml',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'webp': 'image/webp',
    'ico': 'image/x-icon',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject'
  };
  return mimeTypes[ext] || 'text/plain; charset=utf-8';
}
