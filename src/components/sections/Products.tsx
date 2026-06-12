import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { ExternalLink } from 'lucide-react'
import SectionTitle from '../ui/SectionTitle'

export default function Products() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], [60, -60])
  const contentY = useTransform(scrollYProgress, [0, 1], [30, -30])

  return (
    <section
      ref={sectionRef}
      id="products"
      className="py-24 px-4 sm:px-6 lg:px-8 max-w-container mx-auto"
    >
      <SectionTitle
        title="Our Products"
        subtitle="Purpose-built tools that solve real engineering problems."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Product visual — placeholder */}
        <motion.div
          style={{ y: imageY }}
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="relative rounded-xl bg-surface-container/60 backdrop-blur-xl border border-white/10 p-8 flex items-center justify-center min-h-[320px]"
        >
          {/* Generic SVG logo placeholder */}
          <svg
            viewBox="0 0 200 200"
            className="w-48 h-48 text-secondary/30"
            aria-hidden="true"
          >
            <rect
              x="20"
              y="20"
              width="160"
              height="160"
              rx="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="100" cy="90" r="32" fill="currentColor" opacity="0.4" />
            <path
              d="M60 140 Q100 110 140 140"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
            <text
              x="100"
              y="170"
              textAnchor="middle"
              fill="currentColor"
              fontSize="14"
              fontFamily="Sora, sans-serif"
              fontWeight="600"
            >
              mikui
            </text>
          </svg>

          {/* In-development badge */}
          <span className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/20 text-secondary text-label-sm font-jetbrains">
            <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
            In Development
          </span>
        </motion.div>

        {/* Description */}
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
        >
          <h3 className="font-sora font-bold text-headline-lg text-on-surface mb-4">
            Mikui
          </h3>
          <p className="text-body-lg text-on-surface-variant mb-6">
            An intelligent DevOps dashboard that unifies monitoring, alerting, and incident
            management into a single pane of glass. Built for teams that move fast and need
            real-time visibility across their entire stack.
          </p>

          <ul className="space-y-3 mb-8">
            {[
              'Real-time multi-cloud monitoring',
              'AI-powered anomaly detection',
              'Automated incident runbooks',
              'Custom Grafana-compatible dashboards',
            ].map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-body-md text-on-surface-variant"
              >
                <span
                  className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary"
                  aria-hidden="true"
                />
                {feature}
              </li>
            ))}
          </ul>

          <a
            href="/contacto"
            className="inline-flex items-center justify-center gap-2 font-jetbrains text-label-md rounded-md border border-outline text-on-surface px-6 py-3 hover:bg-gradient-to-b hover:from-surface-container-low hover:to-secondary-container/20 active:scale-95 transition-all duration-300 ease-out"
          >
            Request Early Access
            <ExternalLink className="w-4 h-4" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
