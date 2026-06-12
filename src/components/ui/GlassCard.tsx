import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface GlassCardProps {
  children: ReactNode
  className?: string
  hover?: boolean
  /** Extra motion props forwarded to the wrapper */
  motionProps?: Record<string, unknown>
}

/**
 * Raised-tier glassmorphism card.
 *
 * Spec (DESIGN.md):
 *  - bg-surface-container/60, backdrop-blur-xl, border border-white/10
 *  - Hover: scale 1.02, shadow-lg shadow-primary/10
 *  - Transition: 300ms ease-out
 */
export default function GlassCard({
  children,
  className = '',
  hover = true,
  motionProps,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      whileHover={hover ? { scale: 1.02 } : undefined}
      className={`rounded-xl bg-surface-container/60 backdrop-blur-xl border border-white/10 p-6 transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-primary/10 ${className}`}
      {...motionProps}
    >
      {children}
    </motion.div>
  )
}
