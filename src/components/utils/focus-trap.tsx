"use client"

import * as React from "react"

export interface FocusTrapProps {
  /**
   * Whether the focus trap is active
   */
  enabled?: boolean
  /**
   * Children to render inside the focus trap
   */
  children: React.ReactNode
  /**
   * Called when the user tries to escape (e.g., Escape key)
   */
  onEscape?: () => void
  /**
   * Whether to restore focus to the previously focused element when unmounted
   * @default true
   */
  restoreFocus?: boolean
}

/**
 * FocusTrap Component
 * 
 * Traps keyboard focus within the component for accessibility.
 * Used in modals, dialogs, and other overlay components.
 * Automatically handles focus restoration when unmounted.
 * 
 * @example
 * ```tsx
 * <FocusTrap enabled={isOpen} onEscape={() => setIsOpen(false)}>
 *   <div>
 *     <input />
 *     <button>Submit</button>
 *   </div>
 * </FocusTrap>
 * ```
 */
export function FocusTrap({ enabled = true, children, onEscape, restoreFocus = true }: FocusTrapProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const previousFocusRef = React.useRef<HTMLElement | null>(null)

  React.useEffect(() => {
    if (!enabled) return

    // Store the previously focused element
    if (restoreFocus && document.activeElement instanceof HTMLElement) {
      previousFocusRef.current = document.activeElement
    }

    const container = containerRef.current
    if (!container) return

    // Focus the first focusable element
    const focusableElements = container.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const firstElement = focusableElements[0]
    const lastElement = focusableElements[focusableElements.length - 1]

    if (firstElement) {
      firstElement.focus()
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      // Handle Escape key
      if (e.key === "Escape" && onEscape) {
        e.preventDefault()
        onEscape()
        return
      }

      // Handle Tab key for focus trapping
      if (e.key === "Tab") {
        if (focusableElements.length === 1) {
          e.preventDefault()
          return
        }

        if (e.shiftKey) {
          // Shift+Tab: Move to last element if at first
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement?.focus()
          }
        } else {
          // Tab: Move to first element if at last
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement?.focus()
          }
        }
      }
    }

    container.addEventListener("keydown", handleKeyDown)

    // Restore focus when unmounted
    return () => {
      container.removeEventListener("keydown", handleKeyDown)
      if (restoreFocus && previousFocusRef.current) {
        previousFocusRef.current.focus()
      }
    }
  }, [enabled, onEscape, restoreFocus])

  return <div ref={containerRef}>{children}</div>
}
