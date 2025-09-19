
import React from "react";
import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  FolderGit2,
  Code2,
  Briefcase,
  GraduationCap,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const profile = {
  name: "Mohamad Sadem Serhal",
  title: "Junior Full‑Stack Developer",
  objective:
    "Junior Full‑Stack Developer with a strong foundation in Spring Boot, Next.js, and modern UI frameworks. Passionate about building responsive, scalable web apps and writing clean, maintainable code.",
  email: "mohamad.sadem@gmail.com",
  phone: "+961 71 851 054",
  github: "https://github.com/Mohamadsadem0",
  linkedin: "https://www.linkedin.com/in/mohamad-serhal-721658229",
  education: [
    { school: "Lebanese International University", degree: "B.Sc. in Computer Science (Expected 2026)", time: "2022 – 2026" },
    { school: "Web Development Bootcamp", degree: "React, Next.js, REST APIs, Deployments", time: "Feb 2024 – Apr 2024" },
  ],
  skills: {
    frontend: ["Next.js (TypeScript)", "React", "MUI", "ShadCN", "Tailwind CSS", "Bootstrap"],
    backend: ["Spring Boot 3 (Java 21)", "Express.js/Node.js", "REST APIs", "JWT Auth", "Laravel"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    languages: ["Java", "JavaScript (ES6+)", "TypeScript", "PHP", "HTML", "CSS"],
    tools: ["Git", "Docker", "Heroku", "Render", "CI/CD Basics", "Agile"],
  },
  projects: [
    {
      name: "Game Jam Prototype (Epic MegaJam)",
      time: "Epic MegaJam",
      description:
        "Participated in Epic MegaJam and built a playable prototype end-to-end with a small team. Focused on the core gameplay loop, level flow, menus/UX, and polish under tight deadlines.",
      links: [],
      tech: ["Prototyping", "Gameplay Loop", "Level Design", "Team Collaboration"],
    },
    {
      name: "ShopiiShop",
      time: "Aug 2024 – Feb 2025",
      description:
        "Multi‑vendor eCommerce platform with Next.js (TS) frontend and Spring Boot 3 backend. Implemented JWT auth, RESTful APIs, and real‑time socket features; Dockerized services and deployed on Oracle VM; responsive UI with Tailwind.",
      links: [],
      tech: ["Next.js", "TypeScript", "Spring Boot 3", "JWT", "WebSockets", "Docker", "Tailwind CSS"],
    },
  ],
  experience: [
    {
      company: "Private Tutoring",
      role: "Programming & Web Development Teacher",
      time: "Ongoing",
      bullets: [
        "Teach React (TypeScript), Spring Boot, and Laravel through a project‑based curriculum.",
        "Cover databases (PostgreSQL/MySQL/MongoDB): schema design, relationships, indexing, and hands‑on querying.",
        "Coach students on Git workflows, REST API design, testing, and deployments (Docker/Heroku/Render)."
      ],
    },
    {
      company: "Independent",
      role: "Game Developer",
      time: "Ongoing",
      bullets: [
        "Epic MegaJam participant; delivered a playable prototype on a tight timeline.",
        "Owned gameplay loop, level flow, and UX polish; coordinated tasks and version control.",
        "Iterated quickly from playtesting feedback to improve feel and onboarding."
      ],
    },
    {
      company: "Dahboul Computer",
      role: "Full‑Stack Developer",
      time: "Oct 2023 – Mar 2024",
      bullets: [
        "Built full‑stack apps using React and Spring Boot.",
        "Implemented secure JWT authentication and REST APIs.",
        "Containerized deployments with Docker; collaborated cross‑functionally.",
      ],
    },
  ],
  languagesKnown: [
    { name: "Arabic", level: "Native" },
    { name: "English", level: "Intermediate" },
    { name: "French", level: "Intermediate" },
  ],
};

const fade = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

function SectionHeader({ icon: Icon, title, id }: { icon: any; title: string; id: string }) {
  return (
    <div id={id} className="flex items-center gap-3 mb-6">
      <div className="p-2 rounded-xl border bg-background"><Icon className="h-5 w-5" /></div>
      <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
    </div>
  );
}

function SocialIcon({ href, label, Icon }: { href: string; label: string; Icon: any }) {
  return (
    <Button asChild variant="ghost" className="gap-2">
      <a href={href} target="_blank" rel="noreferrer">
        <Icon className="h-4 w-4" />
        <span className="hidden sm:inline">{label}</span>
      </a>
    </Button>
  );
}

function TechBadges({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <Badge key={t} className="text-[0.72rem] py-1 px-2 rounded-lg">{t}</Badge>
      ))}
    </div>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-sm text-muted-foreground hover:text-foreground transition">
      {children}
    </a>
  );
}

export default function Portfolio() {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    const html = document.documentElement;
    if (dark) html.classList.add("dark"); else html.classList.remove("dark");
  }, [dark]);

  return (
    <div className="min-h-screen bg-background text-foreground" id="main">
      <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-[color:var(--border)]">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-primary/10 grid place-items-center">
              <Code2 className="h-4 w-4 text-primary" />
            </div>
            <div className="leading-tight">
              <div className="font-semibold">{profile.name}</div>
              <div className="text-xs text-muted-foreground">{profile.title}</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#experience">Experience</NavLink>
            <NavLink href="#education">Education</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </nav>
          <div className="flex items-center gap-1">
            <SocialIcon href={profile.github} label="GitHub" Icon={Github} />
            <SocialIcon href={profile.linkedin} label="LinkedIn" Icon={Linkedin} />
            <Button variant="ghost" className="size-9 p-0" onClick={() => setDark((d) => !d)} aria-label="Toggle theme">
              {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </header>

      <section className="max-w-6xl mx-auto px-4 py-12">
        <motion.div initial={fade.hidden} animate={fade.show} className="grid md:grid-cols-5 gap-6">
          <Card className="md:col-span-3">
            <CardHeader className="pb-2"><CardTitle className="text-2xl md:text-3xl">Hi, I’m {profile.name.split(" ")[0]} 👋</CardTitle></CardHeader>
            <CardContent className="space-y-4">
              <span className="badge rounded-lg">Open to Full‑Stack roles & internships</span>
              <p className="text-muted-foreground leading-relaxed">{profile.objective}</p>
              <div className="flex flex-wrap gap-2 pt-2">
                <Badge variant="secondary" className="rounded-lg">Next.js (TS)</Badge>
                <Badge variant="secondary" className="rounded-lg">Spring Boot 3</Badge>
                <Badge variant="secondary" className="rounded-lg">PostgreSQL</Badge>
                <Badge variant="secondary" className="rounded-lg">Docker</Badge>
              </div>
            </CardContent>
            <CardFooter className="flex gap-2">
              <Button asChild><a href={`mailto:${profile.email}`}><Mail className="mr-2 h-4 w-4" />Contact Me</a></Button>
              <Button asChild variant="outline"><a href={profile.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />View GitHub</a></Button>
            </CardFooter>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader><CardTitle>Quick info</CardTitle></CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex items-center gap-3"><Mail className="h-4 w-4" /><a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
              <div className="flex items-center gap-3"><Phone className="h-4 w-4" /><a className="hover:underline" href={`tel:${profile.phone.replace(/\\s/g, "")}`}>{profile.phone}</a></div>
              <div className="flex items-center gap-3"><Github className="h-4 w-4" /><a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer">github.com/Mohamadsadem0</a></div>
              <div className="flex items-center gap-3"><Linkedin className="h-4 w-4" /><a className="hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn Profile</a></div>
              <div className="flex items-center gap-3"><Globe className="h-4 w-4" />Based in Lebanon · Remote‑friendly</div>
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-4 pb-6">
        <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-xl border bg-background"><Code2 className="h-5 w-5" /></div><h2 className="text-xl md:text-2xl font-semibold tracking-tight">About</h2></div>
        <motion.p initial={fade.hidden} whileInView={fade.show} viewport={{ once: true }} className="text-muted-foreground leading-relaxed">
          I enjoy turning ideas into reliable products. My current focus is on building modern full‑stack apps with Next.js (TypeScript) and Spring Boot 3, integrating clean REST APIs, solid auth, and responsive UI systems. I also tutor college students in programming and web development (React, Spring Boot, Laravel, databases), and I’m one semester ahead toward completing my bachelor. I’ve also participated in Epic MegaJam as a game developer.
        </motion.p>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-xl border bg-background"><FolderGit2 className="h-5 w-5" /></div><h2 className="text-xl md:text-2xl font-semibold tracking-tight">Skills</h2></div>
        <Tabs defaultValue="frontend" className="w-full">
          <TabsList className="flex flex-wrap gap-2">
            <TabsTrigger value="frontend">Frontend</TabsTrigger>
            <TabsTrigger value="backend">Backend</TabsTrigger>
            <TabsTrigger value="databases">Databases</TabsTrigger>
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>
          <TabsContent value="frontend"><TechBadges items={profile.skills.frontend} /></TabsContent>
          <TabsContent value="backend"><TechBadges items={profile.skills.backend} /></TabsContent>
          <TabsContent value="databases"><TechBadges items={profile.skills.databases} /></TabsContent>
          <TabsContent value="languages"><TechBadges items={profile.skills.languages} /></TabsContent>
          <TabsContent value="tools"><TechBadges items={profile.skills.tools} /></TabsContent>
        </Tabs>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-xl border bg-background"><ExternalLink className="h-5 w-5" /></div><h2 className="text-xl md:text-2xl font-semibold tracking-tight">Projects</h2></div>
        <div className="grid md:grid-cols-2 gap-6">
          {profile.projects.map((p) => (
            <Card key={p.name} className="group">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{p.name}</CardTitle>
                  <span className="text-xs text-muted-foreground">{p.time}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{p.description}</p>
                <TechBadges items={p.tech} />
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="experience" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-xl border bg-background"><Briefcase className="h-5 w-5" /></div><h2 className="text-xl md:text-2xl font-semibold tracking-tight">Experience</h2></div>
        <div className="space-y-4">
          {profile.experience.map((e) => (
            <Card key={`${e.company}-${e.role}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{e.role} · {e.company}</CardTitle>
                  <span className="text-xs text-muted-foreground">{e.time}</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1">
                  {e.bullets.map((b) => (<li key={b}>{b}</li>))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="education" className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center gap-3 mb-6"><div className="p-2 rounded-xl border bg-background"><GraduationCap className="h-5 w-5" /></div><h2 className="text-xl md:text-2xl font-semibold tracking-tight">Education</h2></div>
        <div className="grid md:grid-cols-2 gap-6">
          {profile.education.map((ed) => (
            <Card key={ed.school}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-base">{ed.school}</CardTitle>
                  <span className="text-xs text-muted-foreground">{ed.time}</span>
                </div>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">{ed.degree}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-4 py-12">
        <Card>
          <CardContent className="py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold">Let’s build something together</h3>
              <p className="text-sm text-muted-foreground mt-1">I’m open to full‑time roles, internships, and freelance projects.</p>
            </div>
            <div className="flex gap-2">
              <Button asChild><a href={`mailto:${profile.email}`}><Mail className="mr-2 h-4 w-4" />Email</a></Button>
              <Button asChild variant="outline"><a href={`tel:${profile.phone.replace(/\\s/g, "")}`}><Phone className="mr-2 h-4 w-4" />Call</a></Button>
            </div>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-[color:var(--border)]">
        <div className="max-w-6xl mx-auto px-4 py-8 text-xs text-muted-foreground flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer"><Github className="inline h-3.5 w-3.5 mr-1" />GitHub</a>
            <a className="hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="inline h-3.5 w-3.5 mr-1" />LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
