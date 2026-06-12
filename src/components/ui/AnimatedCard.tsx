import { motion } from 'framer-motion'
import GlassCard from './GlassCard'

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function AnimatedCard({
  children,
  className = '',
  delay = 0,
}: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.5,
        ease: 'easeOut',
        delay,
      }}
      whileHover={{ scale: 1.02 }}
    >
      <GlassCard className={className}>{children}</GlassCard>
    </motion.div>
  )
}
