"use client"

import { useEffect, useRef, useState } from "react"

/**
 * Hook to detect if the current viewport matches a mobile breakpoint
 * @param breakpoint - The breakpoint to check (default: 768px)
 * @returns boolean indicating if viewport is mobile
 */
export function useMobile(breakpoint = 768): boolean {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint)
    }

    // Check on mount
    checkMobile()

    // Add event listener
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [breakpoint])

  return isMobile
}

/**
 * Hook for custom media queries
 * @param query - Media query string
 * @returns boolean indicating if query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const media = window.matchMedia(query)

    if (media.matches !== matches) {
      setMatches(media.matches)
    }

    const listener = () => setMatches(media.matches)
    media.addEventListener("change", listener)

    return () => media.removeEventListener("change", listener)
  }, [matches, query])

  return matches
}

/**
 * Hook for managing collapsible state
 * @param initialState - Initial collapsed state
 * @returns [isCollapsed, toggle, setCollapsed]
 */
export function useCollapse(initialState = false) {
  const [isCollapsed, setIsCollapsed] = useState(initialState)

  const toggle = () => setIsCollapsed((prev) => !prev)
  const collapse = () => setIsCollapsed(true)
  const expand = () => setIsCollapsed(false)

  return {
    isCollapsed,
    toggle,
    collapse,
    expand,
    setIsCollapsed,
  }
}

/**
 * Hook for window size tracking
 * @returns { width, height }
 */
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return windowSize
}

/**
 * Hook for scroll position tracking
 * @returns { x, y }
 */
export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState({
    x: typeof window !== "undefined" ? window.scrollX : 0,
    y: typeof window !== "undefined" ? window.scrollY : 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition({
        x: window.scrollX,
        y: window.scrollY,
      })
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return scrollPosition
}

/**
 * Hook for detecting clicks outside an element
 * @param ref - React ref to the element
 * @param handler - Callback when click outside occurs
 */
export function useClickOutside<T extends HTMLElement>(
  ref: React.RefObject<T>,
  handler: (event: MouseEvent | TouchEvent) => void
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return
      }
      handler(event)
    }

    document.addEventListener("mousedown", listener)
    document.addEventListener("touchstart", listener)

    return () => {
      document.removeEventListener("mousedown", listener)
      document.removeEventListener("touchstart", listener)
    }
  }, [ref, handler])
}

/**
 * Hook for keyboard event handling
 * @param targetKey - Key to listen for
 * @param handler - Callback when key is pressed
 */
export function useKeyPress(targetKey: string, handler: () => void) {
  useEffect(() => {
    const downHandler = (event: KeyboardEvent) => {
      if (event.key === targetKey) {
        handler()
      }
    }

    window.addEventListener("keydown", downHandler)
    return () => window.removeEventListener("keydown", downHandler)
  }, [targetKey, handler])
}

/**
 * Hook for boolean state toggle
 * @param initialValue - Initial boolean value
 * @returns [value, toggle, setValue]
 */
export function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue)
  const toggle = () => setValue((prev) => !prev)
  return [value, toggle, setValue] as const
}

/**
 * Hook for tracking previous value
 * @param value - Current value
 * @returns Previous value
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>(value)

  useEffect(() => {
    ref.current = value
  })

  return ref.current
}

/**
 * Hook for debounced values
 * @param value - Value to debounce
 * @param delay - Delay in milliseconds
 * @returns Debounced value
 */
export function useDebounce<T>(value: T, delay = 500): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => clearTimeout(handler)
  }, [value, delay])

  return debouncedValue
}

/**
 * Hook for throttled callbacks
 * @param callback - Function to throttle
 * @param delay - Delay in milliseconds
 * @returns Throttled function
 */
export function useThrottle<T extends (...args: unknown[]) => void>(callback: T, delay = 500): T {
  const lastRun = useState(Date.now())

  return ((...args) => {
    if (Date.now() - lastRun[0] >= delay) {
      callback(...args)
      lastRun[1](Date.now())
    }
  }) as T
}
