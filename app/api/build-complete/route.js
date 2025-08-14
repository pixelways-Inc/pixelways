import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const { status, site } = await request.json();
    console.log('Received build complete notification:', { status, site });

    if (status === 'success') {
      // Placeholder for actual logic:
      // Construct the Supabase-hosted URL
      const previewUrl = `https://pixelways.co/sites/${site}/index.html`; // Assuming index.html for static sites

      return NextResponse.json({ preview_url: previewUrl, message: 'Preview URL generated (placeholder).' });
    } else {
      return NextResponse.json({ error: 'Build failed.', site }, { status: 500 });
    }
  } catch (error) {
    console.error('Error in /api/build-complete:', error);
    return NextResponse.json({ error: 'Failed to process build complete notification.' }, { status: 500 });
  }
}
