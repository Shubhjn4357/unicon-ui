"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface RotateTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  words: string[]
  duration?: number
}

/**
 * Native RotateText - Rotating text animation
 */
export const RotateText = React.forwardRef<HTMLSpanElement, RotateTextProps>(
  ({ words, duration = 3000, className, ...props }, ref) => {
    const [index, setIndex] = React.useState(0)

    React.useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % words.length)
      }, duration)
      return () => clearInterval(interval)
    }, [words, duration])

    return (
      <span ref={ref} className={cn("inline-flex w-max", className)} {...props}>
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    )
  }
)

RotateText.displayName = "RotateText"
