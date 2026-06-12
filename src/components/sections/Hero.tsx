import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Button from '../ui/Button'

const ParticleBackground = lazy(() => import('../ui/ParticleBackground'))

const headingVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

const subtitleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.2 },
  },
}

const ctaVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: 0.4 },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background: lazy-loaded R3F particles with gradient fallback */}
      <Suspense fallback={null}>
        <ParticleBackground />
      </Suspense>

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background/90" />

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-container mx-auto px-gutter text-center"
      >
        {/* Heading */}
        <motion.h1
          variants={headingVariants}
          className="font-sora font-bold text-display-sm sm:text-display-lg md:text-display-lg lg:text-display-lg leading-tight tracking-tight"
        >
          <span className="bg-gradient-to-b from-on-surface via-on-surface to-on-surface-variant bg-clip-text text-transparent">
            Tecnología que transforma{' '}
          </span>
          <span className="bg-gradient-to-r from-secondary via-secondary-container to-secondary bg-clip-text text-transparent">
            negocios
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={subtitleVariants}
          className="mt-6 max-w-2xl mx-auto text-on-surface-variant font-inter text-body-lg md:text-body-lg leading-relaxed"
        >
          INEXA TECH es una empresa de consultoría tecnológica especializada en
          inteligencia artificial, cloud, ciberseguridad y data analytics.
          Soluciones de vanguardia para empresas que buscan innovar y escalar.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={ctaVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/servicios">
            <Button variant="primary" size="lg">
              Ver Servicios
            </Button>
          </Link>
          <Link to="/contacto">
            <Button variant="ghost" size="lg">
              Contactar
            </Button>
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="w-6 h-10 rounded-full border-2 border-outline-variant flex justify-center pt-2"
          >
            <div className="w-1 h-2 rounded-full bg-outline" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}
