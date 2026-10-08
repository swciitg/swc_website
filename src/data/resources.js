// Learning tracks shown on /resources. To add one, append an entry here: the page, its counter
// and the home page statistics all read this list.
//
// color     dot colour of the category chip (teal: client side, lime: backend, pink: design)
// logo      file in public/v1/tracks; logoWidth is its width when drawn 96px tall

const LOGO = '/swc/v1/tracks'

export const TRACKS = [
  {
    id: 'flutter',
    name: 'Flutter',
    category: 'Mobile',
    color: 'teal',
    logo: `${LOGO}/flutter.png`,
    logoWidth: 87,
    description:
      'An open-source UI toolkit by Google for creating natively compiled applications across mobile, web, and desktop from a single codebase.',
    href: 'https://swciitg.notion.site/Flutter-Hackstack-2024-6274025e81d64ac591a38e1ccc034b81?pvs=25',
  },
  {
    id: 'web',
    name: 'HTML, CSS, JavaScript',
    category: 'Web foundations',
    color: 'teal',
    logo: `${LOGO}/web.png`,
    logoWidth: 199,
    description:
      'The foundational trinity of web development: HTML for structure, CSS for styling, and JavaScript for interactivity.',
    href: 'https://swciitg.notion.site/HackStack-24-HTML-CSS-JavaScript-036b384a13cf4e90a3c786071c3abf31?pvs=25',
  },
  {
    id: 'react',
    name: 'ReactJS',
    category: 'Frontend',
    color: 'teal',
    logo: `${LOGO}/react.png`,
    logoWidth: 83,
    description:
      'A JavaScript library by Meta for building dynamic user interfaces, emphasizing component-based architecture and efficient rendering.',
    href: 'https://swciitg.notion.site/React-Hackstack-2024-b4fee56832de4347aad9c6f182a642cb?pvs=25',
  },
  {
    id: 'node',
    name: 'Node.js',
    category: 'Backend',
    color: 'lime',
    logo: `${LOGO}/node.png`,
    logoWidth: 106,
    description:
      'A server-side runtime for executing JavaScript, renowned for its non-blocking, event-driven architecture and scalability.',
    href: 'https://swciitg.notion.site/Node-js-Workshop-2024-299346a043124e8f861afe067cdec323?pvs=25',
  },
  {
    id: 'django',
    name: 'Django',
    category: 'Backend',
    color: 'lime',
    logo: `${LOGO}/django.png`,
    logoWidth: 96,
    description: 'A high-level Python web framework, renowned for its rapid development, built-in features, and scalability.',
    href: 'https://swciitg.notion.site/Django-Hackstack-2024-8f4115ccfbf44bcd9b7898c7c0c75550?pvs=25',
  },
  {
    id: 'uiux',
    name: 'UI/UX',
    category: 'Design',
    color: 'pink',
    logo: `${LOGO}/uiux.png`,
    logoWidth: 77,
    description:
      'UI focuses on the design and aesthetics of a product, while UX emphasizes its functionality and the overall experience of the user.',
    href: 'https://swciitg.notion.site/UI-UX-Workshop-a4acd98e599946fa8c5ee1f478dba276?pvs=25',
  },
]
