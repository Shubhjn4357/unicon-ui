"use client"

import { motion } from "framer-motion"
import type React from "react"
import { cn } from "../../lib/utils"

interface StaggeredGridItem {
  className?: string
  [key: string]: any
}

interface StaggeredGridProps {
  children?: React.ReactNode
  columns?: number
  gap?: string | number
  className?: string
  items?: StaggeredGridItem[]
}

export const StaggeredGrid = ({
  children,
  columns = 3,
  gap = "1rem",
  className,
  items = [],
}: StaggeredGridProps) => {
  return (
    <div
      className={cn("grid", className)}
      style={{
        gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
        gap: gap,
      }}
    >
      {items.map((item, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            delay: i * 0.1,
            ease: "easeOut",
          }}
          className={cn("overflow-hidden rounded-xl", item.className)}
        >
          {/* Default Content Render if specific render function not provided */}
          <div className="h-64 w-full bg-linear-to-br from-muted to-secondary" />
        </motion.div>
      ))}
      {children}
    </div>
  )
}
StaggeredGrid.displayName = "StaggeredGrid"
