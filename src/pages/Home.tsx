import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Services from '../components/sections/Services'
import Products from '../components/sections/Products'
import About from '../components/sections/About'
import Team from '../components/sections/Team'
import Testimonials from '../components/sections/Testimonials'
import Contact from '../components/sections/Contact'

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <Products />
      <About />
      <Team />
      <Testimonials />
      <Contact />
    </motion.div>
  )
}
