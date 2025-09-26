import React from 'react'
import { motion } from 'framer-motion'
export const Avatar = ({ src='/portfolio/profile.jpg', alt='Profile photo', size=200 }: { src?: string; alt?: string; size?: number }) => {
  const [imgSrc, setImgSrc] = React.useState(src)
  const fallback = '/portfolio/profile.jpg'
  return (
    <motion.div className="relative" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-blue-500 via-indigo-500 to-cyan-400 opacity-60 blur-2xl" aria-hidden />
      <img src={imgSrc} onError={() => setImgSrc(fallback)} alt={alt} width={size} height={size} className="relative rounded-full ring-4 ring-white/60 dark:ring-white/20 shadow-soft object-cover" style={{ aspectRatio: '1/1' }} />
    </motion.div>
  )
}