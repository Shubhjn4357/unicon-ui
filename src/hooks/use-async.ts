"use client"

import { useCallback, useEffect, useState } from "react"

/**
 * State for async operations
 */
export interface AsyncState<T> {
  data: T | null
  error: Error | null
  loading: boolean
}

/**
 * Hook for managing async operations
 * @returns { execute, data, error, loading, reset }
 */
export function useAsync<T = any, Args extends any[] = any[]>(
  asyncFunction: (...args: Args) => Promise<T>
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    error: null,
    loading: false,
  })

  const execute = useCallback(
    async (...args: Args) => {
      setState({ data: null, error: null, loading: true })

      try {
        const data = await asyncFunction(...args)
        setState({ data, error: null, loading: false })
        return data
      } catch (error) {
        setState({ data: null, error: error as Error, loading: false })
        throw error
      }
    },
    [asyncFunction]
  )

  const reset = useCallback(() => {
    setState({ data: null, error: null, loading: false })
  }, [])

  return {
    execute,
    ...state,
    reset,
  }
}

/**
 * Hook for localStorage with type safety
 * @param key - Storage key
 * @param initialValue - Initial value
 * @returns [value, setValue, remove]
 */
export function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue
    }

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error)
    }
  }

  const remove = () => {
    try {
      if (typeof window !== "undefined") {
        window.localStorage.removeItem(key)
      }
      setStoredValue(initialValue)
    } catch (error) {
      console.error(`Error removing localStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue, remove] as const
}

/**
 * Hook for sessionStorage with type safety
 * @param key - Storage key
 * @param initialValue - Initial value
 * @returns [value, setValue, remove]
 */
export function useSessionStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue
    }

    try {
      const item = window.sessionStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.error(`Error reading sessionStorage key "${key}":`, error)
      return initialValue
    }
  })

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (typeof window !== "undefined") {
        window.sessionStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.error(`Error setting sessionStorage key "${key}":`, error)
    }
  }

  const remove = () => {
    try {
      if (typeof window !== "undefined") {
        window.sessionStorage.removeItem(key)
      }
      setStoredValue(initialValue)
    } catch (error) {
      console.error(`Error removing sessionStorage key "${key}":`, error)
    }
  }

  return [storedValue, setValue, remove] as const
}

/**
 * Hook for copy to clipboard
 * @returns [copiedText, copy]
 */
export function useCopyToClipboard() {
  const [copiedText, setCopiedText] = useState<string | null>(null)

  const copy = async (text: string) => {
    if (!navigator?.clipboard) {
      console.warn("Clipboard not supported")
      return false
    }

    try {
      await navigator.clipboard.writeText(text)
      setCopiedText(text)
      return true
    } catch (error) {
      console.error("Failed to copy:", error)
      setCopiedText(null)
      return false
    }
  }

  return [copiedText, copy] as const
}

/**
 * Hook for interval management
 * @param callback - Function to call on interval
 * @param delay - Delay in milliseconds (null to pause)
 */
export function useInterval(callback: () => void, delay: number | null) {
  useEffect(() => {
    if (delay === null) return

    const id = setInterval(callback, delay)
    return () => clearInterval(id)
  }, [callback, delay])
}

/**
 * Hook for timeout management
 * @param callback - Function to call after timeout
 * @param delay - Delay in milliseconds (null to cancel)
 */
export function useTimeout(callback: () => void, delay: number | null) {
  useEffect(() => {
    if (delay === null) return

    const id = setTimeout(callback, delay)
    return () => clearTimeout(id)
  }, [callback, delay])
}

/**
 * Hook for intersection observer
 * @param options - IntersectionObserver options
 * @returns [ref, isIntersecting, entry]
 */
export function useIntersectionObserver<T extends HTMLElement>(
  options: IntersectionObserverInit = {}
) {
  const [ref, setRef] = useState<T | null>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null)

  useEffect(() => {
    if (!ref) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      setEntry(entry)
    }, options)

    observer.observe(ref)

    return () => {
      observer.disconnect()
    }
  }, [ref, options])

  return [setRef, isIntersecting, entry] as const
}
