// Central metadata for the site. Used by <Seo> and by pages/sitemap.xml.js.
//
// Note on paths: next.config.js sets basePath '/swc', so every public URL is
// origin + '/swc' + route. Next rewrites href on next/link and next/image, but
// NOT raw href/content strings inside <Head>, so the helpers below add the
// prefix explicitly.

export const site = {
  origin: 'https://swc.iitg.ac.in',
  // Keep in sync with basePath in next.config.js.
  basePath: '/swc',
  name: "Students' Web Committee, IIT Guwahati",
  shortName: "Students' Web Committee",
  description:
    "The Students' Web Committee of IIT Guwahati builds and maintains the web products used by the student body, including the Students' Gymkhana portals, election portals and campus information sites.",
  locale: 'en_IN',
  logo: '/swc-logo.png',
  defaultImage: '/header-bg.png',
};

const trimSlash = (value) => value.replace(/\/+$/, '');

/** Absolute origin + basePath, with no trailing slash. */
export const BASE = trimSlash(site.origin) + trimSlash(site.basePath);

/** Absolute public URL for a route such as '/' or '/team'. */
export function absUrl(route) {
  return route === '/' ? BASE + '/' : BASE + route;
}

/** Absolute URL for a file in public/, such as '/swc-logo.png'. */
export function assetUrl(publicPath) {
  return BASE + publicPath;
}

/**
 * Routes that should be indexed and listed in the sitemap.
 *
 * '/hiring' is deliberately absent: its getStaticProps returns
 * `notFound: true`, so the route 404s on purpose and must not be advertised.
 */
export const routes = [
  {
    path: '/',
    name: 'Home',
    title: "Students' Web Committee | IIT Guwahati",
    description: site.description,
  },
  {
    path: '/products',
    name: 'Products',
    title: "Products | Students' Web Committee, IIT Guwahati",
    description:
      "Web products built by the Students' Web Committee of IIT Guwahati, including SWC Journeys, the Election Portal, One Stop, Placement Stats, HMC Elections and the Placement Portal.",
  },
  {
    path: '/team',
    name: 'Team',
    title: "Team | Students' Web Committee, IIT Guwahati",
    description:
      "The people behind the Students' Web Committee of IIT Guwahati: the heads and the core team who build and maintain the committee's web products.",
  },
  {
    path: '/resources',
    name: 'Resources',
    title: "Resources | Students' Web Committee, IIT Guwahati",
    description:
      "Learning resources curated by the Students' Web Committee of IIT Guwahati, covering Flutter, HTML, CSS, JavaScript, React, Node.js, Django and more.",
  },
  {
    path: '/about',
    name: 'About',
    title: "About | Students' Web Committee, IIT Guwahati",
    description:
      "About the Students' Web Committee of IIT Guwahati, the student body responsible for the committee's web presence and products.",
    // This page currently renders only the word "About". Indexing a stub page
    // hurts more than it helps, so it stays out of the sitemap and is marked
    // noindex. Remove both flags once the page has real content.
    noindex: true,
  },
];

export function getRoute(path) {
  return routes.find((route) => route.path === path);
}

/** Routes eligible for the sitemap. */
export const indexableRoutes = routes.filter((route) => !route.noindex);
