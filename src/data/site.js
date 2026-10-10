export const CONTACT = {
  email: 'swc@iitg.ac.in',
  phone: '+91 89563 36360',
  address: ['SWC, New SAC', 'IIT Guwahati, 781039'],
};

export const MAILTO = `mailto:${CONTACT.email}`;
export const PROJECT_MAILTO = `${MAILTO}?subject=${encodeURIComponent('Project enquiry')}`;

export const GITHUB_ORG = 'swciitg';
export const GITHUB_URL = `https://github.com/${GITHUB_ORG}`;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/products', label: 'Products' },
  { href: '/resources', label: 'Resources' },
  { href: '/blogs', label: 'Blog' },
  { href: '/team', label: 'Team' },
  { href: '/hall-of-fame', label: 'Hall of Fame' },
];

export const SOCIALS = [
  {
    id: 'instagram',
    label: 'Instagram',
    cta: 'Join us on Instagram',
    href: 'https://www.instagram.com/swc_iitg/',
    color: 'pink',
    icon: '/swc/v1/footer/instagram.svg',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    cta: 'Connect with us on LinkedIn',
    href: 'https://www.linkedin.com/company/student-s-web-committee-iitg/',
    color: 'teal',
    icon: '/swc/v1/footer/linkedin.svg',
  },
  {
    id: 'discord',
    label: 'Discord',
    cta: 'Join us on Discord',
    href: 'https://discord.com/invite/QXWBj2j5Rs',
    color: 'lime',
    icon: '/swc/v1/footer/discord.svg',
  },
  {
    id: 'github',
    label: 'GitHub',
    href: GITHUB_URL,
    color: 'text',
    icon: '/swc/v1/footer/github.svg',
  },
];

export const FOOTER_COLUMNS = [
  {
    title: 'Products',
    color: 'lime',
    links: [
      { label: 'Placement Portal', href: 'https://online.iitg.ac.in/tnp/' },
      { label: 'Election Portal', href: 'https://swc.iitg.ac.in/election_portal' },
      { label: 'One Stop', href: 'https://play.google.com/store/apps/details?id=com.swciitg.onestop2' },
      { label: 'CollegeCupid', href: '/swc/cards/apk/CollegeCupid_v1.0.7.apk' },
      { label: 'SWC Journeys', href: 'https://swc.iitg.ac.in/journeys' },
    ],
  },
  {
    title: 'Gymkhana',
    color: 'teal',
    links: [
      { label: 'SA Portal', href: 'https://intranet.iitg.ac.in/sa/' },
      { label: 'HAB Portal', href: 'https://swc.iitg.ac.in/hab/' },
      { label: 'Sports Board', href: 'https://swc.iitg.ac.in/sports-board/' },
      { label: 'Welfare Board', href: 'https://swc.iitg.ac.in/welfare-board/' },
    ],
  },
  {
    title: 'Resources',
    color: 'pink',
    links: [
      { label: 'Blog', href: '/blogs', internal: true },
      { label: 'Learning tracks', href: '/resources', internal: true },
      { label: 'GitHub', href: GITHUB_URL },
      { label: 'Hall of Fame', href: '/hall-of-fame', internal: true },
    ],
  },
];
