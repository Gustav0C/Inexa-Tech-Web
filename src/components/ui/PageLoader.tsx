import { motion } from 'framer-motion'

export default function PageLoader() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <motion.div
        className="relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        {/* Pulsing ring */}
        <motion.div
          className="w-16 h-16 rounded-full border-2 border-secondary-container"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Inner dot */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 0.2,
          }}
        >
          <div className="w-3 h-3 rounded-full bg-secondary-container" />
        </motion.div>
      </motion.div>

      <motion.p
        className="mt-6 text-on-surface-variant font-jetbrains text-label-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        Loading...
      </motion.p>
    </div>
  )
}
