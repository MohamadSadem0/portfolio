
import React from 'react'
import { motion } from 'framer-motion'
import { profile } from '../data/Profile'
import { Badge } from '../components/ui/badge'
import { Mail, Github } from 'lucide-react'
import { Link } from 'react-router-dom'

const fade = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export const Home = () => {
  return (
    <main className="relative">
      <section className="container py-12">
        <motion.div initial={fade.hidden} animate={fade.show} className="grid md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3 card">
            <div className="card-header pb-2"><h1 className="card-title text-3xl">Hi, I’m {profile.first} 👋</h1></div>
            <div className="card-content space-y-4">
              <span className="badge">Open to Full-Stack roles & internships</span>
              <p className="text-gray-300 leading-relaxed">{profile.objective}</p>
              <p className="text-gray-300 leading-relaxed">
                I’m a <strong>programming & web development teacher</strong> (React, Spring Boot, Laravel, databases) and a <strong>game developer</strong> who participated in <em>Epic MegaJam</em>. I’m also <strong>one semester ahead</strong> toward completing my bachelor.
              </p>
              <div className="flex flex-wrap gap-2 pt-2"><Badge>React (TS)</Badge><Badge>Spring Boot 3</Badge><Badge>Laravel</Badge><Badge>PostgreSQL</Badge><Badge>Docker</Badge></div>
            </div>
            <div className="card-footer flex gap-2">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}><Mail className="mr-2 h-4 w-4" />Email me</a>
              <a className="btn btn-outline" href={profile.github} target="_blank" rel="noreferrer"><Github className="mr-2 h-4 w-4" />GitHub</a>
              <Link className="btn btn-outline" to="/projects">See projects</Link>
            </div>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <div className="p-1.5 rounded-[2rem] bg-white/10 border border-white/10 shadow-soft">
              <img src={profile.avatarSrc} alt="Profile" className="rounded-[1.7rem] w-64 h-64 object-cover" onError={(e) => { (e.target as HTMLImageElement).src = '/portfolio/favicon.svg' }} />
            </div>
          </div>
        </motion.div>
      </section>

      <section className="container py-10">
        <h2 className="text-xl font-semibold mb-4">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-4">
          {profile.testimonials.map(t => (
            <div key={t.name} className="card p-5">
              <p className="text-gray-300">“{t.quote}”</p>
              <div className="mt-3 text-sm text-gray-400">— {t.name}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
