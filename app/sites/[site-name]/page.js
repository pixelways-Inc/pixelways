import { notFound } from 'next/navigation';

export default async function SitePage({ params }) {
  const { site_name } = params;

  // Placeholder for fetching site content from Supabase
  // In a real scenario, you would fetch the site's HTML/CSS/JS from Supabase Storage
  // based on site_name and render it.
  const siteContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Pixelways AI Site: ${site_name}</title>
      <style>
        body { font-family: sans-serif; display: flex; flex-direction: column; justify-content: center; align-items: center; height: 100vh; margin: 0; background-color: #f0f0f0; color: #333; }
        h1 { color: #4f46e5; }
        p { font-size: 1.2em; }
      </style>
    </head>
    <body>
      <h1>Welcome to your AI-Generated Site!</h1>
      <p>Site Name: <strong>${site_name}</strong></p>
      <p>This is a placeholder. Your actual site content would be loaded here from Supabase.</p>
    </body>
    </html>
  `;

  if (!site_name) {
    notFound();
  }

  // For now, we'll just return the placeholder HTML.
  // In a real application, you would parse the fetched HTML and render it securely.
  return (
    <div dangerouslySetInnerHTML={{ __html: siteContent }} />
  );
}
