"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface GravityProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[]
}

/**
 * Gravity - Elements falling with simulated physics
 */
export const Gravity = React.forwardRef<HTMLDivElement, GravityProps>(
  ({ items, className, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-[400px] w-full border border-border overflow-hidden bg-card rounded-(--radius)",
          className
        )}
        {...props}
      >
        {items.map((item, i) => (
          <motion.div
            key={`gravity-item-${i}`}
            drag
            dragConstraints={containerRef}
            className="absolute rounded-full bg-primary p-4 text-primary-foreground shadow-lg cursor-grab active:cursor-grabbing"
            initial={{ y: -100, x: Math.random() * 400 }}
            animate={{ y: 350 - Math.random() * 50 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 50,
              mass: 2,
              delay: i * 0.1,
            }}
            whileDrag={{ scale: 1.1 }}
          >
            {item}
          </motion.div>
        ))}
        <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      </div>
    )
  }
)

Gravity.displayName = "Gravity"
