
import React from 'react'
import { profile } from '../data/profile'
export const Teaching = () => (
  <main className="container py-10">
    <h1 className="text-2xl font-semibold mb-6">Teaching</h1>
    <div className="grid md:grid-cols-2 gap-6">
      <div className="card p-5">
        <h3 className="text-lg font-semibold mb-2">Curriculum Focus</h3>
        <ul className="list-disc pl-5 text-sm text-gray-300 space-y-1">
          <li>React (TypeScript): components, hooks, routing, state</li>
          <li>Spring Boot 3: REST APIs, security (JWT), services</li>
          <li>Laravel fundamentals and MVC patterns</li>
          <li>Databases: schema design, relationships, indexing</li>
          <li>Git workflows, testing, and Dockerized deployments</li>
        </ul>
      </div>
      <div className="card p-5">
        <h3 className="text-lg font-semibold mb-2">Book a Lesson</h3>
        <p className="text-sm text-gray-300 mb-3">Private sessions for students and junior developers. Flexible hours.</p>
        <div className="flex gap-2">
          <a className="btn btn-primary" href="https://wa.me/96171851054" target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="btn btn-outline" href="mailto:mohamad.sadem@gmail.com">Email</a>
        </div>
      </div>
    </div>
    <div className="mt-6 card p-5">
      <h3 className="text-lg font-semibold mb-2">Recent Feedback</h3>
      <div className="grid md:grid-cols-3 gap-4">
        {profile.testimonials.map(t => (
          <div key={t.name} className="bg-white/5 rounded-xl p-4 border border-white/10">
            <div className="text-gray-300">“{t.quote}”</div>
            <div className="text-xs text-gray-400 mt-2">— {t.name}</div>
          </div>
        ))}
      </div>
    </div>
  </main>
)
