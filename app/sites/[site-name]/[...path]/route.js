import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

// Serves files from Supabase Storage bucket "sites" with SPA fallback
export async function GET(request, { params }) {
  try {
    const { 'site-name': siteName, path = [] } = params;
    const SUPABASE_URL = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
    const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

    if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
      return new NextResponse('Supabase not configured', { status: 500 });
    }

    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const joinedPath = Array.isArray(path) && path.length > 0 ? path.join('/') : 'index.html';

    const storagePath = `${siteName}/${joinedPath}`;
    const { data, error } = await supabase.storage.from('sites').download(storagePath);

    // If file not found and looks like SPA route, fallback to index.html
    if (error) {
      const fallback = await supabase.storage.from('sites').download(`${siteName}/index.html`);
      if (!fallback.error) {
        const indexBuffer = await fallback.data.arrayBuffer();
        return new NextResponse(Buffer.from(indexBuffer), {
          headers: { 'Content-Type': 'text/html; charset=utf-8' },
        });
      }
      return new NextResponse('Not found', { status: 404 });
    }

    const arrayBuffer = await data.arrayBuffer();
    const contentType = detectContentType(joinedPath);
    return new NextResponse(Buffer.from(arrayBuffer), {
      headers: { 'Content-Type': contentType },
    });
  } catch (e) {
    return new NextResponse(`Error: ${e.message}`, { status: 500 });
  }
}

function detectContentType(path) {
  const lower = path.toLowerCase();
  if (lower.endsWith('.html')) return 'text/html; charset=utf-8';
  if (lower.endsWith('.css')) return 'text/css; charset=utf-8';
  if (lower.endsWith('.js')) return 'application/javascript; charset=utf-8';
  if (lower.endsWith('.json')) return 'application/json; charset=utf-8';
  if (lower.endsWith('.svg')) return 'image/svg+xml';
  if (lower.endsWith('.png')) return 'image/png';
  if (lower.endsWith('.jpg') || lower.endsWith('.jpeg')) return 'image/jpeg';
  if (lower.endsWith('.webp')) return 'image/webp';
  return 'application/octet-stream';
}


