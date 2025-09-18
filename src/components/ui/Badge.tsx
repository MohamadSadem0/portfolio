import * as React from 'react'

export function Badge({
  className = '',
  variant = 'default',
  children,
}: { className?: string; variant?: 'default'|'secondary'; children: React.ReactNode }) {
  const styles = variant === 'secondary' ? 'bg-white/10' : ''
  return <span className={['badge', styles, className].join(' ')}>{children}</span>
}
