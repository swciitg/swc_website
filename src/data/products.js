// Every product SWC has shipped, in catalogue order.
//
// platforms  which filters on /products include the product
// span       columns it takes on the 12-column catalogue grid (8 + 4, 6 + 6 or 4 + 4 + 4 per row)
// status     optional chip beside the name
// frame      'phone' draws the screenshot as a portrait handset instead of a browser shot

const IMG = '/swc/v1/products'

export const PRODUCTS = [
  {
    id: 'one-stop',
    name: 'One Stop',
    href: 'https://play.google.com/store/apps/details?id=com.swciitg.onestop2',
    image: `${IMG}/one-stop.jpg`,
    platforms: ['mobile'],
    span: 8,
    status: 'Live',
    links: [
      { label: 'Play Store', href: 'https://play.google.com/store/apps/details?id=com.swciitg.onestop2' },
      { label: 'App Store', href: 'https://apps.apple.com/in/app/onestop-iitg/id1642792642' },
    ],
  },
  {
    id: 'college-cupid',
    name: 'CollegeCupid',
    href: '/swc/cards/apk/CollegeCupid_v1.0.7.apk',
    image: `${IMG}/college-cupid.jpg`,
    platforms: ['mobile'],
    span: 4,
    status: 'Install now',
    frame: 'phone',
    links: [{ label: 'Mobile app', href: '/swc/cards/apk/CollegeCupid_v1.0.7.apk' }],
  },
  {
    id: 'placement-stats',
    name: 'Placement Stats Portal',
    href: 'https://swc.iitg.ac.in/placement-stats/',
    image: `${IMG}/placement-stats.jpg`,
    platforms: ['web'],
    span: 6,
    status: 'Live',
    links: [
      { label: 'Website', href: 'https://swc.iitg.ac.in/placement-stats/' },
      { label: 'Tabular view', href: 'https://swc.iitg.ac.in/placement-stats/table/' },
      { label: 'Chart view', href: 'https://swc.iitg.ac.in/placement-stats/charts/' },
    ],
  },
  {
    id: 'election-portal',
    name: 'Election Portal',
    href: 'https://swc.iitg.ac.in/election_portal',
    image: `${IMG}/election-portal.jpg`,
    platforms: ['web'],
    span: 6,
    links: [
      { label: 'Website', href: 'https://swc.iitg.ac.in/election_portal' },
      { label: 'Statistics', href: 'https://swc.iitg.ac.in/election_portal/stats' },
    ],
  },
  {
    id: 'swc-journeys',
    name: 'SWC Journeys',
    href: 'https://swc.iitg.ac.in/journeys',
    image: `${IMG}/swc-journeys.jpg`,
    platforms: ['web', 'chrome'],
    span: 4,
    links: [
      { label: 'Website', href: 'https://swc.iitg.ac.in/journeys' },
      { label: 'GitHub', href: 'https://github.com/swciitg/swc-journeys' },
    ],
  },
  {
    id: 'hmc-elections',
    name: 'HMC Election Portal',
    href: 'https://swc.iitg.ac.in/hmc_elections/',
    image: `${IMG}/hmc-elections.jpg`,
    platforms: ['web'],
    span: 4,
    links: [{ label: 'Website', href: 'https://swc.iitg.ac.in/hmc_elections/' }],
  },
  {
    id: 'placement-portal',
    name: 'Placement Portal',
    href: 'https://online.iitg.ac.in/tnp/',
    image: `${IMG}/placement-portal.jpg`,
    platforms: ['web'],
    span: 4,
    links: [{ label: 'Website', href: 'https://online.iitg.ac.in/tnp/' }],
  },
  {
    id: 'senate-portal',
    name: 'Senate Portal',
    href: 'https://swc.iitg.ac.in/senate-portal/',
    image: `${IMG}/senate-portal.jpg`,
    platforms: ['web'],
    span: 4,
    links: [{ label: 'Website', href: 'https://swc.iitg.ac.in/senate-portal/' }],
  },
  {
    id: 'resume-builder',
    name: 'Resume Builder',
    href: 'https://swc.iitg.ac.in/resume-builder',
    image: `${IMG}/resume-builder.jpg`,
    platforms: ['web'],
    span: 4,
    links: [{ label: 'Website', href: 'https://swc.iitg.ac.in/resume-builder' }],
  },
  {
    id: 'sa-portal',
    name: 'SA Portal',
    href: 'https://intranet.iitg.ac.in/sa/',
    image: `${IMG}/sa-portal.png`,
    platforms: ['web'],
    span: 4,
    status: 'Live',
    links: [{ label: 'Website', href: 'https://intranet.iitg.ac.in/sa/' }],
  },
  {
    id: 'welfare-board',
    name: 'Welfare Board',
    href: 'https://swc.iitg.ac.in/welfare-board/',
    image: `${IMG}/welfare-board.png`,
    platforms: ['web'],
    span: 6,
    links: [{ label: 'Website', href: 'https://swc.iitg.ac.in/welfare-board/' }],
  },
  {
    id: 'sports-board',
    name: 'Sports Board',
    href: 'https://swc.iitg.ac.in/sports-board/',
    image: `${IMG}/sports-board.png`,
    platforms: ['web'],
    span: 6,
    links: [{ label: 'Website', href: 'https://swc.iitg.ac.in/sports-board/' }],
  },
]

export const PRODUCT_FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'web', label: 'Web' },
  { id: 'mobile', label: 'Mobile' },
  { id: 'chrome', label: 'Chrome' },
]

export const productsFor = (filter) =>
  filter === 'all' ? PRODUCTS : PRODUCTS.filter((product) => product.platforms.includes(filter))

// The four shown on the home page, in display order.
const FEATURED_IDS = ['one-stop', 'election-portal', 'placement-portal', 'swc-journeys']
export const FEATURED_PRODUCTS = FEATURED_IDS.map((id) => PRODUCTS.find((product) => product.id === id))
