import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import Hero from '../components/sections/Hero'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import SectionTitle from '../components/ui/SectionTitle'
import AnimatedCard from '../components/ui/AnimatedCard'
import CounterAnimated from '../components/ui/CounterAnimated'
import { services } from '../constants/services'
import { testimonials } from '../constants/testimonials'
import { stats } from '../constants/stats'
import { ArrowRight, Star } from 'lucide-react'

/* ─── Stagger container variant ─── */
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

/* ─── Rating Stars helper ─── */
function RatingStars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }, (_, i) => (
        <Star
          key={i}
          size={14}
          className={
            i < count
              ? 'fill-secondary-container text-secondary-container'
              : 'text-outline-variant'
          }
        />
      ))}
    </div>
  )
}

/* ════════════════════════════════════════════════════════════ */
/*  HOME PAGE                                                  */
/* ════════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* ── Hero ── */}
      <Hero />

      {/* ── Stats ── */}
      <section className="py-20 bg-surface-container-low">
        <div className="max-w-container mx-auto px-gutter">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <CounterAnimated
                key={stat.id}
                target={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Services Preview ── */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-gutter">
          <SectionTitle
            title="Nuestros Servicios"
            subtitle="Soluciones tecnológicas integrales diseñadas para impulsar la transformación digital de tu empresa."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {services.slice(0, 2).map((service, index) => (
              <AnimatedCard key={service.id} delay={index * 0.1}>
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-3 rounded-lg bg-secondary-container/10">
                      <service.icon
                        size={24}
                        className="text-secondary-container"
                      />
                    </div>
                    <div>
                      <h3 className="font-sora font-semibold text-headline-md text-on-surface">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-on-surface-variant font-inter text-body-md leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 2).map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-on-surface-variant font-inter text-sm"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-secondary-container flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/servicios"
              className="inline-flex items-center gap-2 text-secondary-container font-inter font-medium hover:underline transition-colors"
            >
              Ver todos los servicios
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── About Preview ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-gutter">
          <SectionTitle
            title="Quiénes Somos"
            subtitle="Un equipo de expertos apasionados por la tecnología y comprometidos con la excelencia."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {[
              {
                title: 'Misión',
                description:
                  'Empoderar a las empresas con tecnología de vanguardia que impulse su crecimiento y competitividad en el mercado digital.',
              },
              {
                title: 'Visión',
                description:
                  'Ser líderes en consultoría tecnológica en Latinoamérica, reconocidos por nuestra innovación, excelencia y compromiso con los clientes.',
              },
              {
                title: 'Valores',
                description:
                  'Innovación continua, transparencia absoluta, trabajo en equipo y un compromiso inquebrantable con la calidad y los resultados.',
              },
            ].map((item, index) => (
              <AnimatedCard key={item.title} delay={index * 0.1}>
                <div className="p-8 text-center">
                  <h3 className="font-sora font-semibold text-headline-md text-on-surface mb-3">
                    {item.title}
                  </h3>
                  <p className="text-on-surface-variant font-inter text-body-md leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/nosotros"
              className="inline-flex items-center gap-2 text-secondary-container font-inter font-medium hover:underline transition-colors"
            >
              Conocer más sobre nosotros
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Testimonials Preview ── */}
      <section className="py-24">
        <div className="max-w-container mx-auto px-gutter">
          <SectionTitle
            title="Lo que dicen nuestros clientes"
            subtitle="La confianza de nuestros clientes es nuestra mejor carta de presentación."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {testimonials.slice(0, 2).map((testimonial, index) => (
              <AnimatedCard key={testimonial.id} delay={index * 0.1}>
                <div className="p-8">
                  {/* Quote */}
                  <p className="text-on-surface font-inter text-body-md leading-relaxed mb-6 italic">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>

                  {/* Rating */}
                  <RatingStars count={testimonial.rating} />

                  {/* Author */}
                  <div className="mt-4 flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary-container font-sora font-bold text-sm">
                      {testimonial.author
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </div>
                    <div>
                      <p className="text-on-surface font-inter font-medium text-sm">
                        {testimonial.author}
                      </p>
                      <p className="text-on-surface-variant font-inter text-xs">
                        {testimonial.role} de {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-10 text-center"
          >
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 text-secondary-container font-inter font-medium hover:underline transition-colors"
            >
              Ver todos los testimonios
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── Contact CTA ── */}
      <section className="py-24 bg-surface-container-low">
        <div className="max-w-container mx-auto px-gutter text-center">
          <SectionTitle
            title="¿Listo para transformar tu empresa?"
            subtitle="Contáctanos hoy y descubre cómo podemos impulsar tu siguiente gran salto tecnológico."
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              to="/contacto"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-secondary-container text-on-secondary-container font-inter font-medium text-lg hover:bg-secondary-container/90 transition-colors"
            >
              Solicitar una consultoría gratuita
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
