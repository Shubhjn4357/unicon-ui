"use client"

import { cn } from "@/lib/utils"
import { Moon, Sun } from "lucide-react"
import * as React from "react"
import { useTheme } from "../../hooks/use-theme"

interface ThemeToggleProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  showLabel?: boolean
}

/**
 * Unified theme toggle using useTheme hook
 * Features View Transitions API animation and proper theme context integration
 */
export const ThemeToggle = React.forwardRef<HTMLButtonElement, ThemeToggleProps>(
  ({ className, showLabel = false, ...props }, ref) => {
    const { theme, setTheme, resolvedTheme } = useTheme()

    const toggleTheme = () => {
      const newTheme = theme === "dark" ? "light" : theme === "light" ? "dark" : "dark"

      // Check if View Transitions API is supported
      if (
        typeof document !== "undefined" &&
        "startViewTransition" in document &&
        !window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ) {
        const transition = (document as Document & { startViewTransition: (callback: () => void) => void })
        transition.startViewTransition(() => {
          setTheme(newTheme)
        })
      } else {
        // Fallback without animation
        setTheme(newTheme)
      }
    }

    return (
      <button
        ref={ref}
        onClick={toggleTheme}
        className={cn(
          "inline-flex items-center justify-center gap-2",
          "rounded-lg p-2",
          "text-muted-foreground",
          "hover:bg-card hover:text-foreground",
          "transition-colors duration-150",
          "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
          "disabled:pointer-events-none disabled:opacity-50",
          className
        )}
        aria-label={`Switch to ${resolvedTheme === "dark" ? "light" : "dark"} theme`}
        {...props}
      >
        {resolvedTheme === "dark" ? (
          <>
            <Sun className="h-5 w-5" />
            {showLabel && <span className="text-sm">Light</span>}
          </>
        ) : (
            <>
              <Moon className="h-5 w-5" />
              {showLabel && <span className="text-sm">Dark</span>}
            </>
        )}
      </button>
    )
  }
)

ThemeToggle.displayName = "ThemeToggle"
