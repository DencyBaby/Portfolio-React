import Image1 from './assets/img/image1.png';
import Image2 from './assets/img/image2.png';

export const servicesData = [
  {
    title: 'Campus Recruitment Website',
    desc: 'Developed a recruitment portal using Next.js and PostgreSQL, enabling student registration and HR profile reviews. Implemented automated redirection for shortlisted candidates and in-portal assessments for enhanced user experience. Implemented SSO login.',
    img: Image1,
    link: 'https://campusportal.experionglobal.com',
  },
  {
    title: 'Planning Poker Website',
    desc: 'Created a web application with React.js and Node.js, using MySQL to facilitate sprint planning meetings. Enabled Scrum Masters and Project Managers to schedule meetings and select relevant projects. Attendees could vote with virtual cards, with real-time results. Implemented SSO login',
    link: 'https://github.com/Dency675/PlanIt/tree/dev3',
    img: Image2,
  },
  {
    title: 'Blockchain Based E-voting System',
    desc: 'Developed smart contracts in Solidity and built a user-friendly website using JavaScript. Implemented two-factor authentication for security and allowed multiple elections simultaneously. Each person can vote only once in an election.',
    link: 'https://github.com/SVAD-S/votem',
  },
  {
    title: 'Interpreter for C to RISC',
    desc: 'Developed an Interpreter for C programming language to generate RISC assembly code. Coded from scratch, implementing lexical analysis, syntax tree creation, parsing, and assembly level code generation. Features included structs and type checking.',
  },
];

export const aboutContent = {
  main: "I'm a developer with a passion for creating applications in React and Next.js. I enjoy working with clean, simple code and building unique projects. I also love collaborating with diverse teams and sharing ideas to create innovative solutions.",
  sub: 'I have worked with a variety of technologies including MySQL, PostgreSQL, and MongoDB for database management. For styling, I have used Material UI, Bootstrap, CSS, and Chakra UI to create responsive and user-friendly interfaces. I have experience developing full-stack applications with Node.js, React.js, and Next.js.',
  bullet: [
    'Developed full-stack applications using React, Next.js, and Node.js.',
    'Worked with MySQL, PostgreSQL, and MongoDB for efficient data management.',
    'Used Material UI, Bootstrap, and Chakra UI for building beautiful and responsive user interfaces.',
    'Completed my BTech in Computer Science and interned at IIT Palakkad.',
  ],
};

export const socialmedia = {
  linkedin: 'https://www.linkedin.com/in/dency-baby-baa087255/',
  instagram: 'https://www.instagram.com/dency.kichu/',
  mail: 'mailto:neelamkavil2002@gmail.com',
};

export const skills = [
  { name: 'React', percentage: 80 },
  { name: 'Node', percentage: 80 },
  { name: 'Next', percentage: 80 },
  { name: 'Javascript', percentage: 80 },
  { name: 'Java', percentage: 60 },
  { name: 'Python', percentage: 70 },
  { name: 'C', percentage: 70 },
];
