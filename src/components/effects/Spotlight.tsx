import React from 'react'
export const Spotlight: React.FC<{ className?: string }> = ({ className='' }) => {
  const ref = React.useRef<HTMLDivElement>(null)
  React.useEffect(() => {
    const el = ref.current; if (!el) return
    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100
      el.style.setProperty('--x', x + '%')
      el.style.setProperty('--y', y + '%')
    }
    el.addEventListener('mousemove', onMove)
    return () => el.removeEventListener('mousemove', onMove)
  }, [])
  return <div ref={ref} className={'spotlight absolute inset-0 pointer-events-none ' + className} />
}