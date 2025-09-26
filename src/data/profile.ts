export type Skill = {
  /** Name of the skill */
  name: string;
  /** Lucide icon name for the skill.  See https://lucide.dev/icons */
  icon: string;
};

export type Project = {
  slug: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
};

export type Profile = {
  name: string;
  title: string;
  bio: string;
  github: string;
  linkedin: string;
  email: string;
  /** Primary phone number for calls or messaging */
  phone: string;
  resume?: string;
  skills: Skill[];
};

// Author information and meta data used throughout the site.  Feel free
// to update these values with your own details.  The `icon` field
// corresponds to an icon name in lucide-react (e.g. Code, Database).
export const profile: Profile = {
  // Personal details used throughout the site.  These values were derived
  // from your résumé and reflect your current role as a multi‑disciplinary developer.
  name: 'Mohamad Sadem Serhal',
  title: 'Backend & Full‑Stack Developer | Java Engineer | Private Tutor & Mentor',
  // Concise bio that conveys your focus on scalable backend services and polished user interfaces.
  bio:
    `Backend web developer specialising in Spring Boot and Java with hands‑on experience building ` +
    `secure, scalable web applications. Passionate about crafting intuitive front‑end experiences with ` +
    `React, Next.js and modern CSS frameworks, and bridging the gap between design and development. ` +
    `Beyond coding, I offer personalised tutoring covering programming fundamentals, web development and ` +
    `Java — empowering the next generation of developers through one‑on‑one mentorship.`,
  github: 'https://github.com/Mohamadsadem0',
  linkedin: 'https://www.linkedin.com/in/mohamad-serhal-721658229',
  email: 'mailto:mohamad.sadem@gmail.com',
  // Primary phone number formatted for international dialing.  The tel: link
  // will strip spaces but we keep them here for readability.
  phone: '+961 71 851 054',
  // You can link to your résumé PDF here if desired; leave undefined if not available.
  resume: undefined,
  // A comprehensive list of skills with corresponding lucide icons.  Icons are mapped in
  // src/pages/Home.tsx; if an icon is not found, it falls back to the Code icon.
  skills: [
    { name: 'Java', icon: 'Coffee' },
    { name: 'Spring Boot', icon: 'Leaf' },
    { name: 'Next.js', icon: 'Package' },
    { name: 'React', icon: 'Atom' },
    { name: 'TypeScript', icon: 'Type' },
    { name: 'Tailwind CSS', icon: 'Feather' },
    { name: 'Bootstrap /MUI', icon: 'LayoutGrid' },
    { name: 'Docker & DevOps', icon: 'Boxes' },
    { name: 'Databases (SQL/NoSQL)', icon: 'Database' },
    { name: 'Git & Version Control', icon: 'GitBranch' },
    { name: 'Game Dev (Unreal/C++)', icon: 'Gamepad2' },
    { name: 'Teaching & Mentoring', icon: 'Users' },
  ],
};