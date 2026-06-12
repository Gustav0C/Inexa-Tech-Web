import { motion } from 'framer-motion'
import Team from '../components/sections/Team'

export default function TeamPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="pt-24"
    >
      <Team />
    </motion.div>
  )
}
