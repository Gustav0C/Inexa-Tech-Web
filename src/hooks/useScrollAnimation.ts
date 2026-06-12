import { useCallback } from 'react'

/**
 * Smooth scroll to an element by ID.
 *
 * Usage:
 *   const scrollTo = useScrollAnimation()
 *   scrollTo('services')
 */
export function useScrollAnimation() {
  const scrollTo = useCallback((elementId: string) => {
    const element = document.getElementById(elementId)
    if (!element) return

    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }, [])

  return scrollTo
}
