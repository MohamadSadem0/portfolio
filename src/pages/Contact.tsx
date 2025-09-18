
import React from 'react'
import { profile } from '../data/Profile'
export const Contact = () => (
  <main className="container py-10">
    <h1 className="text-2xl font-semibold mb-6">Contact</h1>
    <div className="card p-6 grid md:grid-cols-2 gap-6">
      <div className="space-y-3 text-sm">
        <div><span className="font-medium">Email:</span> <a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
        <div><span className="font-medium">Phone:</span> <a className="hover:underline" href="tel:+96171851054">+961 71 851 054</a></div>
        <div><span className="font-medium">CV:</span> <a className="hover:underline" href="/portfolio/cv.pdf" download>Download CV</a></div>
      </div>
      <form className="space-y-3">
        <input placeholder="Your name" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
        <input placeholder="Your email" type="email" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
        <input placeholder="Subject" className="w-full rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
        <textarea placeholder="Message" className="w-full min-h-[120px] rounded-xl border border-white/10 bg-white/5 px-3 py-2" />
        <div className="flex gap-2">
          <a className="btn btn-primary" href={`mailto:${profile.email}`}>Send via Email</a>
          <a className="btn btn-outline" href="https://wa.me/96171851054" target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </form>
    </div>
  </main>
)
