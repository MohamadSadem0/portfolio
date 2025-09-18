
import * as React from 'react'
import { cn } from '../utils'

type Variant = 'primary' | 'outline' | 'ghost'
type Size = 'sm' | 'md'
const base = 'btn'
const variants: Record<Variant, string> = { primary: 'btn-primary', outline: 'btn-outline', ghost: 'btn-ghost' }
const sizes: Record<Size, string> = { sm: 'px-3 py-1.5 text-sm rounded-lg', md: 'px-4 py-2 text-sm rounded-xl' }

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  asChild?: boolean
}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className='', variant='primary', size='md', asChild=false, children, ...props }, ref) => {
    const cls = cn(base, variants[variant], sizes[size], className)
    if (asChild) { return <span className={cls} {...props as any}>{children}</span> }
    return <button ref={ref} className={cls} {...props}>{children}</button>
  }
)
Button.displayName = 'Button'
