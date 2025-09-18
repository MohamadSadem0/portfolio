
import React from 'react'
import { profile } from '../data/Profile'
import { Badge } from '../components/ui/badge'

export const Projects = () => {
  const [q, setQ] = React.useState('')
  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase(); if (!s) return profile.projects
    return profile.projects.filter(p => [p.name, p.tagline, p.description, p.tech.join(' ')].join(' ').toLowerCase().includes(s))
  }, [q])

  return (
    <main className="container py-10">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Projects</h1>
        <input value={q} onChange={e => setQ(e.target.value)} placeholder="Search..." className="rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map(p => (
          <div key={p.slug} className="card group">
            <div className="card-header"><div className="flex items-center justify-between"><h3 className="card-title">{p.name}</h3><span className="text-xs text-gray-400">{p.period}</span></div></div>
            <div className="card-content space-y-3"><p className="text-gray-300">{p.description}</p><div className="flex flex-wrap gap-2">{p.tech.map(t => <Badge key={t}>{t}</Badge>)}</div></div>
            {p.highlights?.length ? <div className="card-footer"><ul className="list-disc pl-5 text-sm text-gray-400 space-y-1">{p.highlights.map(h => <li key={h}>{h}</li>)}</ul></div> : null}
          </div>
        ))}
      </div>
    </main>
  )
}
