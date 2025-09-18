import React from 'react'
export const Blob = ({ className='' }: { className?: string }) => (
  <div className={'absolute -z-10 blur-3xl opacity-40 bg-gradient-to-tr from-blue-500/40 via-indigo-500/30 to-cyan-400/30 rounded-full animate-blob ' + className} />
)