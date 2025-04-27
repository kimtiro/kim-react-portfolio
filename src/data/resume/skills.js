const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Java',
    competency: 4,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Springboot',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'Node.JS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'React',
    competency: 2,
    category: ['Web Development'],
  },
  {
    title: 'Next.JS',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Languages'],
  },
  {
    title: 'SALESFORCE COMMERCE CLOUD',
    competency: 3,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'SAP COMMERCE CLOUD',
    competency: 4,
    category: ['Web Development', 'Tools'],
  },
  {
    title: 'W3C ACCESSIBILITY',
    competency: 3,
    category: ['Web Development'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools', 'Data Engineering'],
  },
  {
    title: 'Typescript',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 3,
    category: ['Web Development', 'Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'C++',
    competency: 1,
    category: ['Languages'],
  },
  {
    title: 'Data Visualization',
    competency: 3,
    category: ['Data Science'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [...new Set(skills.flatMap(({ category }) => category))]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };
