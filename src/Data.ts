import Image1 from './assets/img/image1.png';
import Image2 from './assets/img/image2.png';

export const servicesData = [
  {
    title: 'Campus Recruitment Website',
    desc: 'Developed a recruitment portal using Next.js and PostgreSQL, enabling student registration and HR profile reviews. Implemented automated redirection for shortlisted candidates and in-portal assessments for enhanced user experience. Implemented SSO login.',
    img: Image1,
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
