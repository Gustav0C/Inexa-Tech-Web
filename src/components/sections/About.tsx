import { motion } from 'framer-motion'
import { Target, HeartHandshake, Lightbulb } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'
import AnimatedCard from '../ui/AnimatedCard'
import CounterAnimated from '../ui/CounterAnimated'
import { stats } from '../../constants/stats'

const values = [
  {
    icon: Target,
    title: 'Precision',
    description: 'Every decision backed by data. Every implementation engineered for reliability.',
  },
  {
    icon: HeartHandshake,
    title: 'Partnership',
    description: 'We succeed when our clients succeed. Transparent collaboration at every stage.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'Pushing boundaries with emerging tech while keeping solutions practical and grounded.',
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function About() {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 max-w-container mx-auto">
      <SectionTitle
        title="About INEXA TECH"
        subtitle="Building the infrastructure of tomorrow with the discipline of today."
      />

      {/* Mission / History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <p className="text-body-lg text-on-surface-variant leading-relaxed">
          Founded in 2018, INEXA TECH emerged from a simple conviction: enterprise technology
          should be elegant, reliable, and accessible. We started as a small team of engineers
          frustrated by bloated, fragile systems — and set out to build better.
        </p>
        <p className="text-body-lg text-on-surface-variant leading-relaxed mt-4">
          Today, we partner with forward-thinking companies across fintech, healthcare, and
          logistics to design and deliver software that scales. Our philosophy remains the same:
          SOLID foundations, clean architecture, and zero tolerance for shortcuts.
        </p>
      </motion.div>

      {/* Values */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
      >
        {values.map((value, index) => (
          <motion.div key={value.title} variants={itemVariants}>
            <AnimatedCard index={index} className="text-center h-full">
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary-container/20 text-secondary">
                <value.icon className="w-6 h-6" aria-hidden="true" />
              </div>
              <h3 className="font-sora font-semibold text-headline-md text-on-surface mb-2">
                {value.title}
              </h3>
              <p className="text-body-md text-on-surface-variant">{value.description}</p>
            </AnimatedCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
        className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat) => (
          <div key={stat.id}>
            <CounterAnimated
              end={stat.value}
              suffix={stat.suffix}
              decimals={stat.value % 1 !== 0 ? 1 : 0}
              className="block font-sora font-bold text-display-sm text-secondary"
            />
            <span className="mt-2 block text-body-md text-on-surface-variant">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}
