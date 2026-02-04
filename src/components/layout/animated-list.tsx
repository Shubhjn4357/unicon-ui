"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface AnimatedListProps extends React.HTMLAttributes<HTMLDivElement> {
  delay?: number
}

/**
 * Native AnimatedList - Stagger animation for list items
 */
export const AnimatedList = React.forwardRef<HTMLDivElement, AnimatedListProps>(
  ({ children, delay = 0, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {React.Children.map(children, (child, i) => (
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            whileHover={{ opacity: 1, x: 0, scale: 1.05 }}
            transition={{ duration: 0.3, delay: delay + i * 0.1 }}
          >
            {child}
          </motion.div>
        ))}
      </div>
    )
  }
)

AnimatedList.displayName = "AnimatedList"
