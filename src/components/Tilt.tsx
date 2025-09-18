import React from 'react'
export const Tilt: React.FC<React.HTMLAttributes<HTMLDivElement>> = ({ children, className='', ...props }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  const handle = (e: React.MouseEvent) => {
    const el = ref.current; if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left; const y = e.clientY - rect.top
    const rx = ((y - rect.height / 2) / rect.height) * -10
    const ry = ((x - rect.width / 2) / rect.width) * 10
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`
  }
  const reset = () => { const el = ref.current; if (el) el.style.transform = 'perspective(1000px) rotateX(0) rotateY(0)' }
  return <div ref={ref} className={'tilt transition-transform duration-200 ' + className} onMouseMove={handle} onMouseLeave={reset} {...props}>{children}</div>
}