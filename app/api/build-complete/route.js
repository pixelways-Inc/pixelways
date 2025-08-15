import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    
    console.log('📡 Build completion webhook received:', {
      status: body.status,
      repo_name: body.repo_name,
      project_type: body.project_type,
      preview_url: body.preview_url,
      build_time: body.build_time,
      success: body.success
    });

    // Validate the webhook payload
    if (!body.repo_name || !body.status) {
      return NextResponse.json({ 
        error: 'Invalid webhook payload' 
      }, { status: 400 });
    }

    // Handle successful build completion
    if (body.status === 'completed' && body.success) {
      console.log('✅ Build completed successfully!');
      console.log(`🌐 Site available at: ${body.preview_url}`);
      
      // Cleanup temporary GitHub repository
      if (body.cleanup_token && body.github_user && body.repo_name) {
        try {
          console.log(`🧹 Cleaning up temporary repository: ${body.repo_name}`);
          
          const deleteResponse = await fetch(`https://api.github.com/repos/${body.github_user}/${body.repo_name}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `token ${body.cleanup_token}`,
              'Accept': 'application/vnd.github.v3+json',
            },
          });

          if (deleteResponse.ok) {
            console.log(`✅ Repository ${body.repo_name} deleted successfully`);
          } else {
            console.warn(`⚠️ Failed to delete repository ${body.repo_name}: ${deleteResponse.status}`);
          }
        } catch (cleanupError) {
          console.error('🔥 Repository cleanup error:', cleanupError);
          // Don't fail the webhook if cleanup fails
        }
      }
      
      return NextResponse.json({
        success: true,
        message: 'Build completion processed successfully',
        preview_url: body.preview_url,
        repo_cleaned: !!body.cleanup_token,
        timestamp: new Date().toISOString()
      });
    }

    // Handle build failures
    if (body.status === 'failed' || !body.success) {
      console.error('❌ Build failed:', body);
      
      return NextResponse.json({
        success: false,
        message: 'Build failure processed',
        error: body.error || 'Build failed',
        timestamp: new Date().toISOString()
      });
    }

    // Handle other statuses
    return NextResponse.json({
      success: true,
      message: `Build status '${body.status}' received`,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('🔥 Webhook processing error:', error);
    
    return NextResponse.json({ 
      success: false,
      error: 'Failed to process webhook',
      message: error.message,
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}

// Handle GET requests for testing
export async function GET() {
  return NextResponse.json({
    message: 'PixelAI Build Completion Webhook Endpoint',
    status: 'active',
    accepts: 'POST requests with build completion data',
    timestamp: new Date().toISOString()
  });
}