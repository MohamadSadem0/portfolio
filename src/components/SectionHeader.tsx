import React from 'react'
export const SectionHeader = ({ icon: Icon, title, id }: { icon: any; title: string; id: string }) => (
  <div id={id} className="flex items-center gap-3 mb-6">
    <div className="p-2 rounded-xl border bg-white/60 dark:bg-white/10"><Icon className="h-5 w-5" /></div>
    <h2 className="text-xl md:text-2xl font-semibold tracking-tight">{title}</h2>
  </div>
)