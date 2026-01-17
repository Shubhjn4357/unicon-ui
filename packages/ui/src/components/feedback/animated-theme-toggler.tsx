"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export interface AnimatedThemeTogglerProps extends React.HTMLAttributes<HTMLButtonElement> {
  defaultTheme?: "light" | "dark"
  onThemeChange?: (theme: "light" | "dark") => void
}

/**
 * Animated Theme Toggler - Sun/Moon morphing animation
 */
export const AnimatedThemeToggler = React.forwardRef<HTMLButtonElement, AnimatedThemeTogglerProps>(
  ({ defaultTheme = "light", onThemeChange, className, ...props }, ref) => {
    const [theme, setTheme] = React.useState(defaultTheme)
    const isDark = theme === "dark"

    const toggleTheme = () => {
      const newTheme = isDark ? "light" : "dark"
      setTheme(newTheme)
      onThemeChange?.(newTheme)

      // Apply to document
      if (typeof document !== "undefined") {
        document.documentElement.classList.toggle("dark", newTheme === "dark")
      }
    }

    return (
      <button
        ref={ref}
        onClick={toggleTheme}
        className={cn(
          "relative h-12 w-12 rounded-full border border-border bg-surface p-2 transition-all hover:scale-110 active:scale-95",
          className
        )}
        aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        {...props}
      >
        <motion.div className="relative h-full w-full" animate={{ rotate: isDark ? 180 : 0 }}>
          {/* Sun rays */}
          {!isDark && (
            <>
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute left-1/2 top-1/2 h-1 w-1 rounded-full bg-yellow-500"
                  style={{
                    transformOrigin: "0 0",
                  }}
                  initial={{ scale: 0, x: 0, y: 0 }}
                  animate={{
                    scale: [1, 1.2, 1],
                    x: [0, Math.cos((i * 45 * Math.PI) / 180) * 16, 0],
                    y: [0, Math.sin((i * 45 * Math.PI) / 180) * 16, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.1,
                  }}
                />
              ))}
            </>
          )}

          {/* Center circle (sun/moon) */}
          <motion.div
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              width: isDark ? 24 : 28,
              height: isDark ? 24 : 28,
              backgroundColor: isDark ? "#94a3b8" : "#fbbf24",
            }}
            transition={{ duration: 0.3 }}
          >
            {/* Moon crater */}
            {isDark && (
              <>
                <motion.div
                  className="absolute rounded-full bg-slate-600"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  style={{
                    width: 6,
                    height: 6,
                    left: 4,
                    top: 4,
                  }}
                />
                <motion.div
                  className="absolute rounded-full bg-slate-600"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  style={{
                    width: 4,
                    height: 4,
                    left: 14,
                    top: 12,
                  }}
                />
              </>
            )}
          </motion.div>
        </motion.div>
      </button>
    )
  }
)

AnimatedThemeToggler.displayName = "AnimatedThemeToggler"
