import { motion } from 'framer-motion'

interface GlassCardProps {
  children: React.ReactNode
  className?: string
  hoverScale?: boolean
  borderHighlight?: boolean
}

export default function GlassCard({
  children,
  className = '',
  hoverScale = true,
  borderHighlight = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`relative rounded-xl bg-white/5 backdrop-blur-glass border border-white/10 shadow-glass overflow-hidden ${
        borderHighlight ? 'before:absolute before:top-0 before:left-0 before:right-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent' : ''
      } ${className}`}
      whileHover={hoverScale ? { scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}