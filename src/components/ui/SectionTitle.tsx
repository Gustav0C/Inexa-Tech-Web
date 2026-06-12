import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
  /** Render title as gradient text */
  gradient?: boolean
}

/**
 * Section heading with Sora display typeface.
 * Uses gradient text by default (silver-to-white vertical gradient).
 */
export default function SectionTitle({
  title,
  subtitle,
  className = '',
  gradient = true,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className={`text-center mb-12 ${className}`}
    >
      <h2
        className={`font-sora font-bold tracking-tight ${
          gradient ? 'gradient-text text-display-sm' : 'text-display-sm text-on-surface'
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
