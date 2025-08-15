import { notFound } from 'next/navigation';

// Keep this page minimal; actual file serving is via the catch-all route
export default async function SitePage({ params }) {
  const siteName = params['site-name'];
  if (!siteName) {
    notFound();
  }
  return (
    <div className="p-8">
      <h1 className="text-2xl font-semibold">Site "{siteName}"</h1>
      <p className="text-gray-600">Direct file serving: /sites/{siteName}/index.html</p>
    </div>
  );
}
