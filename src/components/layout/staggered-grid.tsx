"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface StaggeredGridProps {
  /**
   * Grid items to display
   */
  children: React.ReactNode
  /**
   * Number of columns
   * @default 3
   */
  columns?: number
  /**
   * Gap between items
   * @default "1rem"
   */
  gap?: string
  /**
   * Stagger delay between items in seconds
   * @default 0.1
   */
  staggerDelay?: number
  /**
   * Additional CSS classes
   */
  className?: string
}

/**
 * StaggeredGrid - Grid with stagger animation for children
 * Features framer-motion stagger animation with customizable columns and timing
 */
export const StaggeredGrid = React.forwardRef<HTMLDivElement, StaggeredGridProps>(
  ({ children, columns = 3, gap = "1rem", staggerDelay = 0.1, className }, ref) => {
    const childrenArray = React.Children.toArray(children)

    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: staggerDelay,
        },
      },
    }

    const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 },
    }

    return (
      <motion.div
        ref={ref}
        className={cn("grid w-full", className)}
        style={{
          gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
          gap,
        }}
        variants={container}
        initial="hidden"
        animate="show"
      >
        {childrenArray.map((child, index) => (
          <motion.div key={index} variants={item} transition={{ duration: 0.5, ease: "easeOut" }}>
            {child}
          </motion.div>
        ))}
      </motion.div>
    )
  }
)

StaggeredGrid.displayName = "StaggeredGrid"
