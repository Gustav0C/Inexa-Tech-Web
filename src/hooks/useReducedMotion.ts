import { useEffect, useState } from 'react'

/**
 * Detects the user's prefers-reduced-motion media query.
 * Returns `true` when the user has requested reduced motion.
 *
 * Usage:
 *   const prefersReduced = useReducedMotion()
 *   {prefersReduced ? <StaticCard /> : <AnimatedCard />}
 */
export function useReducedMotion(): boolean {
  const [prefersReduced, setPrefersReduced] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  useEffect(() => {
    const mql = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches)
    mql.addEventListener('change', handler)
    return () => mql.removeEventListener('change', handler)
  }, [])

  return prefersReduced
}
