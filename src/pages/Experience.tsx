import React from 'react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/profile'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
export default function ExperiencePage() {
  return (
    <main>
      <Container>
        <SectionHeader title="Experience" id="experience" icon={() => <span className="font-bold">∎</span>} />
        <div className="space-y-4">
          {profile.experience.map(e => (
            <Card key={`${e.company}-${e.role}`}>
              <CardHeader><div className="flex items-center justify-between"><CardTitle className="text-base">{e.role} · {e.company}</CardTitle><span className="text-xs text-gray-500">{e.time}</span></div></CardHeader>
              <CardContent><ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">{e.bullets.map(b => <li key={b}>{b}</li>)}</ul></CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </main>
  )
}