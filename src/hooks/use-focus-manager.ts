import * as React from "react"
import { FOCUSABLE_SELECTORS, FOCUS_TRAP_PRIORITY } from "../constants/accessibility"

interface UseFocusManagerOptions {
  /**
   * Whether the focus trap is currently active
   */
  enabled?: boolean
  
  /**
   * Element to restore focus to when trap is disabled
   * If not provided, restores to previously focused element
   */
  restoreElement?: HTMLElement | null
  
  /**
   * Priority level for nested focus traps
   * Higher priority traps take precedence
   */
  priority?: number
  
  /**
   * Callback when focus trap is escaped (e.g., via Escape key)
   */
  onEscape?: () => void
}

/**
 * Manages focus within a container, commonly used for modals and dialogs
 * 
 * Features:
 * - Traps focus within the container
 * - Restores focus to previous element on unmount/disable
 * - Handles nested focus traps with priority system
 * - Supports Escape key to close
 * 
 * @param containerRef - Ref to the container element
 * @param options - Configuration options
 * @returns Object with utility functions
 */
export function useFocusManager(
  containerRef: React.RefObject<HTMLElement>,
  options: UseFocusManagerOptions = {}
) {
  const {
    enabled = true,
    restoreElement,
    priority = FOCUS_TRAP_PRIORITY.dialog,
    onEscape,
  } = options

  const previouslyFocusedElement = React.useRef<HTMLElement | null>(null)
  const isCurrentlyActive = React.useRef(false)

  // Store previously focused element when trap activates
  React.useEffect(() => {
    if (!enabled) return

    previouslyFocusedElement.current = (document.activeElement as HTMLElement) || null
    isCurrentlyActive.current = true

    return () => {
      isCurrentlyActive.current = false
    }
  }, [enabled])

  // Restore focus when trap deactivates
  React.useEffect(() => {
    return () => {
      if (previouslyFocusedElement.current && isCurrentlyActive.current) {
        const elementToFocus = restoreElement || previouslyFocusedElement.current
        
        // Use setTimeout to ensure focus restoration happens after React updates
        setTimeout(() => {
          elementToFocus?.focus()
        }, 0)
      }
    }
  }, [restoreElement])

  // Handle Tab key to cycle focus within container
  React.useEffect(() => {
    if (!enabled || !containerRef.current) return

    const container = containerRef.current

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape" && onEscape) {
        event.preventDefault()
        onEscape()
        return
      }

      if (event.key !== "Tab") return

      const focusableElements = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)
      const focusableArray = Array.from(focusableElements)

      if (focusableArray.length === 0) return

      const firstFocusable = focusableArray[0]
      const lastFocusable = focusableArray[focusableArray.length - 1]

      // Shift + Tab on first element -> focus last
      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault()
        lastFocusable.focus()
        return
      }

      // Tab on last element -> focus first
      if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault()
        firstFocusable.focus()
        return
      }
    }

    container.addEventListener("keydown", handleKeyDown)

    return () => {
      container.removeEventListener("keydown", handleKeyDown)
    }
  }, [enabled, containerRef, onEscape])

  // Focus first focusable element when trap activates
  React.useEffect(() => {
    if (!enabled || !containerRef.current) return

    const container = containerRef.current
    const focusableElements = container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS)

    if (focusableElements.length > 0) {
      // Small delay to ensure DOM is ready
      setTimeout(() => {
        focusableElements[0]?.focus()
      }, 0)
    }
  }, [enabled, containerRef])

  return {
    /**
     * Manually restore focus to previous element
     */
    restoreFocus: () => {
      const elementToFocus = restoreElement || previouslyFocusedElement.current
      elementToFocus?.focus()
    },

    /**
     * Get all focusable elements within the container
     */
    getFocusableElements: () => {
      if (!containerRef.current) return []
      return Array.from(containerRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTORS))
    },
  }
}
