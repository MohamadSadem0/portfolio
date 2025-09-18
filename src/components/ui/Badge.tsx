
import React from 'react'
export const Badge = ({ className='', children }: { className?: string; children: React.ReactNode }) => <span className={['badge', className].join(' ')}>{children}</span>
