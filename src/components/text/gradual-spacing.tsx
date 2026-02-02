"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface GradualSpacingProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
  duration?: number
  delayMultiple?: number
}

/**
 * Native GradualSpacing - Animate letter spacing
 */
export const GradualSpacing = React.forwardRef<HTMLDivElement, GradualSpacingProps>(
  ({ text, duration = 0.5, delayMultiple = 0.04, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex justify-center space-x-1", className)} {...props}>
        <AnimatePresence>
          {text.split("").map((char, i) => (
            <motion.h1
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration, delay: i * delayMultiple }}
              className={cn("drop-shadow-sm")}
            >
              {char === " " ? <span>&nbsp;</span> : char}
            </motion.h1>
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

GradualSpacing.displayName = "GradualSpacing"
