"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface WordRotateProps extends React.HTMLAttributes<HTMLDivElement> {
  words: string[]
  duration?: number
}

/**
 * Native WordRotate - Rotating word animation
 */
export const WordRotate = React.forwardRef<HTMLDivElement, WordRotateProps>(
  ({ words, duration = 2500, className, ...props }, ref) => {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length)
      }, duration)

      return () => clearInterval(interval)
    }, [words.length, duration])

    return (
      <div ref={ref} className={cn("relative inline-block h-auto", className)} {...props}>
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 20, rotateX: 90 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -20, rotateX: -90 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </div>
    )
  }
)

WordRotate.displayName = "WordRotate"
