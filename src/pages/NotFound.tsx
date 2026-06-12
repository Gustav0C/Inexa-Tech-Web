import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Button from '../components/ui/Button'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
}

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        {/* 404 heading */}
        <motion.h1
          variants={itemVariants}
          className="font-sora font-bold text-display-sm sm:text-display-lg md:text-display-lg gradient-text mb-4"
        >
          404
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-body-lg text-on-surface-variant mb-2"
        >
          Página no encontrada
        </motion.p>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="text-body-md text-on-surface-variant/60 mb-8 max-w-md mx-auto"
        >
          La página que buscas no existe o fue movida. Vuelve al inicio para
          continuar navegando.
        </motion.p>

        {/* Back to home button */}
        <motion.div variants={itemVariants}>
          <Link to="/">
            <Button variant="ghost">
              <ArrowLeft className="w-4 h-4" aria-hidden="true" />
              Volver al inicio
            </Button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
