import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex items-center justify-center"
    >
      <div className="text-center">
        <h1 className="text-display-lg font-sora text-on-surface mb-4">
          404
        </h1>
        <p className="text-body-lg text-on-surface-variant mb-8">
          Página no encontrada
        </p>
        <Link
          to="/"
          className="inline-flex items-center px-6 py-3 rounded-md bg-secondary text-on-secondary font-inter font-medium hover:bg-secondary-container transition-colors"
        >
          Volver al inicio
        </Link>
      </div>
    </motion.div>
  )
}