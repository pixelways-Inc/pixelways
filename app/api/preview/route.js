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
        // Try multiple templates in order of preference, starting with the most resource-rich
        let templateToUse = 'desktop';
        let sandbox = null;
        
        // Try desktop template first (8GB RAM, most resources)
        try {
          console.log('Attempting to create desktop template sandbox (8GB RAM)...');
          sandbox = await Sandbox.create('desktop', {
            apiKey: E2B_CONFIG.API_KEY
          });
          templateToUse = 'desktop';
          console.log('✅ E2B sandbox created successfully using desktop template (8GB RAM)');
        } catch (desktopError) {
          console.log('❌ Desktop template failed:', desktopError.message);
          
          // Try code-interpreter-v1 template (1GB RAM, good for builds)
          try {
            console.log('Attempting to create code-interpreter-v1 template sandbox (1GB RAM)...');
            templateToUse = 'code-interpreter-v1';
            sandbox = await Sandbox.create('code-interpreter-v1', {
              apiKey: E2B_CONFIG.API_KEY
            });
            console.log('✅ E2B sandbox created successfully using code-interpreter-v1 template (1GB RAM)');
          } catch (codeInterpreterError) {
            console.log('❌ Code-interpreter-v1 failed:', codeInterpreterError.message);
            
            // Try base template as last resort (512MB RAM, minimal resources)
            try {
              console.log('Attempting to create base template sandbox (512MB RAM)...');
              templateToUse = 'base';
              sandbox = await Sandbox.create('base', {
                apiKey: E2B_CONFIG.API_KEY
              });
              console.log('✅ E2B sandbox created successfully using base template (512MB RAM)');
            } catch (baseError) {
              console.log('❌ Base template failed:', baseError.message);
              throw new Error(`All E2B templates failed. Desktop: ${desktopError.message}, Code-interpreter: ${codeInterpreterError.message}, Base: ${baseError.message}`);
            }
          }
        }
        
        console.log('Sandbox object type:', typeof sandbox);
        console.log('Sandbox has files property:', sandbox && typeof sandbox.files);
        
        // Verify sandbox is properly initialized
        if (!sandbox || !sandbox.files) {
          throw new Error('Sandbox was created but is not properly initialized');
        }
        
        // Check what's available in the sandbox
        console.log('Checking sandbox environment...');
        try {
          const osCheck = await sandbox.commands.run('cat /etc/os-release');
          const shellCheck = await sandbox.commands.run('which bash');
          console.log('OS Info:', osCheck.stdout);
          console.log('Shell available:', shellCheck.stdout);
          
          // Log which template we're using and its limitations
          console.log('Using template:', templateToUse);
          if (templateToUse === 'base') {
            console.log('⚠️  Warning: Using base template with limited resources (512MB RAM). Build may be slower or fail if memory intensive.');
          } else if (templateToUse === 'code-interpreter-v1') {
            console.log('ℹ️  Using code-interpreter-v1 template (1GB RAM). Good balance of resources and cost.');
          } else {
            console.log('🚀 Using desktop template (8GB RAM). Optimal for complex builds.');
          }
        } catch (envError) {
          console.log('Environment check warning:', envError.message);
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
        
        // Check and install Node.js with proper version
        console.log('Setting up Node.js environment...');
        try {
          const nodeCheck = await sandbox.commands.run('node --version');
          console.log('Node.js version:', nodeCheck.stdout);
          
          // Check if version is >= 20
          const nodeVersion = nodeCheck.stdout.trim().replace('v', '');
          const majorVersion = parseInt(nodeVersion.split('.')[0]);
          
          if (majorVersion < 20) {
            console.log('Node.js version < 20, upgrading...');
            // Install Node.js 20.x
            await sandbox.commands.run('curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -');
            await sandbox.commands.run('sudo apt-get update');
            await sandbox.commands.run('sudo apt-get install -y nodejs');
            
            // Verify new version
            const newNodeCheck = await sandbox.commands.run('node --version');
            console.log('New Node.js version:', newNodeCheck.stdout);
          }
        } catch (nodeError) {
          console.log('Node.js not found, installing Node.js 20.x...');
          // Install Node.js 20.x
          await sandbox.commands.run('curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -');
          await sandbox.commands.run('sudo apt-get update');
          await sandbox.commands.run('sudo apt-get install -y nodejs');
          console.log('Node.js 20.x installed');
        }
        
        // Install pnpm (more memory efficient than npm)
        console.log('Installing pnpm...');
        try {
          const pnpmCheck = await sandbox.commands.run('pnpm --version');
          console.log('pnpm version:', pnpmCheck.stdout);
        } catch (pnpmError) {
          console.log('pnpm not found, installing...');
          await sandbox.commands.run('npm install -g pnpm');
          console.log('pnpm installed');
        }
        
        // Check available disk space and memory before install
        try {
          await monitorSandboxResources(sandbox, 'Before Dependency Installation');
        } catch (resourceError) {
          console.log('Resource check warning:', resourceError.message);
        }
        
        // Use pnpm for more efficient dependency installation
        console.log('Starting pnpm install with optimized settings...');
        
        // Clear any existing node_modules and lock files
        try {
          await sandbox.commands.run('rm -rf node_modules package-lock.json pnpm-lock.yaml');
        } catch (cleanupError) {
          console.log('Cleanup warning:', cleanupError.message);
        }
        
        // Use pnpm with production-only install to save memory
        const installResult = await sandbox.commands.run('pnpm install --prod --no-frozen-lockfile --no-audit --no-fund', { 
          timeoutMs: 300000 
        });
        
        if (installResult.exitCode !== 0) {
          console.log('Production install failed, trying regular install...');
          // Fallback to regular install if production-only fails
          const fallbackResult = await sandbox.commands.run('pnpm install --no-frozen-lockfile --no-audit --no-fund', { 
            timeoutMs: 300000 
          });
          
          if (fallbackResult.exitCode !== 0) {
            console.log('pnpm install failed, trying npm as last resort...');
            // Try npm as last resort
            try {
              const npmResult = await sandbox.commands.run('npm install --production --no-audit --no-fund', { 
                timeoutMs: 300000 
              });
              if (npmResult.exitCode !== 0) {
                throw new Error(`All package managers failed. pnpm: ${fallbackResult.stderr}, npm: ${npmResult.stderr}`);
              }
            } catch (npmError) {
              throw new Error(`All package managers failed. pnpm: ${fallbackResult.stderr}, npm: ${npmError.message}`);
            }
          }
        }
        
        console.log('Dependencies installed successfully');
        
        // Check available disk space and memory after install
        try {
          await monitorSandboxResources(sandbox, 'After Dependency Installation');
        } catch (resourceError) {
          console.log('Resource check warning:', resourceError.message);
        }
        
        // Verify key dependencies are available
        try {
          const reactCheck = await sandbox.commands.run('node -e "console.log(require(\'react\').version)"');
          const viteCheck = await sandbox.commands.run('node -e "console.log(require(\'vite\').version)"');
          console.log('React version:', reactCheck.stdout);
          console.log('Vite version:', viteCheck.stdout);
        } catch (depCheckError) {
          console.log('Dependency check warning:', depCheckError.message);
        }
        
      } catch (installError) {
        console.error('Dependency installation failed:', installError);
        
        // Provide more specific error information
        let errorMessage = `Dependency installation failed: ${installError.message}`;
        
        if (installError.message.includes('ENOMEM') || installError.message.includes('memory')) {
          errorMessage += '. This may be due to insufficient memory in the E2B sandbox. Try using a larger template or contact support.';
        } else if (installError.message.includes('ENOSPC') || installError.message.includes('disk')) {
          errorMessage += '. This may be due to insufficient disk space in the E2B sandbox.';
        } else if (installError.message.includes('timeout')) {
          errorMessage += '. The installation timed out. This may be due to slow network or resource constraints.';
        }
        
        throw new Error(errorMessage);
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
          await sandbox.commands.run('pnpm store prune');
          // Force garbage collection if possible
          await sandbox.commands.run('node -e "if (global.gc) global.gc()"');
        } catch (cleanupError) {
          console.log('Memory cleanup warning:', cleanupError.message);
        }
        
        // Monitor resources before build
        try {
          await monitorSandboxResources(sandbox, 'Before Build Process');
        } catch (resourceError) {
          console.log('Resource check warning:', resourceError.message);
        }
        
        // Use pnpm for build process with longer timeout (3 minutes)
        console.log('Starting pnpm run build with 3-minute timeout...');
        const buildResult = await sandbox.commands.run('pnpm run build', { timeoutMs: 180000 });
        
        if (buildResult.exitCode !== 0) {
          console.error('Build failed with exit code:', buildResult.exitCode);
          console.error('Build stderr:', buildResult.stderr);
          console.error('Build stdout:', buildResult.stdout);
          
          // Try to provide more helpful error information
          let buildErrorMessage = `Build failed with exit code ${buildResult.exitCode}`;
          
          if (buildResult.stderr.includes('ENOMEM') || buildResult.stderr.includes('memory')) {
            buildErrorMessage += '. This may be due to insufficient memory during the build process.';
          } else if (buildResult.stderr.includes('ENOSPC') || buildResult.stderr.includes('disk')) {
            buildErrorMessage += '. This may be due to insufficient disk space for the build output.';
          } else if (buildResult.stderr.includes('timeout')) {
            buildErrorMessage += '. The build process timed out.';
          } else if (buildResult.stderr.includes('TypeScript')) {
            buildErrorMessage += '. There may be TypeScript compilation errors in your code.';
          } else if (buildResult.stderr.includes('Vite')) {
            buildErrorMessage += '. There may be Vite configuration or build issues.';
          }
          
          throw new Error(buildErrorMessage);
        }
        
        console.log('Project built successfully');
        console.log('Build output:', buildResult.stdout);
        
        // Monitor resources after build
        try {
          await monitorSandboxResources(sandbox, 'After Build Process');
        } catch (resourceError) {
          console.log('Resource check warning:', resourceError.message);
        }
        
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
       
       // Provide specific error messages and solutions
       let errorMessage = `E2B + Supabase deployment failed: ${error.message}`;
       let suggestedSolutions = [];
       
       if (error.message.includes('Dependency installation failed')) {
         suggestedSolutions.push(
           '• Check if the project has valid package.json dependencies',
           '• Verify that all required packages are available on npm',
           '• Consider using a larger E2B template (desktop or code-interpreter-v1)',
           '• Check for memory or disk space constraints in the sandbox'
         );
       } else if (error.message.includes('Project build failed')) {
         suggestedSolutions.push(
           '• Verify the project has a valid build script in package.json',
           '• Check for TypeScript compilation errors',
           '• Ensure all required dependencies are properly installed',
           '• Verify Vite configuration is correct'
         );
       } else if (error.message.includes('E2B sandbox creation failed')) {
         suggestedSolutions.push(
           '• Verify E2B API key is valid and has sufficient quota',
           '• Check E2B service status and availability',
           '• Try using a different E2B template',
           '• Contact E2B support if issues persist'
         );
       } else if (error.message.includes('Supabase upload failed')) {
         suggestedSolutions.push(
           '• Verify Supabase credentials and permissions',
           '• Check storage bucket exists and is accessible',
           '• Ensure file sizes are within Supabase limits',
           '• Verify network connectivity to Supabase'
         );
       } else if (error.message.includes('memory') || error.message.includes('ENOMEM')) {
         suggestedSolutions.push(
           '• Use a larger E2B template (desktop or code-interpreter-v1)',
           '• Optimize project dependencies (remove unused packages)',
           '• Consider breaking large projects into smaller components',
           '• Contact support for resource allocation increase'
         );
       } else if (error.message.includes('disk') || error.message.includes('ENOSPC')) {
         suggestedSolutions.push(
           '• Clean up unnecessary files before deployment',
           '• Use a larger E2B template with more disk space',
           '• Optimize build output (exclude source maps, etc.)',
           '• Consider using external build services for large projects'
         );
       }
       
       // Add general troubleshooting tips
       if (suggestedSolutions.length === 0) {
         suggestedSolutions.push(
           '• Check the deployment logs for specific error details',
           '• Verify all required environment variables are set',
           '• Ensure the project structure is valid',
           '• Try deploying with a smaller project first'
         );
       }
       
       return NextResponse.json({ 
         error: errorMessage,
         deployment_method: 'e2b-supabase',
         project_type,
         troubleshooting: {
           suggested_solutions: suggestedSolutions,
           error_type: error.message.includes('Dependency installation failed') ? 'dependency_install' :
                      error.message.includes('Project build failed') ? 'build_failure' :
                      error.message.includes('E2B sandbox creation failed') ? 'sandbox_creation' :
                      error.message.includes('Supabase upload failed') ? 'upload_failure' :
                      'unknown_error'
         }
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

// Helper function to monitor sandbox resources
async function monitorSandboxResources(sandbox, stage) {
  try {
    const diskCheck = await sandbox.commands.run('df -h .');
    const memoryCheck = await sandbox.commands.run('free -h');
    const processCheck = await sandbox.commands.run('ps aux --sort=-%mem | head -5');
    
    console.log(`\n📊 Resource Monitor - ${stage}:`);
    console.log('💾 Disk space:', diskCheck.stdout);
    console.log('🧠 Memory usage:', memoryCheck.stdout);
    console.log('⚡ Top memory processes:', processCheck.stdout);
    
    // Check for critical resource issues
    const diskLines = diskCheck.stdout.split('\n');
    const rootLine = diskLines.find(line => line.includes('/dev/root') || line.includes('/dev/sda'));
    if (rootLine) {
      const usage = rootLine.match(/(\d+)%/);
      if (usage && parseInt(usage[1]) > 90) {
        console.log('⚠️  Warning: Disk usage is above 90%');
      }
    }
    
    const memoryLines = memoryCheck.stdout.split('\n');
    const memLine = memoryLines.find(line => line.includes('Mem:'));
    if (memLine) {
      const memMatch = memLine.match(/(\d+)\s+(\d+)\s+(\d+)/);
      if (memMatch) {
        const total = parseInt(memMatch[1]);
        const used = parseInt(memMatch[2]);
        const usagePercent = Math.round((used / total) * 100);
        if (usagePercent > 85) {
          console.log(`⚠️  Warning: Memory usage is ${usagePercent}%`);
        }
      }
    }
  } catch (error) {
    console.log(`Resource monitoring warning for ${stage}:`, error.message);
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
    console.log('Template copy failed, creating minimal working React-Vite project...');
    
    // Fallback: Create a minimal working React-Vite project
    await createMinimalReactViteProject(sandbox);
    console.log('Minimal React-Vite project created as fallback');
  }
}

// Fallback function to create a minimal working React-Vite project
async function createMinimalReactViteProject(sandbox) {
  console.log('Creating minimal React-Vite project...');
  
  // Create package.json
  const packageJson = {
    name: "react-vite-app",
    private: true,
    version: "0.0.0",
    type: "module",
    scripts: {
      "dev": "vite",
      "build": "vite build",
      "preview": "vite preview"
    },
    dependencies: {
      "react": "^18.3.1",
      "react-dom": "^18.3.1"
    },
    devDependencies: {
      "@types/react": "^18.3.3",
      "@types/react-dom": "^18.3.0",
      "@vitejs/plugin-react": "^4.2.1",
      "typescript": "^5.2.2",
      "vite": "^5.3.4"
    }
  };
  
  await sandbox.files.write('package.json', JSON.stringify(packageJson, null, 2));
  
  // Create vite.config.ts
  const viteConfig = `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'esbuild'
  }
})`;
  
  await sandbox.files.write('vite.config.ts', viteConfig);
  
  // Create tsconfig.json
  const tsConfig = `{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"],
  "references": [{ "path": "./tsconfig.node.json" }]
}`;
  
  await sandbox.files.write('tsconfig.json', tsConfig);
  
  // Create tsconfig.node.json
  const tsConfigNode = `{
  "compilerOptions": {
    "composite": true,
    "skipLibCheck": true,
    "module": "ESNext",
    "moduleResolution": "bundler",
    "allowSyntheticDefaultImports": true
  },
  "include": ["vite.config.ts"]
}`;
  
  await sandbox.files.write('tsconfig.node.json', tsConfigNode);
  
  // Create index.html
  const indexHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React + Vite App</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>`;
  
  await sandbox.files.write('index.html', indexHtml);
  
  // Create src directory and main.tsx
  await sandbox.files.mkdir('src');
  
  const mainTsx = `import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)`;
  
  await sandbox.files.write('src/main.tsx', mainTsx);
  
  // Create App.tsx
  const appTsx = `import React from 'react'
import './App.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to React + Vite</h1>
        <p>This is a minimal working React + Vite application.</p>
      </header>
    </div>
  )
}

export default App`;
  
  await sandbox.files.write('src/App.tsx', appTsx);
  
  // Create CSS files
  const indexCss = `:root {
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}`;
  
  await sandbox.files.write('src/index.css', indexCss);
  
  const appCss = `.App {
  text-align: center;
}

.App-header {
  background-color: #282c34;
  padding: 20px;
  color: white;
  border-radius: 8px;
}

.App-header h1 {
  margin: 0 0 10px 0;
  font-size: 2.5rem;
}

.App-header p {
  margin: 0;
  font-size: 1.2rem;
  opacity: 0.8;
}`;
  
  await sandbox.files.write('src/App.css', appCss);
  
  console.log('Minimal React-Vite project created successfully');
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
