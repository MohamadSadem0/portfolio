import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { profile } from '@/data/profile'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '../components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, ExternalLink } from 'lucide-react'

export default function ProjectDetailsPage() {
  const { slug } = useParams()
  const navigate = useNavigate()

  const project = profile.projects.find(p => p.slug === slug)

  if (!project) {
    return (
      <main>
        <Container>
          <Breadcrumbs trail={[
            { label: 'Home', to: '/' },
            { label: 'Projects', to: '/projects' },
            { label: 'Not Found' }
          ]} />
          <Card>
            <CardContent className="py-10 text-center">
              <p className="text-gray-500">Project not found.</p>
              <button className="btn btn-primary mt-4" onClick={() => navigate(-1)}>
                <ArrowLeft className="mr-2 h-4 w-4" />Go Back
              </button>
            </CardContent>
          </Card>
        </Container>
      </main>
    )
  }

  return (
    <main>
      <Container>
        <Breadcrumbs trail={[
          { label: 'Home', to: '/' },
          { label: 'Projects', to: '/projects' },
          { label: project.name }
        ]} />
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl">{project.name}</CardTitle>
                <span className="text-xs text-gray-500">{project.period}</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>

              <div>
                <h4 className="font-medium mb-2">Highlights</h4>
                <ul className="list-disc pl-5 text-sm text-gray-600 dark:text-gray-300 space-y-1">
                  {project.highlights && project.highlights.length > 0
                    ? project.highlights.map((h: string) => <li key={h}>{h}</li>)
                    : <li className="list-none">—</li>}
                </ul>
              </div>

              <div>
                <h4 className="font-medium mb-2">Tech</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t: string) => <Badge key={t}>{t}</Badge>)}
                </div>
              </div>
            </CardContent>

            {project.links && project.links.length > 0 && (
              <CardFooter className="flex flex-wrap gap-2">
                {project.links.map((l: { label: string; href: string }) => (
                  <a
                    key={l.label}
                    className="btn btn-outline text-sm"
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <ExternalLink className="mr-2 h-3.5 w-3.5" />
                    {l.label}
                  </a>
                ))}
              </CardFooter>
            )}
          </Card>

          <Card className="lg:col-span-1">
            <CardHeader><CardTitle>Project Info</CardTitle></CardHeader>
            <CardContent className="text-sm space-y-3 text-gray-600 dark:text-gray-300">
              <div>
                <div className="text-xs uppercase tracking-wide mb-1">Timeline</div>
                <div>{project.period}</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide mb-1">Role</div>
                <div>Developer</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-wide mb-1">Stack</div>
                <div className="flex flex-wrap gap-2 mt-1">
                  {project.tech.slice(0, 6).map((t: string) => <Badge key={t}>{t}</Badge>)}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </main>
  )
}
