import * as React from 'react'

type Ctx = { value: string; setValue: (v: string) => void }
const TabsCtx = React.createContext<Ctx | null>(null)

export const Tabs = ({ defaultValue, children, className = '' }:
  { defaultValue: string; children: React.ReactNode; className?: string }) => {
  const [value, setValue] = React.useState(defaultValue)
  return <TabsCtx.Provider value={{ value, setValue }}>
    <div className={className}>{children}</div>
  </TabsCtx.Provider>
}

export const TabsList = ({ children, className = '' }:
  { children: React.ReactNode; className?: string }) =>
  <div className={['flex flex-wrap gap-2', className].join(' ')}>{children}</div>

export const TabsTrigger = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const ctx = React.useContext(TabsCtx)!
  const active = ctx.value === value
  return (
    <button
      onClick={() => ctx.setValue(value)}
      className={[
        'px-3 py-1.5 rounded-lg text-sm border border-[color:var(--border)] transition',
        active ? 'bg-white/10' : 'hover:bg-white/5',
      ].join(' ')}
    >
      {children}
    </button>
  )
}

export const TabsContent = ({ value, children }: { value: string; children: React.ReactNode }) => {
  const ctx = React.useContext(TabsCtx)!
  if (ctx.value !== value) return null
  return <div className="mt-4">{children}</div>
}
