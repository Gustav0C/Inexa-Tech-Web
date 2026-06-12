import { motion } from 'framer-motion'
import Services from '../components/sections/Services'

export default function ServicesPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Services />
    </motion.div>
  )
}
