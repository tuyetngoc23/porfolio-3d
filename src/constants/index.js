import { renderDefaultProjectLogo, renderDefaultProjectSpotlight } from '../utils/helper';

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Emily Johnson',
    position: 'Marketing Director at GreenLeaf',
    img: '/porfolio-3d/assets/review1.png',
    review:
      'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: '/porfolio-3d/assets/review2.png',
    review:
      'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: '/porfolio-3d/assets/review3.png',
    review:
      'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: '/porfolio-3d/assets/review4.png',
    review:
      'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];

export const myProjects = [
  {
    title: 'OPL - E-commerce Platform',
    desc: 'OPL is a E-commerce Platform with 2 site for Seller Merchant and Customer help people to buy and sell product easily.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 15, Tailwind CSS, TypeScript, Ant Design, Zustand for handle state and React Query for handle data fetching, OPL is designed for optimal performance and scalability.',
    href: '',
    texture: '/porfolio-3d/textures/project/project2.mp4',
    logo: renderDefaultProjectLogo(),
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: renderDefaultProjectSpotlight(),
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/porfolio-3d/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/porfolio-3d/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/porfolio-3d/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Ant Design',
        path: '/porfolio-3d/assets/ant-design.png',
      },
      {
        id: 5,
        name: 'Zustand',
        path: '/porfolio-3d/assets/zustand.png',
      },
      {
        id: 6,
        name: 'React Query',
        path: '/porfolio-3d/assets/react-query.png',
      },
      {
        id: 7,
        name: 'Next.js',
        path: '/porfolio-3d/assets/nextjs.png',
      },
    ],
  },
  {
    title: 'Glotoss PMS - Work Management Platform',
    desc: 'Glotoss PMS is a cutting-edge Software-as-a-Service platform that redefines workflow management. Designed with scalability and automation in mind, it empowers teams to streamline complex processes, assign tasks efficiently, and gain real-time visibility into every stage of their operations — all from a centralized, user-friendly dashboard.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Vite, Tailwind CSS, TypeScript, React Query, React Router, Shadcn/ui, Tanstack and Zustand, Glotoss is designed for optimal performance and scalability.',
    href: 'https://pms.glotoss.com',
    texture: '/porfolio-3d/textures/project/project1.mp4',
    logo: '/porfolio-3d/assets/project-glotoss.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: renderDefaultProjectSpotlight(),
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/porfolio-3d/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: '/porfolio-3d/assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/porfolio-3d/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Vite',
        path: '/porfolio-3d/vite.svg',
      },
      {
        id: 5,
        name: 'Shadcn/ui',
        path: '/porfolio-3d/assets/shadcn-ui.png',
      },
      {
        id: 6,
        name: 'Tanstack',
        path: '/porfolio-3d/assets/tanstack.png',
      },
      {
        id: 7,
        name: 'Zustand',
        path: '/porfolio-3d/assets/zustand.png',
      },
    ],
  },
  {
    title: 'Lotte Mart VN - E-commerce Platform',
    desc: 'Lotte Mart VN is a E-commerce Platform help people to buy product easily. Support multi language for Korean, Vietnamese, English.',
    subdesc:
      ' Developed a e-commerce platform using such as React, React Router, Redux with some feature like product list, detail, recommend, review, rating. Fixing bugs to meet project deadlines and sending daily reports to team leader and manager. Integrated web UI with multiples languages and responsive for multi devices. Integrated backend services using REST API to enable data comunication between frontend and server.',
    href: '',
    texture: '/porfolio-3d/textures/project/project2.mp4',
    logo: '/porfolio-3d/assets/logo-lotte-mart.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: renderDefaultProjectSpotlight(),
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/porfolio-3d/assets/react.svg',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: '/porfolio-3d/assets/typescript.png',
      },
      {
        id: 3,
        name: 'Redux',
        path: '/porfolio-3d/assets/redux.png',
      },
      {
        id: 4,
        name: 'React Router',
        path: '/porfolio-3d/assets/react-router.png',
      },
      {
        id: 5,
        name: 'Next.js',
        path: '/porfolio-3d/assets/nextjs.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [11, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-20, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Lotte Innnovate',
    pos: 'Frontend Developer',
    duration: '2021 - Present',
    title: "As a Frontend Developer at Lotte Innovate Vietnam, I was primarily responsible for developing and maintaining web applications using React and TypeScript. My role involved building scalable UI components, integrating APIs, and ensuring responsive, accessible designs across multiple projects. I worked closely with cross-functional teams, applying best practices in code structure, performance optimization, and state management using Redux,.... This experience significantly strengthened my ability to deliver production-ready features in a fast-paced, Agile environment.",
    icon: '/porfolio-3d/assets/logo-lotte.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'HCMC Open Univesery',
    pos: 'Student',
    duration: '2018 - 2022',
    title: "Participated in team-based academic projects focusing on web development fundamentals and software engineering principles. Developed several mini-projects including personal portfolio sites, CRUD applications, and basic UI components using HTML, CSS, JavaScript, and React. Gained foundational experience in version control (Git), teamwork, and task management through group assignments. Received positive feedback from lecturers for project quality and active collaboration.",
    icon: '/porfolio-3d/assets/logo-dai-hoc-mo.png',
    animation: 'clapping',
  },
];

export const aboutMe = [
  {
    id: 1, imageSrc: '/porfolio-3d/assets/grid1.png', alt: 'grid1', headText: "Hi, I'm Ngoc", subText: "With 4+ YoE , I have honed my skills in web frontend development, with focus on React and Typescript."
  },
  {
    id: 2, imageSrc: '/porfolio-3d/assets/grid2.png', alt: 'grid2', headText: "Tech Stack", subText: "I specialize in Javascript/Typescript with a focus on React and Next.js ecosystems."
  },
]