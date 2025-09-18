import React from 'react'
import { Container } from '../components/Container'
import { SectionHeader } from '../components/SectionHeader'
import { profile } from '../data/profile'
import { Badge } from '../components/ui/Badge'
import { Card, CardHeader, CardTitle, CardContent } from '../components/ui/Card'
export default function EducationPage() {
  return (
    <main>
      <Container>
        <SectionHeader title="Education" id="education" icon={() => <span className="font-bold">∎</span>} />
        <div className="grid md:grid-cols-2 gap-6">
          {profile.education.map(ed => (
            <Card key={ed.school}><CardHeader><div className="flex items-center justify-between"><CardTitle className="text-base">{ed.school}</CardTitle><span className="text-xs text-gray-500">{ed.time || ''}</span></div></CardHeader><CardContent className="text-sm text-gray-600 dark:text-gray-300">{ed.degree}{ed.note ? <div className="mt-1"><Badge>🎓 {ed.note}</Badge></div> : null}</CardContent></Card>
          ))}
        </div>
      </Container>
    </main>
  )
}