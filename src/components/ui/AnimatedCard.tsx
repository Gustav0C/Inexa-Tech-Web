import type { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  /** Stagger index (0-based) — drives the entrance delay */
  index?: number
}

/**
 * GlassCard wrapper with Framer Motion whileHover + whileInView.
 * Stagger delay = index * 50ms per DESIGN.md spec.
 */
export default function AnimatedCard({
  children,
  className = '',
  index = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.3,
        ease: 'easeOut',
        delay: index * 0.05,
      }}
      whileHover={{ scale: 1.02 }}
      className={`rounded-xl bg-surface-container/60 backdrop-blur-xl border border-white/10 p-6 transition-shadow duration-300 ease-out hover:shadow-lg hover:shadow-primary/10 ${className}`}
    >
      {children}
    </motion.div>
  )
}
