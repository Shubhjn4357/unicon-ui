"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface RevealLoaderProps {
  /**
   * Content to reveal
   */
  children?: React.ReactNode
  /**
   * Loading state
   */
  loading?: boolean
  /**
   * Duration of reveal animation in seconds
   * @default 1.5
   */
  duration?: number
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * RevealLoader - Loading animation with mask-based reveal effect
 * Features smooth reveal animation with progress indicator
 */
export const RevealLoader = React.forwardRef<HTMLDivElement, RevealLoaderProps>(
  ({ children, loading = true, duration = 1.5, className }, ref) => {
    const [progress, setProgress] = React.useState(0)

    React.useEffect(() => {
      if (!loading) {
        setProgress(100)
        return
      }

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) return prev
          return prev + Math.random() * 10
        })
      }, 200)

      return () => clearInterval(interval)
    }, [loading])

    if (!loading && progress === 100) {
      return (
        <motion.div
          ref={ref}
          className={className}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)}>
        {/* Loader overlay */}
        <motion.div
          className="absolute inset-0 z-50 flex items-center justify-center bg-[hsl(var(--card))]"
          initial={{ x: "-100%" }}
          animate={{ x: loading ? "0%" : "100%" }}
          transition={{ duration, ease: "easeInOut" }}
        >
          <div className="text-center">
            <motion.div
              className="mb-4 h-1 w-48 overflow-hidden rounded-full bg-border"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <motion.div
                className="h-full bg-[hsl(var(--primary))]"
                style={{ width: `${progress}%` }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
            <p className="text-sm text-muted-foreground">
              {Math.round(progress)}%
            </p>
          </div>
        </motion.div>

        {/* Content (hidden during loading) */}
        <div className="opacity-0">{children}</div>
      </div>
    )
  }
)

RevealLoader.displayName = "RevealLoader"
