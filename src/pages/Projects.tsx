import React from 'react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { projects } from '../data/profile'
import { ProjectGrid } from '../components/ProjectGrid'
export default function ProjectsPage() {
  const [q, setQ] = React.useState('')
  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase(); if (!s) return projects
    return projects.filter(p => [p.name, p.tagline, p.description, p.tech.join(' ')].join(' ').toLowerCase().includes(s))
  }, [q])
  return (
    <main>
      <Container>
        <SectionHeader title="Projects" id="projects" icon={() => <span className="font-bold">∎</span>} />
        <div className="mb-6"><input value={q} onChange={e => setQ(e.target.value)} placeholder="Search projects..." className="w-full md:max-w-sm rounded-xl border px-3 py-2 bg-white/70 dark:bg-white/10" /></div>
        <ProjectGrid items={filtered} />
      </Container>
    </main>
  )
}