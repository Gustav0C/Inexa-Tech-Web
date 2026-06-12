import { motion } from 'framer-motion'
import About from '../components/sections/About'

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <About />
    </motion.div>
  )
}
