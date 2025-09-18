export type Project = {
  slug?: string
  name: string
  period?: string | null
  time?: string
  tagline?: string            // <-- optional (Projects.tsx uses it)
  description: string
  tech: string[]
  highlights?: string[]
  links?: { label: string; href: string }[]
}

export type EducationItem = {
  school: string
  degree: string
  time?: string
  note?: string               // <-- optional (Education.tsx checks it)
}

export type ExperienceItem = {
  company: string
  role: string
  time: string
  bullets: string[]
}

export type Testimonial = { name: string; quote: string }

export const profile = {
  name: "Mohamad Sadem Serhal",
  first: "Mohamad",                             // <-- optional used by Home.tsx
  title: "Junior Full-Stack Developer",
  objective:
    "Junior Full-Stack Developer with a strong foundation in Spring Boot, Next.js, and modern UI frameworks. Passionate about building responsive, scalable web apps and writing clean, maintainable code.",
  email: "mohamad.sadem@gmail.com",
  phone: "+961 71 851 054",
  github: "https://github.com/Mohamadsadem0",
  linkedin: "https://www.linkedin.com/in/mohamad-serhal-721658229",
  avatarSrc: "/portfolio/profile.jpg",          // <-- optional used by Home.tsx

  education: [
    { school: "Lebanese International University", degree: "B.Sc. in Computer Science (Expected 2026)", time: "2022 – 2026", note: "One semester ahead toward completing my bachelor." },
    { school: "Web Development Bootcamp", degree: "React, Next.js, REST APIs, Deployments", time: "Feb 2024 – Apr 2024" },
  ] as EducationItem[],

  skills: {
    frontend: ["Next.js (TypeScript)", "React", "MUI", "ShadCN", "Tailwind CSS", "Bootstrap"],
    backend: ["Spring Boot 3 (Java 21)", "Express.js/Node.js", "REST APIs", "JWT Auth", "Laravel"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    languages: ["Java", "JavaScript (ES6+)", "TypeScript", "PHP", "HTML", "CSS"],
    tools: ["Git", "Docker", "Heroku", "Render", "CI/CD Basics", "Agile"],
  },

  projects: [
    {
      slug: "epic-megajam-prototype",
      name: "Epic MegaJam Prototype",
      period: "Epic MegaJam",
      tagline: "Playable jam game built end-to-end in a small team",   // <-- now present
      description:
        "Participated in Epic MegaJam and delivered a playable prototype focusing on gameplay loop, level flow, menus/UX, and polish within jam constraints.",
      tech: ["Prototyping", "Gameplay Loop", "Level Design", "Team Collaboration"],
      highlights: ["Tight deadline execution", "Iterative playtesting & tuning", "Scope control & triage"],
      links: [],
    },
    {
      slug: "shopiishop",
      name: "ShopiiShop",
      period: "Aug 2024 – Feb 2025",
      description:
        "Next.js (TS) + Spring Boot 3 platform. JWT auth, RESTful APIs, and real-time sockets; Dockerized services on Oracle VM; responsive UI with Tailwind.",
      tech: ["Next.js", "TypeScript", "Spring Boot 3", "JWT", "WebSockets", "Docker", "Tailwind CSS"],
      highlights: ["Modular backend", "Role-based access with JWT", "Real-time updates via sockets"],
      links: [{ label: "Download CV", href: "/portfolio/cv.pdf" }],
    },
  ] as Project[],

  experience: [
    {
      company: "Private Tutoring",
      role: "Programming & Web Development Teacher",
      time: "Ongoing",
      bullets: [
        "Teach React (TypeScript), Spring Boot, and Laravel through a project-based curriculum.",
        "Cover databases (PostgreSQL/MySQL/MongoDB): schema design, relationships, indexing, and hands-on querying.",
        "Coach students on Git workflows, REST API design, testing, and deployments (Docker/Heroku/Render).",
      ],
    },
    {
      company: "Independent",
      role: "Game Developer",
      time: "Ongoing",
      bullets: [
        "Epic MegaJam participant; delivered a playable prototype on a tight timeline.",
        "Owned gameplay loop, level flow, and UX polish; coordinated tasks and version control.",
        "Iterated quickly from playtesting feedback to improve feel and onboarding.",
      ],
    },
    {
      company: "Dahboul Computer",
      role: "Full-Stack Developer",
      time: "Oct 2023 – Mar 2024",
      bullets: [
        "Built full-stack apps using React and Spring Boot.",
        "Implemented secure JWT authentication and REST APIs.",
        "Containerized deployments with Docker; collaborated cross-functionally.",
      ],
    },
  ] as ExperienceItem[],

  languagesKnown: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Intermediate" },
    { name: "French", level: "Intermediate" },
  ],

  testimonials: [
    { name: "Ali — CS Student",  quote: "Mohamad explains React and APIs so clearly. I shipped my first full app in weeks." },
    { name: "Sara — Junior Dev", quote: "His Spring Boot sessions unlocked backend concepts for me." },
    { name: "Hadi — Designer",   quote: "The jam prototype felt surprisingly polished for a weekend build." },
  ] as Testimonial[],
}
export type Profile = typeof profile
