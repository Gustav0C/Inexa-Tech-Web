import { motion } from 'framer-motion'

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-display-sm font-sora text-on-surface mb-4">
          Servicios
        </h1>
        <p className="text-body-lg text-on-surface-variant max-w-2xl mx-auto">
          Nuestros servicios tecnológicos de vanguardia.
        </p>
      </div>
    </motion.div>
  )
}