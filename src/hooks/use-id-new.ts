import * as React from "react"

/**
 * Custom useId hook with React.useId polyfill for older React versions
 * Provides unique, stable IDs for accessibility attributes
 */

let useIdFromReact: (() => string) | undefined

// Check if React.useId is available (React 18+)
if (React && "useId" in React && typeof (React as { useId?: () => string }).useId === "function") {
  useIdFromReact = (React as { useId: () => string }).useId
}

let count = 0

/**
 * Generate a unique ID for use in ARIA attributes and form labels
 * Uses native React.useId if available (React 18+), otherwise generates a unique ID
 * 
 * @param prefix - Optional prefix for the generated ID
 * @returns A unique, stable ID string
 */
export function useId(prefix = "unicorn"): string {
  // Use native React.useId if available
  if (useIdFromReact) {
    const id = useIdFromReact()
    return prefix ? `${prefix}-${id}` : id
  }

  // Fallback for React <18
  const [id] = React.useState(() => {
    count += 1
    return `${prefix}-${count}`
  })

  return id
}
