import Head from 'next/head';
import { site, absUrl, assetUrl, getRoute } from '@/lib/seo';

/**
 * Per page document metadata: title, description, canonical URL, Open Graph
 * and Twitter tags, and JSON-LD.
 *
 * Pass `path` matching an entry in lib/seo.js, or pass title/description
 * directly to override. Rendering this once per page replaces the hand written
 * <Head> blocks that previously carried create-next-app placeholder text.
 */
export default function Seo({ path, title, description, image, noindex }) {
  const route = getRoute(path) || {};

  const pageTitle = title || route.title || site.name;
  const pageDescription = description || route.description || site.description;
  const pageUrl = absUrl(path || route.path || '/');
  const pageImage = assetUrl(image || route.image || site.defaultImage);
  const isNoindex = noindex ?? route.noindex ?? false;
  const isHome = (path || route.path) === '/';

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': isHome ? 'Organization' : 'WebPage',
    name: isHome ? site.name : pageTitle,
    description: pageDescription,
    url: pageUrl,
    ...(isHome
      ? {
          alternateName: site.shortName,
          logo: assetUrl(site.logo),
          parentOrganization: {
            '@type': 'CollegeOrUniversity',
            name: 'Indian Institute of Technology Guwahati',
            url: 'https://www.iitg.ac.in/',
          },
        }
      : {
          inLanguage: 'en',
          isPartOf: { '@type': 'WebSite', name: site.name, url: absUrl('/') },
          publisher: { '@type': 'Organization', name: site.name, url: absUrl('/') },
        }),
  };

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={pageUrl} />
      <meta
        name="robots"
        content={isNoindex ? 'noindex, nofollow' : 'index, follow, max-image-preview:large'}
      />

      {/* basePath is not applied to raw hrefs in <Head>, so these are prefixed. */}
      <link rel="icon" href={`${site.basePath}/favicon.ico`} />
      <link rel="apple-touch-icon" href={`${site.basePath}/apple-touch-icon.png`} />
      <link rel="manifest" href={`${site.basePath}/site.webmanifest`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={site.name} />
      <meta property="og:locale" content={site.locale} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={pageImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDescription} />
      <meta name="twitter:image" content={pageImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
    </Head>
  );
}
