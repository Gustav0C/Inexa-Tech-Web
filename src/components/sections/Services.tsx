import { motion } from 'framer-motion'
import { services } from '../../constants/services'
import AnimatedCard from '../ui/AnimatedCard'
import SectionTitle from '../ui/SectionTitle'

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Services() {
  return (
    <section id="services" className="py-24 px-4 sm:px-6 lg:px-8 max-w-container mx-auto">
      <SectionTitle
        title="Our Services"
        subtitle="End-to-end technology solutions engineered for scale, security, and performance."
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {services.map((service, index) => (
          <motion.div key={service.id} variants={itemVariants}>
            <AnimatedCard index={index} className="h-full flex flex-col">
              {/* Icon */}
              <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-secondary-container/20 text-secondary">
                <service.icon className="w-6 h-6" aria-hidden="true" />
              </div>

              {/* Title */}
              <h3 className="font-sora font-semibold text-headline-md text-on-surface mb-2">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-body-md text-on-surface-variant mb-4 flex-1">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-body-md text-on-surface-variant"
                  >
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </AnimatedCard>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
