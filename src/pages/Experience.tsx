
import React from 'react'
import { profile } from '../data/profile'
export const Experience = () => (
  <main className="container py-10">
    <h1 className="text-2xl font-semibold mb-6">Experience</h1>
    <div className="space-y-4">
      {profile.experience.map(e => (
        <div key={e.company + e.role} className="card">
          <div className="card-header"><div className="flex items-center justify-between"><h3 className="card-title text-base">{e.role} · {e.company}</h3><span className="text-xs text-gray-400">{e.time}</span></div></div>
          <div className="card-content"><ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">{e.bullets.map(b => <li key={b}>{b}</li>)}</ul></div>
        </div>
      ))}
    </div>
  </main>
)
