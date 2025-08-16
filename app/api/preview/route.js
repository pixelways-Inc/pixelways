import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG, E2B_CONFIG } from '../../../utility/supabaseConstants';
import { Sandbox } from 'e2b';
import fs from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const { files, project_type = 'static', site_name = null } = await request.json();
    console.log('Received preview request:', { files: files.length, project_type });

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

    // React/Vite sites use E2B + Supabase deployment flow
    console.log(`${project_type} site detected - using E2B + Supabase deployment flow.`);
    
    const siteName = site_name || `react-app-${Date.now()}`;
    
    let sandbox = null;
    let results;
    let buildOutput = [];
    
    try {
      // --- Step 1: Create E2B sandbox ---
      console.log('Creating E2B sandbox...');
      console.log('Using E2B API key:', E2B_CONFIG.API_KEY ? 'Configured' : 'Missing');
      
             try {
         // Try to use 'desktop' template first (more resources), fallback to 'base'
         let templateToUse = 'desktop';
         try {
           sandbox = await Sandbox.create('desktop', {
             apiKey: E2B_CONFIG.API_KEY
           });
           console.log('E2B sandbox created successfully using desktop template (8GB RAM)');
         } catch (desktopError) {
           console.log('Desktop template failed, trying base template...');
           templateToUse = 'base';
           sandbox = await Sandbox.create('base', {
             apiKey: E2B_CONFIG.API_KEY
           });
           console.log('E2B sandbox created successfully using base template (512MB RAM)');
         }
         
         console.log('Sandbox object type:', typeof sandbox);
         console.log('Sandbox has files property:', sandbox && typeof sandbox.files);
         
         // Verify sandbox is properly initialized
         if (!sandbox || !sandbox.files) {
           throw new Error('Sandbox was created but is not properly initialized');
         }
       } catch (sandboxError) {
         console.error('E2B sandbox creation failed:', sandboxError);
         throw new Error(`Failed to create E2B sandbox: ${sandboxError.message}. Please check E2B API key and quotas.`);
       }

             // --- Step 2: Prepare project files with template and modifications ---
       console.log('Preparing project files with React-Vite template...');
       
       let results;
       let buildOutput = [];
       try {
         // Verify sandbox is available
         if (!sandbox) {
           throw new Error('Sandbox is not available for template operations');
         }
         
         // First, copy the existing React-Vite template
         const templatePath = path.join(process.cwd(), 'data', 'react-vite');
         
         // Check if template directory exists
         if (!fs.existsSync(templatePath)) {
           throw new Error(`React-Vite template not found at: ${templatePath}`);
         }
         
         console.log('Template path exists:', templatePath);
         await copyTemplateToSandbox(sandbox, templatePath);
         
         // Then apply AI-generated modifications
         results = await applyAIModifications(sandbox, files);
       } catch (templateError) {
         console.error('Error preparing project files:', templateError);
         throw new Error(`Failed to prepare project files: ${templateError.message}`);
       }

      // --- Step 3: Install dependencies ---
      console.log('Installing dependencies... (this may take a few minutes)');
      try {
        if (!sandbox) {
          throw new Error('Sandbox is not available for dependency installation');
        }
        
        // Optimize npm install for limited resources
        console.log('Starting optimized npm install with 5-minute timeout...');
        
        // First, try to clear npm cache and use production install
        await sandbox.commands.run('npm cache clean --force');
        
        // Use production install to avoid dev dependencies and reduce memory usage
        const installResult = await sandbox.commands.run('npm ci --only=production --no-audit --no-fund', { 
          timeoutMs: 300000 
        });
        
        if (installResult.exitCode !== 0) {
          console.log('Production install failed, trying regular install...');
          // Fallback to regular install if production-only fails
          const fallbackResult = await sandbox.commands.run('npm install --no-audit --no-fund', { 
            timeoutMs: 300000 
          });
          
          if (fallbackResult.exitCode !== 0) {
            console.log('npm install failed, trying pnpm...');
            // Try pnpm as it's more memory efficient
            try {
              const pnpmResult = await sandbox.commands.run('pnpm install --prod --no-audit', { 
                timeoutMs: 300000 
              });
              if (pnpmResult.exitCode !== 0) {
                throw new Error(`pnpm install failed: ${pnpmResult.stderr}`);
              }
            } catch (pnpmError) {
              throw new Error(`All package managers failed. npm: ${fallbackResult.stderr}, pnpm: ${pnpmError.message}`);
            }
          }
        }
        
                 console.log('Dependencies installed successfully');
         
         // Check available disk space and memory
         try {
           const diskCheck = await sandbox.commands.run('df -h .');
           const memoryCheck = await sandbox.commands.run('free -h');
           console.log('Disk space after install:', diskCheck.stdout);
           console.log('Memory usage after install:', memoryCheck.stdout);
         } catch (resourceError) {
           console.log('Resource check warning:', resourceError.message);
         }
       } catch (installError) {
         console.error('npm install failed:', installError);
         throw new Error(`Dependency installation failed: ${installError.message}`);
       }

      // --- Step 4: Build project ---
      console.log('Building project... (this may take a few minutes)');
      try {
        if (!sandbox) {
          throw new Error('Sandbox is not available for build process');
        }
        
        // Clean up memory before build
        console.log('Cleaning up memory before build...');
        try {
          await sandbox.commands.run('npm cache clean --force');
          // Force garbage collection if possible
          await sandbox.commands.run('node -e "if (global.gc) global.gc()"');
        } catch (cleanupError) {
          console.log('Memory cleanup warning:', cleanupError.message);
        }
        
        // Use longer timeout for build process (3 minutes)
        console.log('Starting npm run build with 3-minute timeout...');
        const buildResult = await sandbox.commands.run('npm run build', { timeoutMs: 180000 });
        if (buildResult.exitCode !== 0) {
          throw new Error(`Build failed: ${buildResult.stderr}`);
        }
        console.log('Project built successfully');
      } catch (buildError) {
        console.error('Build failed:', buildError);
        throw new Error(`Project build failed: ${buildError.message}`);
      }

      // --- Step 5: List build output files ---
      console.log('Scanning build output...');
      try {
        if (!sandbox) {
          throw new Error('Sandbox is not available for listing build output');
        }
        buildOutput = await sandbox.files.list('dist', { recursive: true });
        console.log(`Found ${buildOutput.length} build files`);
        
        if (buildOutput.length === 0) {
          console.warn('No build files found in dist/ directory');
          // List the root directory to see what's available
          const rootFiles = await sandbox.files.list('.', { recursive: false });
          console.log('Root directory contents:', rootFiles.map(f => f.name));
        }
      } catch (listError) {
        console.error('Failed to list build output:', listError);
        throw new Error(`Failed to scan build output: ${listError.message}`);
      }

      // --- Step 6: Upload build files to Supabase Storage ---
      console.log('Uploading build files to Supabase...');
      const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.SERVICE_ROLE_KEY);
      const bucket = 'sites';

      // Ensure bucket exists
      try {
        await supabase.storage.createBucket(bucket, { public: true });
      } catch (e) {
        console.log('Bucket exists or creation skipped');
      }

      // Upload each build file
      if (!sandbox) {
        throw new Error('Sandbox is not available for file upload');
      }
      for (const fileInfo of buildOutput) {
        if (fileInfo.type === 'file') {
          const filePath = fileInfo.path;
          const fileContent = await sandbox.files.read(filePath);
          
          // Determine MIME type
          const mimeType = getMimeType(filePath);
          
          // Upload to Supabase
          const storagePath = `${siteName}/${filePath}`;
          const { error: uploadError } = await supabase.storage
            .from(bucket)
            .upload(storagePath, fileContent, {
              upsert: true,
              contentType: mimeType
            });
            
          if (uploadError) {
            console.error(`Failed to upload ${filePath}:`, uploadError);
            throw new Error(`Upload failed for ${filePath}: ${uploadError.message}`);
          }
          
          console.log(`Uploaded: ${storagePath}`);
        }
      }

             // --- Step 7: Sandbox cleanup handled in finally block ---
       console.log('Deployment completed, sandbox will be cleaned up automatically');

      // --- Step 8: Return success response ---
      const previewUrl = `https://pixelways.co/sites/${siteName}/index.html`;
      console.log(`Deployment completed successfully! Preview URL: ${previewUrl}`);
      
      // Create user-friendly message
      let userMessage = `${project_type} app deployed successfully!`;
      
      // Ensure results is properly initialized
      if (!results) {
        results = {
          created: [],
          modified: [],
          deleted: [],
          skipped: [],
          errors: []
        };
      }
      
      if (results.skipped.length > 0 || results.errors.length > 0) {
        userMessage += ` Some modifications couldn't be applied automatically.`;
        if (results.skipped.length > 0) {
          userMessage += ` ${results.skipped.length} changes were skipped.`;
        }
        if (results.errors.length > 0) {
          userMessage += ` ${results.errors.length} changes had issues.`;
        }
        userMessage += ` The website was deployed with available changes.`;
      }
      
      return NextResponse.json({
        preview_url: previewUrl,
        site: siteName,
        project_type,
        message: userMessage,
        deployment_method: 'e2b-supabase',
        build_files_count: buildOutput ? buildOutput.length : 0,
        modification_summary: {
          created: results.created.length,
          modified: results.modified.length,
          deleted: results.deleted.length,
          skipped: results.skipped.length,
          errors: results.errors.length
        },
        status: results.errors.length > 0 ? 'partial_success' : 'success'
      });

         } catch (error) {
       console.error('E2B + Supabase deployment error:', error);
       return NextResponse.json({ 
         error: `E2B + Supabase deployment failed: ${error.message}`,
         deployment_method: 'e2b-supabase',
         project_type
       }, { status: 500 });
     } finally {
       // Always ensure sandbox is closed, even if there was an error
       if (sandbox) {
         try {
           console.log('Cleaning up E2B sandbox...');
           await sandbox.close();
           console.log('E2B sandbox closed successfully');
         } catch (cleanupError) {
           console.error('Error closing sandbox:', cleanupError);
         }
       }
     }
  } catch (error) {
    console.error('Error in /api/preview:', error);
    return NextResponse.json({ error: `Failed to initiate preview: ${error.message}` }, { status: 500 });
  }
}

// Helper function to copy React-Vite template to sandbox
async function copyTemplateToSandbox(sandbox, templatePath) {
  console.log('Copying React-Vite template to sandbox...');
  
  try {
    // Copy all files recursively
    await copyDirectoryRecursive(sandbox, templatePath, '');
    console.log('Template copied successfully');
  } catch (error) {
    console.error('Error copying template:', error);
    throw new Error(`Failed to copy template: ${error.message}`);
  }
}

// Helper function to copy directory recursively
async function copyDirectoryRecursive(sandbox, localPath, relativePath) {
  try {
    const items = fs.readdirSync(localPath);
    
    for (const item of items) {
      try {
        const localItemPath = path.join(localPath, item);
        const sandboxItemPath = relativePath ? path.join(relativePath, item) : item;
        const stats = fs.statSync(localItemPath);
        console.log('Copying:', localItemPath, 'to', sandboxItemPath);
        
        if (stats.isDirectory()) {
          // Skip node_modules and other unnecessary directories
          if (item === 'node_modules' || item === '.git' || item === '.husky') {
            console.log('Skipping directory:', item);
            continue;
          }
          
          // Create directory in sandbox
          try {
            await sandbox.files.mkdir(sandboxItemPath);
          } catch (e) {
            // Directory might already exist, continue
            console.log('Directory might already exist:', sandboxItemPath);
          }
          
          // Recursively copy contents
          await copyDirectoryRecursive(sandbox, localItemPath, sandboxItemPath);
        } else {
          // Copy file
          const content = fs.readFileSync(localItemPath, 'utf-8');
          await sandbox.files.write(sandboxItemPath, content);
          console.log('Copied file:', sandboxItemPath);
        }
      } catch (itemError) {
        console.error(`Error processing item ${item}:`, itemError);
        // Continue with other items
      }
    }
  } catch (error) {
    console.error('Error in copyDirectoryRecursive:', error);
    throw new Error(`Failed to copy directory: ${error.message}`);
  }
}

// Helper function to apply AI-generated modifications
async function applyAIModifications(sandbox, files) {
  console.log('Applying AI-generated modifications...');
  
  const results = {
    created: [],
    modified: [],
    deleted: [],
    skipped: [],
    errors: []
  };
  
  for (const file of files) {
    try {
      if (file.action === 'create') {
        // Create new file
        console.log(`Creating new file: ${file.path}`);
        await sandbox.files.write(file.path, file.content);
        results.created.push(file.path);
        
      } else if (file.action === 'modify' && file.searchReplace) {
        // Modify existing file using search and replace
        const { filePath, oldString, newString, lineNumbers } = file.searchReplace;
        console.log(`Modifying file: ${filePath}`);
        
        // Read existing file content
        let existingContent;
        try {
          existingContent = await sandbox.files.read(filePath);
        } catch (e) {
          console.warn(`File ${filePath} not found, skipping modification`);
          results.skipped.push({
            file: filePath,
            reason: 'File not found in project'
          });
          continue;
        }
        
        // Perform search and replace
        let newContent;
        let modificationApplied = false;
        
        if (lineNumbers && lineNumbers.start && lineNumbers.end) {
          // Replace specific lines
          const lines = existingContent.split('\n');
          const startLine = Math.max(0, lineNumbers.start - 1); // Convert to 0-based index
          const endLine = Math.min(lines.length, lineNumbers.end);
          
          // Check if the specified lines contain the expected content
          const targetLines = lines.slice(startLine, endLine).join('\n');
          if (targetLines.trim() === oldString.trim()) {
            const beforeLines = lines.slice(0, startLine);
            const afterLines = lines.slice(endLine);
            
            newContent = [...beforeLines, newString, ...afterLines].join('\n');
            modificationApplied = true;
          } else {
            // Try to find the content elsewhere in the file
            const contentIndex = existingContent.indexOf(oldString);
            if (contentIndex !== -1) {
              newContent = existingContent.replace(oldString, newString);
              modificationApplied = true;
            } else {
              // Content not found, try fuzzy matching
              const fuzzyMatch = findFuzzyMatch(existingContent, oldString);
              if (fuzzyMatch) {
                newContent = existingContent.replace(fuzzyMatch, newString);
                modificationApplied = true;
                console.log(`Applied fuzzy match for ${filePath}`);
              }
            }
          }
        } else {
          // Simple string replacement
          if (existingContent.includes(oldString)) {
            newContent = existingContent.replace(oldString, newString);
            modificationApplied = true;
          } else {
            // Try fuzzy matching for string replacement
            const fuzzyMatch = findFuzzyMatch(existingContent, oldString);
            if (fuzzyMatch) {
              newContent = existingContent.replace(fuzzyMatch, newString);
              modificationApplied = true;
              console.log(`Applied fuzzy match for ${filePath}`);
            }
          }
        }
        
        if (modificationApplied) {
          // Write modified content back
          await sandbox.files.write(filePath, newContent);
          results.modified.push(filePath);
        } else {
          // Could not apply modification
          results.skipped.push({
            file: filePath,
            reason: 'Content not found for modification'
          });
          console.log(`Could not apply modification to ${filePath} - content not found`);
        }
        
      } else if (file.action === 'delete') {
        // Delete file
        console.log(`Deleting file: ${file.path}`);
        try {
          await sandbox.files.delete(file.path);
          results.deleted.push(file.path);
        } catch (e) {
          results.skipped.push({
            file: file.path,
            reason: 'File not found for deletion'
          });
        }
        
      } else {
        // Default: treat as create/modify based on file path
        console.log(`Processing file: ${file.path}`);
        await sandbox.files.write(file.path, file.content);
        results.created.push(file.path);
      }
      
    } catch (error) {
      console.error(`Error processing file ${file.path}:`, error);
      results.errors.push({
        file: file.path,
        error: error.message
      });
      // Continue with other files
    }
  }
  
  // Log summary
  console.log('\n📊 AI Modifications Summary:');
  console.log(`✅ Created: ${results.created.length} files`);
  console.log(`✏️  Modified: ${results.modified.length} files`);
  console.log(`🗑️  Deleted: ${results.deleted.length} files`);
  console.log(`⏭️  Skipped: ${results.skipped.length} files`);
  console.log(`❌ Errors: ${results.errors.length} files`);
  
  if (results.skipped.length > 0) {
    console.log('\n📝 Skipped Files:');
    results.skipped.forEach(item => {
      console.log(`  - ${item.file}: ${item.reason}`);
    });
  }
  
  if (results.errors.length > 0) {
    console.log('\n⚠️  Errors:');
    results.errors.forEach(item => {
      console.log(`  - ${item.file}: ${item.error}`);
    });
  }
  
  console.log('AI modifications applied successfully');
  return results;
}

// Helper function to find fuzzy matches when exact content isn't found
function findFuzzyMatch(content, searchString) {
  // Remove extra whitespace and normalize
  const normalizedSearch = searchString.replace(/\s+/g, ' ').trim();
  const normalizedContent = content.replace(/\s+/g, ' ');
  
  // Try to find the normalized search string
  if (normalizedContent.includes(normalizedSearch)) {
    // Find the original content that matches the normalized version
    const lines = content.split('\n');
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      if (line.replace(/\s+/g, ' ').trim() === normalizedSearch) {
        return line;
      }
    }
  }
  
  // Try partial matching for longer strings
  if (searchString.length > 20) {
    const words = searchString.split(/\s+/).filter(word => word.length > 3);
    for (const word of words) {
      if (content.includes(word)) {
        // Find the line containing this word
        const lines = content.split('\n');
        for (let i = 0; i < lines.length; i++) {
          if (lines[i].includes(word)) {
            return lines[i];
          }
        }
      }
    }
  }
  
  return null;
}

// Helper function to determine MIME type
function getMimeType(filename) {
  const ext = filename.split('.').pop().toLowerCase();
  const mimeTypes = {
    'html': 'text/html',
    'css': 'text/css',
    'js': 'application/javascript',
    'json': 'application/json',
    'png': 'image/png',
    'jpg': 'image/jpeg',
    'jpeg': 'image/jpeg',
    'gif': 'image/gif',
    'svg': 'image/svg+xml',
    'ico': 'image/x-icon',
    'woff': 'font/woff',
    'woff2': 'font/woff2',
    'ttf': 'font/ttf',
    'eot': 'application/vnd.ms-fontobject',
    'webp': 'image/webp',
    'mp4': 'video/mp4',
    'webm': 'video/webm',
    'ogg': 'video/ogg',
    'mp3': 'audio/mpeg',
    'wav': 'audio/wav'
  };
  return mimeTypes[ext] || 'application/octet-stream';
}
