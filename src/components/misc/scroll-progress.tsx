"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ScrollProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  position?: "top" | "bottom"
}

/**
 * Native ScrollProgress - Document scroll indicator
 */
export const ScrollProgress = React.forwardRef<HTMLDivElement, ScrollProgressProps>(
  ({ position = "top", className, ...props }, ref) => {
    const [scrollProgress, setScrollProgress] = React.useState(0)

    React.useEffect(() => {
      const updateScrollProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
        const scrolled = window.scrollY
        const progress = (scrolled / scrollHeight) * 100
        setScrollProgress(progress)
      }

      window.addEventListener("scroll", updateScrollProgress)
      updateScrollProgress()

      return () => window.removeEventListener("scroll", updateScrollProgress)
    }, [])

    return (
      <div
        ref={ref}
        className={cn(
          "fixed left-0 right-0 z-50 h-1 bg-muted",
          position === "top" ? "top-0" : "bottom-0",
          className
        )}
        {...props}
      >
        <motion.div
          className="h-full bg-[hsl(var(--primary))]"
          style={{ width: `${scrollProgress}%` }}
          initial={{ width: 0 }}
          animate={{ width: `${scrollProgress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>
    )
  }
)

ScrollProgress.displayName = "ScrollProgress"
