import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
export const Breadcrumbs = ({ trail }: { trail: { label: string; to?: string }[] }) => (
  <nav aria-label="Breadcrumb" className="text-sm text-gray-500 dark:text-gray-400 mb-4">
    <ul className="flex items-center gap-1 flex-wrap">
      {trail.map((t, i) => (
        <li key={t.label} className="flex items-center">
          {t.to ? <Link to={t.to} className="hover:text-gray-900 dark:hover:text-white">{t.label}</Link> : <span className="text-gray-900 dark:text-white">{t.label}</span>}
          {i < trail.length - 1 && <ChevronRight className="mx-2 h-3.5 w-3.5" />}
        </li>
      ))}
    </ul>
  </nav>
)