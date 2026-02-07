/**
 * Check if user prefers reduced motion
 * @returns True if prefers reduced motion
 */
export function useReducedMotion(): boolean {
  if (typeof window === "undefined") return false
  
  const [reducedMotion, setReducedMotion] = React.useState(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    return mediaQuery.matches
  })

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)")
    
    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches)
    }

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange)
      return () => mediaQuery.removeEventListener("change", handleChange)
    }
    
    // Legacy browsers (Safari < 14)
    mediaQuery.addListener(handleChange)
    return () => mediaQuery.removeListener(handleChange)
  }, [])

  return reducedMotion
}

import * as React from "react"
