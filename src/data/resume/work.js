/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'ACCENTURE',
    position: 'FULL STACK DEVELOPER',
    startDate: '2023',
    highlights: [
      'API development',
      'Database integration',
      'Server-side scripting using JSP',
      'Implemented  search functionalities with Solr',
      'Implemented GTM to the new UI/UX',
      'Improved Frontend performance',
    ],
  },
  {
    name: 'ACCENTURE',
    position: 'FRONTEND DEVELOPER',
    startDate: '2021',
    highlights: [
      'Created responsive and user-centric interfaces using JavaScript frameworks',
      'Developed accessibility, ensuring compliance with W3C standards.',
    ],
  },
  {
    name: 'ACCENTURE',
    position: 'FUNCTIONAL TESTER',
    startDate: '2021',
    highlights: [
      'Functional testing',
      'Regression testing',
      'Smoke testing',
      'Created detailed acceptance criteria for user stories',
      'Ensuring features met required standards and aligned with project goals',
    ],
  },
  {
    name: 'Remote Skills',
    position: 'TECHNICAL EXECUTIVE ASSISTANT',
    startDate: '2020',
    highlights: [
      'Setting up WordPress sites',
      'Integrating Podia for streamlined content management.',
      'Creating engaging posters, videos, and social media designs using Canva',
      'Designing banners for effective visual communication',
      'Manage recruitment process',
      'Leveraging design skills to enhance branding and outreach efforts',
    ],
  },
  {
    name: 'Hipe',
    position: 'INTERN',
    highlights: [
      'Converting static pages to responsive pages through SASS',
    ],
  },
];

export default work;
