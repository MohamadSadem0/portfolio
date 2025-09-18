import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Github, Linkedin, Code2, Download, Sun, Moon } from 'lucide-react'
import { Container } from './Container'
import { profile } from '../data/Profile'
export const Navbar = () => {
  const location = useLocation()
  const [dark, setDark] = React.useState(true)
  React.useEffect(() => { const html = document.documentElement; if (dark) html.classList.add('dark'); else html.classList.remove('dark') }, [dark])
  const nav = [
    { to: '/', label: 'Home' }, { to: '/projects', label: 'Projects' },
    { to: '/experience', label: 'Experience' }, { to: '/education', label: 'Education' }, { to: '/contact', label: 'Contact' },
  ]
  const isActive = (to: string, current: string) => current === to || current.startsWith(to + '/')
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-black/30 border-b border-black/5 dark:border-white/10">
      <Container>
        <div className="py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="size-9 rounded-xl bg-blue-600/10 grid place-items-center"><Code2 className="h-4 w-4 text-blue-600" /></div>
            <div className="leading-tight"><div className="font-semibold">{profile.name}</div><div className="text-xs text-gray-500 dark:text-gray-400">{profile.title}</div></div>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            {nav.map(n => <NavLink key={n.to} to={n.to} className={isActive(n.to, location.pathname) ? 'px-2 py-1.5 rounded-md text-sm bg-blue-600/10 text-gray-900 dark:text-white' : 'px-2 py-1.5 rounded-md text-sm text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'}>{n.label}</NavLink>)}
          </nav>
          <div className="flex items-center gap-2">
            <a className="btn btn-outline gap-2" href="/cv.pdf" download><Download className="h-4 w-4" />CV</a>
            <button className="btn btn-ghost size-9 p-0" aria-label="Toggle theme" onClick={() => setDark(d => !d)}>{dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button>
            <a className="link" href={profile.github} target="_blank" rel="noreferrer"><Github className="inline h-4 w-4 mr-1" />GitHub</a>
            <a className="link" href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin className="inline h-4 w-4 mr-1" />LinkedIn</a>
          </div>
        </div>
      </Container>
    </header>
  )
}