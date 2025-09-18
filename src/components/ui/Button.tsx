
import React from 'react'
type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md'
const base = 'btn'
const variants: Record<Variant, string> = { primary: 'btn-primary', outline: 'btn-outline', ghost: 'btn-ghost' }
const sizes: Record<Size, string> = { sm: 'px-3 py-1.5 text-sm rounded-lg', md: 'px-4 py-2 text-sm rounded-xl' }
export const Button = ({ variant='primary', size='md', className='', asChild=false, children, ...props }:
  React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant; size?: Size; className?: string; asChild?: boolean }) => {
  const cls = [base, variants[variant], sizes[size], className].join(' ')
  if (asChild) { const Comp: any = 'span'; return <Comp className={cls} {...props}>{children}</Comp> }
  return <button className={cls} {...props}>{children}</button>
}
