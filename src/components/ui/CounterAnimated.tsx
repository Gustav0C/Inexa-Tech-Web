import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterAnimatedProps {
  target: number
  suffix?: string
  label: string
  duration?: number
  className?: string
}

export default function CounterAnimated({
  target,
  suffix = '',
  label,
  duration = 2,
  className = '',
}: CounterAnimatedProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const startTime = performance.now()
    const durationMs = duration * 1000

    function animate(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / durationMs, 1)

      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [isInView, target, duration])

  return (
    <div ref={ref} className={`text-center ${className}`}>
      <span className="font-sora font-bold text-display-sm md:text-headline-lg bg-gradient-to-b from-secondary to-primary bg-clip-text text-transparent">
        {count}
        {suffix}
      </span>
      <p className="mt-2 text-on-surface-variant font-inter text-body-md">
        {label}
      </p>
    </div>
  )
}
