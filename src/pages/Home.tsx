import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, FolderGit2 } from 'lucide-react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { profile, projects } from '../data/profile'
import { Badge } from '../components/ui/Badge'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/Card'
import { ProjectGrid } from '../components/ProjectGrid'
import { Avatar } from '../components/Avatar'
import { Spotlight } from '../components/effects/Spotlight'
import { Blob } from '../components/effects/Blob'
import { Tilt } from '../components/Tilt'
const fade = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.45 } } }
export default function HomePage() {
  return (
    <main className="relative">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Spotlight />
        <Blob className="w-[50vw] h-[50vw] top-[-10%] left-[-10%]" />
        <Blob className="w-[40vw] h-[40vw] bottom-[-15%] right-[-10%]" />
      </div>
      <Container>
        <section className="py-12">
          <motion.div initial={fade.hidden} animate={fade.show} className="grid md:grid-cols-5 gap-6 items-center">
            <div className="md:col-span-3">
              <Card>
                <CardHeader className="pb-2"><CardTitle className="text-2xl md:text-3xl">Hi, I’m {profile.first} 👋</CardTitle></CardHeader>
                <CardContent className="space-y-4">
                  <span className="badge">Open to Full-Stack roles & internships</span>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{profile.objective}</p>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    I’m a <strong>programming & web development teacher</strong> (React, Spring Boot, Laravel, databases) and a <strong>game developer</strong> who participated in <em>Epic MegaJam</em>. I’m also <strong>one semester ahead</strong> toward completing my bachelor.
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2"><Badge>React (TS)</Badge><Badge>Spring Boot 3</Badge><Badge>Laravel</Badge><Badge>PostgreSQL</Badge><Badge>Docker</Badge></div>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <a className="btn btn-primary" href={`mailto:${profile.email}`}><Mail className="mr-2 h-4 w-4" />Contact Me</a>
                  <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />View GitHub</a>
                  <a className="btn btn-outline" href="/cv.pdf" download>Download CV</a>
                </CardFooter>
              </Card>
            </div>
            <div className="md:col-span-2 flex justify-center">
              <Tilt className="p-2 rounded-[2rem] bg-white/10 dark:bg-white/5 border border-white/10 shadow-soft">
                <Avatar src={profile.avatarSrc} size={240} />
              </Tilt>
            </div>
          </motion.div>
        </section>

        <section className="py-10">
          <SectionHeader icon={FolderGit2} title="Featured Projects" id="projects" />
          <ProjectGrid items={projects.slice(0, 3)} />
        </section>
      </Container>
    </main>
  )
}