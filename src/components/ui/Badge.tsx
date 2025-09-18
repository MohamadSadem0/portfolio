
import * as React from 'react'
import { cn } from '../utils'

export function Badge({ className='', variant='default', children }:{ className?: string; variant?: 'default'|'secondary'; children: React.ReactNode }) {
  const base = 'badge'
  const styles = variant === 'secondary' ? 'bg-white/10' : ''
  return <span className={cn(base, styles, className)}>{children}</span>
}
