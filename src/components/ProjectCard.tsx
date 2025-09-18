import React from 'react'
import { Link } from 'react-router-dom'
import { ExternalLink, Star } from 'lucide-react'
import { Project } from '../types'
import { Badge } from './ui/badge'
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card'
import { Tilt } from './Tilt'
export const ProjectCard = ({ p }: { p: Project }) => (
  <Tilt className="group">
    <Card>
      <CardHeader><div className="flex items-center justify-between"><CardTitle className="text-lg flex items-center gap-2">{p.name}<Star className="h-4 w-4 text-yellow-500/80 hidden group-hover:inline" /></CardTitle><span className="text-xs text-gray-500 dark:text-gray-400">{p.period}</span></div></CardHeader>
      <CardContent className="space-y-4"><p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{p.tagline}</p><div className="flex flex-wrap gap-2">{p.tech.map(t => <Badge key={t}>{t}</Badge>)}</div></CardContent>
      <CardFooter className="flex items-center justify-between"><Link to={`/projects/${p.slug}`} className="btn btn-primary">View details</Link>
        <div className="flex gap-2">{(p.links || []).map(l => <a key={l.label} className="btn btn-outline text-sm" href={l.href} target="_blank" rel="noreferrer"><ExternalLink className="mr-2 h-3.5 w-3.5" />{l.label}</a>)}</div>
      </CardFooter>
    </Card>
  </Tilt>
)