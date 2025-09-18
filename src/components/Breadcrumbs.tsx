import * as React from 'react'
type Item = { label: string; to?: string }
export function Breadcrumbs({ trail }: { trail: Item[] }) {
  return (
    <nav aria-label="breadcrumb" className="text-sm text-gray-400 mb-4">
      {trail.map((t, i) => (
        <span key={i}>
          {t.to ? <a className="hover:text-white" href={t.to}>{t.label}</a> : <span className="text-white">{t.label}</span>}
          {i < trail.length - 1 && <span className="mx-2">/</span>}
        </span>
      ))}
    </nav>
  )
}
