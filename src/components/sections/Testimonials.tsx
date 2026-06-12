import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, User, Quote } from 'lucide-react'
import { testimonials } from '../../constants/testimonials'
import SectionTitle from '../ui/SectionTitle'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'fill-secondary text-secondary' : 'text-outline-variant'
          }`}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const total = testimonials.length

  const next = useCallback(() => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % total)
  }, [total])

  const prev = useCallback(() => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + total) % total)
  }, [total])

  // Autoplay
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isPaused, next])

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -200 : 200,
      opacity: 0,
    }),
  }

  const testimonial = testimonials[current]

  return (
    <section id="testimonials" className="py-24 px-4 sm:px-6 lg:px-8 max-w-container mx-auto">
      <SectionTitle
        title="What Our Clients Say"
        subtitle="Real feedback from teams who trust us with their most critical projects."
      />

      <div
        className="relative max-w-3xl mx-auto"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        aria-live="polite"
        aria-roledescription="carousel"
      >
        {/* Carousel card */}
        <div className="rounded-xl bg-surface-container/60 backdrop-blur-xl border border-white/10 p-8 sm:p-12 min-h-[320px] flex flex-col justify-center overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={testimonial.id}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="text-center"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${current + 1} of ${total}`}
            >
              {/* Quote icon */}
              <Quote className="mx-auto mb-6 w-10 h-10 text-secondary/30" aria-hidden="true" />

              {/* Quote text */}
              <blockquote className="text-body-lg text-on-surface leading-relaxed italic mb-8">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Stars */}
              <div className="flex justify-center mb-4">
                <StarRating rating={testimonial.rating} />
              </div>

              {/* Author */}
              <div className="flex items-center justify-center gap-3">
                {/* Avatar placeholder */}
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                  {testimonial.avatarUrl ? (
                    <img
                      src={testimonial.avatarUrl}
                      alt=""
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <User className="w-5 h-5 text-on-surface-variant/40" aria-hidden="true" />
                  )}
                </div>
                <div className="text-left">
                  <p className="font-sora font-semibold text-body-md text-on-surface">
                    {testimonial.name}
                  </p>
                  <p className="text-label-sm font-jetbrains text-on-surface-variant">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation buttons */}
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high/80 backdrop-blur border border-white/10 text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-colors duration-200"
        >
          <ChevronLeft className="w-5 h-5" aria-hidden="true" />
        </button>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 hidden sm:flex items-center justify-center w-10 h-10 rounded-full bg-surface-container-high/80 backdrop-blur border border-white/10 text-on-surface-variant hover:text-secondary hover:border-secondary/30 transition-colors duration-200"
        >
          <ChevronRight className="w-5 h-5" aria-hidden="true" />
        </button>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-6" role="tablist">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              role="tab"
              aria-selected={i === current}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => {
                setDirection(i > current ? 1 : -1)
                setCurrent(i)
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-6 bg-secondary'
                  : 'w-2 bg-outline-variant hover:bg-outline'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
