import { absUrl, indexableRoutes } from '@/lib/seo';

/*
 * Serves /swc/sitemap.xml. Generated per request from lib/seo.js rather than
 * kept as a static file, so adding a route to that list is enough to publish
 * it and the sitemap can never drift out of sync with the metadata.
 */

function buildSitemap() {
  const lastmod = new Date().toISOString().slice(0, 10);

  const urls = indexableRoutes
    .map((route) =>
      [
        '  <url>',
        `    <loc>${absUrl(route.path)}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        '    <changefreq>monthly</changefreq>',
        `    <priority>${route.path === '/' ? '1.0' : '0.7'}</priority>`,
        '  </url>',
      ].join('\n')
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

export async function getServerSideProps({ res }) {
  res.setHeader('Content-Type', 'application/xml; charset=utf-8');
  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=3600');
  res.write(buildSitemap());
  res.end();

  return { props: {} };
}

// Never rendered: getServerSideProps ends the response itself.
export default function Sitemap() {
  return null;
}
