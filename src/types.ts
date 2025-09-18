export type LinkObj = { label: string; href: string };
export type Project = { slug: string; name: string; period: string; tagline: string; description: string; tech: string[]; links?: LinkObj[]; highlights?: string[]; };
export type Experience = { company: string; role: string; time: string; bullets: string[]; };
export type Education = { school: string; degree: string; time?: string; note?: string };