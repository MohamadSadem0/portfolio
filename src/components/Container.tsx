import * as React from 'react'
export const Container = ({ children, className = '' }:{ children: React.ReactNode; className?: string }) =>
  <div className={['max-w-6xl mx-auto px-4', className].join(' ')}>{children}</div>
