import { Project, Experience, Education } from '../types'

export const profile = {
  name: 'Mohamad Sadem Serhal',
  first: 'Mohamad',
  title: 'Junior Full-Stack Developer',
  objective:
    'Junior Full-Stack Developer with a strong foundation in Spring Boot, Next.js, and modern UI frameworks. Passionate about building responsive, scalable web apps and writing clean, maintainable code.',
  email: 'mohamad.sadem@gmail.com',
  phone: '+961 71 851 054',
  github: 'https://github.com/Mohamadsadem0',
  linkedin: 'https://www.linkedin.com/in/mohamad-serhal-721658229',
  location: 'Lebanon · Remote-friendly',
  avatarSrc: '/profile.jpg',
  skills: {
    frontend: ['Next.js (TypeScript)', 'React', 'MUI', 'ShadCN', 'Tailwind CSS', 'Bootstrap'],
    backend: ['Spring Boot 3 (Java 21)', 'Express.js/Node.js', 'Laravel', 'REST APIs', 'JWT Auth'],
    databases: ['PostgreSQL', 'MySQL', 'MongoDB'],
    languages: ['Java', 'JavaScript (ES6+)', 'TypeScript', 'PHP', 'HTML', 'CSS'],
    tools: ['Git', 'Docker', 'Heroku', 'Render', 'CI/CD Basics', 'Agile'],
  },
  education: [
    { school: 'Lebanese International University', degree: 'B.Sc. in Computer Science', note: 'Currently one semester ahead toward completing my bachelor.' },
    { school: 'Web Development Bootcamp', degree: 'React, Next.js, REST APIs, Deployments' },
  ] as Education[],
  experience: [
    {
      company: 'Private Tutoring',
      role: 'Programming & Web Development Teacher',
      time: 'Ongoing',
      bullets: [
        'Teach React (TypeScript), Spring Boot, and Laravel using a practical, project-based curriculum.',
        'Cover databases (PostgreSQL/MySQL/MongoDB): schema design, relationships, indexing, performance.',
        'Coach on Git workflows, REST API design, testing, and containerized deployments (Docker/Render/Heroku).',
      ],
    },
    {
      company: 'Independent / Epic MegaJam',
      role: 'Game Developer',
      time: 'Jam participation & ongoing prototypes',
      bullets: [
        'Participated in Epic MegaJam; shipped a playable prototype under tight deadlines.',
        'Owned gameplay loop, level flow, menus/UX, and tuning via playtesting feedback.',
        'Scoped features effectively, collaborated with teammates, and optimized performance.',
      ],
    },
    {
      company: 'Dahboul Computer',
      role: 'Full-Stack Developer',
      time: 'Oct 2023 – Mar 2024',
      bullets: [
        'Built full-stack apps using React and Spring Boot.',
        'Implemented secure JWT authentication and REST APIs.',
        'Containerized deployments with Docker; collaborated cross-functionally.',
      ],
    },
  ] as Experience[],
  languagesKnown: [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Intermediate' },
    { name: 'French', level: 'Intermediate' },
  ],
}

export const projects: Project[] = [
  {
    slug: 'epic-megajam-prototype',
    name: 'Epic MegaJam Prototype',
    period: 'Epic MegaJam',
    tagline: 'Playable jam game built end-to-end in a small team',
    description:
      'Participated in Epic MegaJam and delivered a playable prototype, focusing on the core gameplay loop, feel, level flow, and UX polish within the jam constraints.',
    tech: ['Prototyping', 'Gameplay Loop', 'Level Design', 'UX & Menus', 'Team Collaboration'],
    highlights: ['Tight deadline execution', 'Iterative playtesting & tuning', 'Scope control & feature triage'],
    links: [],
  },
  {
    slug: 'shopiishop',
    name: 'ShopiiShop',
    period: 'Aug 2024 – Feb 2025',
    tagline: 'Multi-vendor eCommerce with real-time features',
    description:
      'Multi-vendor eCommerce platform with Next.js (TS) frontend and Spring Boot 3 backend. Implemented JWT auth, RESTful APIs, and real-time socket features; Dockerized services and deployed on Oracle VM; responsive UI with Tailwind.',
    tech: ['Next.js', 'TypeScript', 'Spring Boot 3', 'JWT', 'WebSockets', 'Docker', 'Tailwind CSS'],
    highlights: ['Modular backend (Spring Boot 3)', 'Role-based access with JWT', 'Real-time updates via sockets'],
    links: [{ label: 'Download CV', href: '/cv.pdf' }],
  },
]