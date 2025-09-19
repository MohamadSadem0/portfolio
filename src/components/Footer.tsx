import React from 'react'
import { Container } from './Container'
import { profile } from '../data/profile'
export const Footer = () => (
  <footer className="border-t border-black/5 dark:border-white/10">
    <Container>
      <div className="py-8 text-xs text-gray-500 dark:text-gray-400 flex flex-col md:flex-row gap-2 md:items-center md:justify-between">
        <div>© {new Date().getFullYear()} {profile.name}. All rights reserved.</div>
        <div className="flex items-center gap-3">
          <a className="hover:underline" href="/cv.pdf" download>Download CV</a>
          <a className="hover:underline" href={profile.github} target="_blank" rel="noreferrer">GitHuba</a>
          <a className="hover:underline" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </Container>
  </footer>
)