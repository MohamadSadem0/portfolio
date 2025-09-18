
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
  avatarSrc: '/portfolio/profile.jpg',
  education: [
    { school: 'Lebanese International University', degree: 'B.Sc. in Computer Science', note: 'Currently one semester ahead toward completing my bachelor.' },
    { school: 'Web Development Bootcamp', degree: 'React, Next.js, REST APIs, Deployments' },
  ],
  experience: [
    {
      company: 'Private Tutoring',
      role: 'Programming & Web Development Teacher',
      time: 'Ongoing',
      bullets: [
        'Teach React (TypeScript), Spring Boot, and Laravel with a project-based curriculum.',
        'Databases (PostgreSQL/MySQL/MongoDB): schema design, relationships, indexing, performance.',
        'Mentor on Git workflows, REST API design, testing, and Dockerized deployments.',
      ],
    },
    {
      company: 'Independent / Epic MegaJam',
      role: 'Game Developer',
      time: 'Jam participation & ongoing prototypes',
      bullets: [
        'Participated in Epic MegaJam; shipped a playable prototype under tight deadlines.',
        'Owned gameplay loop, level flow, menus/UX; iterated via playtesting to improve feel.',
        'Scoped features, collaborated with version control, and optimized performance.',
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
  ],
  projects: [
    {
      slug: 'epic-megajam-prototype',
      name: 'Epic MegaJam Prototype',
      period: 'Epic MegaJam',
      tagline: 'Playable jam game built end-to-end in a small team',
      description:
        'Participated in Epic MegaJam and delivered a playable prototype focusing on gameplay loop, level flow, menus/UX, and polish within jam constraints.',
      tech: ['Prototyping', 'Gameplay Loop', 'Level Design', 'UX & Menus', 'Team Collaboration'],
      highlights: ['Tight deadline execution', 'Iterative playtesting & tuning', 'Scope control & triage'],
      links: [],
    },
    {
      slug: 'shopiishop',
      name: 'ShopiiShop',
      period: 'Aug 2024 – Feb 2025',
      tagline: 'Multi-vendor eCommerce with real-time features',
      description:
        'Next.js (TS) + Spring Boot 3 platform. JWT auth, RESTful APIs, and real-time sockets; Dockerized services on Oracle VM; responsive UI with Tailwind.',
      tech: ['Next.js', 'TypeScript', 'Spring Boot 3', 'JWT', 'WebSockets', 'Docker', 'Tailwind CSS'],
      highlights: ['Modular backend', 'Role-based access with JWT', 'Real-time updates via sockets'],
      links: [{ label: 'Download CV', href: '/portfolio/cv.pdf' }],
    },
  ],
  testimonials: [
    { name: 'Ali — CS Student', quote: 'Mohamad explains React and APIs so clearly. I shipped my first full app in weeks.' },
    { name: 'Sara — Junior Dev', quote: 'His Spring Boot sessions unlocked backend concepts for me.' },
    { name: 'Hadi — Gamer/Designer', quote: 'The jam prototype felt surprisingly polished for a weekend build.' },
  ],
}
