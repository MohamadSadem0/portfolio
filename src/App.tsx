
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Experience } from './pages/Experience'
import { Teaching } from './pages/Teaching'
import { Contact } from './pages/Contact'
import { Github, Linkedin, FileDown, Sun, Moon } from 'lucide-react'

export default function App() {
  const [dark, setDark] = React.useState(true)
  React.useEffect(() => { const html = document.documentElement; dark ? html.classList.add('dark') : html.classList.remove('dark') }, [dark])

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <a href={`#${to}`} className="px-2 py-1.5 rounded-md text-sm text-gray-300 hover:text-white">{label}</a>
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
        <div className="container py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <div className="size-9 rounded-xl bg-white/10 grid place-items-center"><span className="text-sm">MS</span></div>
            <div className="leading-tight">
              <div className="font-semibold">Mohamad Sadem Serhal</div>
              <div className="text-xs text-gray-400">Junior Full-Stack Developer</div>
            </div>
          </Link>
          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" label="Home" />
            <NavLink to="/projects" label="Projects" />
            <NavLink to="/experience" label="Experience" />
            <NavLink to="/teaching" label="Teaching" />
            <NavLink to="/contact" label="Contact" />
          </nav>
          <div className="flex items-center gap-2">
            <a className="link" href="https://github.com/Mohamadsadem0" target="_blank" rel="noreferrer"><Github className="inline h-4 w-4 mr-1" />GitHub</a>
            <a className="link" href="https://www.linkedin.com/in/mohamad-serhal-721658229" target="_blank" rel="noreferrer"><Linkedin className="inline h-4 w-4 mr-1" />LinkedIn</a>
            <a className="btn btn-outline" href="/portfolio/cv.pdf" download><FileDown className="h-4 w-4 mr-1" />CV</a>
            <button className="btn btn-outline" onClick={() => setDark(d => !d)} aria-label="Toggle theme">{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
          </div>
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/teaching" element={<Teaching />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="border-t border-white/10 mt-12">
        <div className="container py-8 text-xs text-gray-400 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Mohamad Sadem Serhal. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a className="hover:underline" href="https://github.com/Mohamadsadem0" target="_blank" rel="noreferrer">GitHub</a>
            <a className="hover:underline" href="https://www.linkedin.com/in/mohamad-serhal-721658229" target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="hover:underline" href="/portfolio/cv.pdf" download>Download CV</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
