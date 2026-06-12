import { motion } from 'framer-motion'

interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({
  title,
  subtitle,
  className = '',
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`text-center mb-16 ${className}`}
    >
      <h2 className="font-sora font-bold text-display-lg md:text-display-sm bg-gradient-to-b from-primary to-on-surface bg-clip-text text-transparent pb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-on-surface-variant font-inter text-body-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}