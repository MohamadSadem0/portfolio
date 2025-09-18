import React from 'react'
import { Project } from '../types'
import { ProjectCard } from './ProjectCard'
export const ProjectGrid = ({ items }: { items: Project[] }) => (
  <div className="grid md:grid-cols-2 gap-6">{items.map(p => <ProjectCard key={p.slug} p={p} />)}</div>
)