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
      
      // Here you could:
      // 1. Update a database with the build status
      // 2. Send notifications to users
      // 3. Trigger additional processes
      // 4. Update UI state via WebSocket/SSE
      
      return NextResponse.json({
        success: true,
        message: 'Build completion processed successfully',
        preview_url: body.preview_url,
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