import React from 'react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/profile'
export default function ContactPage() {
  return (
    <main>
      <Container>
        <SectionHeader title="Contact" id="contact" icon={() => <span className="font-bold">∎</span>} />
        <div className="card p-6 grid md:grid-cols-2 gap-6">
          <div className="space-y-3 text-sm">
            <div><span className="font-medium">Email:</span> <a className="hover:underline" href={`mailto:${profile.email}`}>{profile.email}</a></div>
            <div><span className="font-medium">Phone:</span> <a className="hover:underline" href={`tel:${profile.phone.replace(' ', '')}`}>{profile.phone}</a></div>
            <div><span className="font-medium">CV:</span> <a className="hover:underline" href="/cv.pdf" download>Download CV</a></div>
          </div>
          <form className="space-y-3">
            <input placeholder="Your name" className="w-full rounded-xl border px-3 py-2 bg-white/70 dark:bg-white/10" />
            <input placeholder="Your email" type="email" className="w-full rounded-xl border px-3 py-2 bg-white/70 dark:bg-white/10" />
            <input placeholder="Subject" className="w-full rounded-xl border px-3 py-2 bg-white/70 dark:bg-white/10" />
            <textarea placeholder="Message" className="w-full min-h-[120px] rounded-xl border px-3 py-2 bg-white/70 dark:bg-white/10" />
            <div className="flex gap-2">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Send via Email</a>
              <a className="btn btn-outline" href={profile.linkedin} target="_blank" rel="noreferrer">Message on LinkedIn</a>
            </div>
          </form>
        </div>
      </Container>
    </main>
  )
}