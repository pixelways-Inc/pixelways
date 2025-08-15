import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_CONFIG } from '../../../utility/supabaseConstants';

export async function POST(request) {
  try {
    const { files, siteName, projectType = 'static' } = await request.json();
    
    if (!files || !Array.isArray(files)) {
      return NextResponse.json({ error: 'Files array is required' }, { status: 400 });
    }
    
    if (!siteName) {
      return NextResponse.json({ error: 'Site name is required' }, { status: 400 });
    }
    
    // Only allow syncing for static projects
    if (projectType !== 'static') {
      return NextResponse.json({ 
        error: `Cannot sync ${projectType} projects directly to Supabase`,
        message: `${projectType} projects must go through the build pipeline first`,
        projectType 
      }, { status: 400 });
    }
    
    console.log(`Syncing ${files.length} static files to Supabase for site: ${siteName}`);
    
    const supabase = createClient(SUPABASE_CONFIG.URL, SUPABASE_CONFIG.SERVICE_ROLE_KEY);
    const bucket = 'sites';
    
    // Upload each file to Supabase Storage
    const uploadResults = [];
    
    for (const file of files) {
      try {
        const filePath = `${siteName}/${file.path}`;
        const fileContent = new Blob([file.content], { type: 'text/plain' });
        
        // Delete existing file first (to handle updates)
        await supabase.storage
          .from(bucket)
          .remove([filePath]);
        
        // Upload the new/updated file
        const { data, error } = await supabase.storage
          .from(bucket)
          .upload(filePath, fileContent, {
            cacheControl: '3600',
            upsert: true,
            contentType: getContentType(file.path)
          });
        
        if (error) {
          console.error(`Error uploading ${file.path}:`, error);
          uploadResults.push({
            path: file.path,
            success: false,
            error: error.message
          });
        } else {
          console.log(`Successfully uploaded: ${file.path}`);
          uploadResults.push({
            path: file.path,
            success: true,
            data
          });
        }
      } catch (error) {
        console.error(`Error processing ${file.path}:`, error);
        uploadResults.push({
          path: file.path,
          success: false,
          error: error.message
        });
      }
    }
    
    const successCount = uploadResults.filter(r => r.success).length;
    const failureCount = uploadResults.filter(r => !r.success).length;
    
    console.log(`Sync completed: ${successCount} successful, ${failureCount} failed`);
    
    return NextResponse.json({
      success: true,
      message: `Synced ${successCount} files to Supabase`,
      siteName,
      stats: {
        total: files.length,
        successful: successCount,
        failed: failureCount
      },
      results: uploadResults
    });
    
  } catch (error) {
    console.error('Supabase sync error:', error);
    return NextResponse.json({ 
      success: false,
      error: 'Failed to sync to Supabase',
      details: error.message 
    }, { status: 500 });
  }
}

// Helper function to determine content type
function getContentType(filePath) {
  const extension = filePath.split('.').pop().toLowerCase();
  
  switch (extension) {
    case 'html':
      return 'text/html';
    case 'css':
      return 'text/css';
    case 'js':
      return 'application/javascript';
    case 'json':
      return 'application/json';
    case 'txt':
      return 'text/plain';
    case 'md':
      return 'text/markdown';
    case 'svg':
      return 'image/svg+xml';
    case 'png':
      return 'image/png';
    case 'jpg':
    case 'jpeg':
      return 'image/jpeg';
    case 'gif':
      return 'image/gif';
    case 'ico':
      return 'image/x-icon';
    default:
      return 'text/plain';
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: 'PixelWays Supabase Sync API',
    status: 'active',
    accepts: 'POST requests with file sync data',
    format: {
      files: 'array of {path, content} objects',
      siteName: 'unique site identifier'
    },
    timestamp: new Date().toISOString()
  });
}
