
import React from 'react'
export default function App() {
  React.useEffect(() => { document.documentElement.classList.add('dark') }, [])
  return (
    <main className="container py-12 space-y-6">
      <section>
        <h1 className="text-3xl font-semibold">Mohamad Sadem Serhal</h1>
        <p className="text-sm text-gray-500">Junior Full-Stack Developer</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">About</h2>
        <p className="text-gray-300">Programming & Web Development Teacher (React, Spring Boot, Laravel, databases). Game developer — participated in Epic MegaJam. One semester ahead toward completing my bachelor.</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Links</h2>
        <ul className="list-disc pl-6 text-blue-300">
          <li><a className="underline" href="https://github.com/Mohamadsadem0" target="_blank">GitHub</a></li>
        </ul>
      </section>
    </main>
  )
}
