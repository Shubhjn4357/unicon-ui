"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface FlipTextProps extends React.HTMLAttributes<HTMLDivElement> {
  word: string
  duration?: number
  delayMultiple?: number
}

/**
 * Native FlipText - Flip text animation
 */
export const FlipText = React.forwardRef<HTMLDivElement, FlipTextProps>(
  ({ word, duration = 0.5, delayMultiple = 0.08, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex justify-center space-x-2", className)} {...props}>
        <AnimatePresence mode="wait">
          {word.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, rotateX: -90 }}
              animate={{ opacity: 1, rotateX: 0 }}
              exit={{ opacity: 0, rotateX: 90 }}
              transition={{ duration, delay: i * delayMultiple }}
              className="origin-center drop-shadow-sm"
            >
              {char}
            </motion.span>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

FlipText.displayName = "FlipText"
