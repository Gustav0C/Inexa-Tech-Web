import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

interface CounterAnimatedProps {
  /** Target number to count up to */
  end: number
  /** Text appended after the number (e.g. "+", "%") */
  suffix?: string
  /** Duration in ms */
  duration?: number
  /** Number of decimal places */
  decimals?: number
  className?: string
}

/**
 * Scroll-triggered count-up animation.
 * Starts counting when the element enters the viewport (once).
 */
export default function CounterAnimated({
  end,
  suffix = '',
  duration = 2000,
  decimals = 0,
  className = '',
}: CounterAnimatedProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return

    const steps = 60
    const increment = end / steps
    let current = 0
    const stepDuration = duration / steps

    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Number(current.toFixed(decimals)))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [isInView, end, duration, decimals])

  return (
    <span ref={ref} className={className}>
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  )
}
