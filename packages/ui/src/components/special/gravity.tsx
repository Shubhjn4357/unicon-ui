"use client"

import { motion,  } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"
// Matter.js is heavy, using Framer Motion physics for "Gravity" simulation

export interface GravityProps extends React.HTMLAttributes<HTMLDivElement> {
  items: React.ReactNode[]
}

/**
 * Native Gravity - Elements falling with physics (Simulated)
 */
export const Gravity = React.forwardRef<HTMLDivElement, GravityProps>(
  ({ items, className, ...props }, ref) => {
    const containerRef = React.useRef<HTMLDivElement>(null)

    return (
      <div
        ref={ref} // Fixed: pass ref properly
        className={cn("relative h-[400px] w-full border overflow-hidden bg-surface", className)}
        {...props}
      >
        {items.map((item, i) => (
          <motion.div
            key={i}
            drag
            dragConstraints={containerRef}
            className="absolute rounded-full bg-brand p-4 text-white shadow-lg cursor-grab active:cursor-grabbing"
            initial={{ y: -100, x: Math.random() * 400 }}
            animate={{ y: 350 - Math.random() * 50 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 50,
              mass: 2,
              delay: i * 0.2,
            }}
            whileDrag={{ scale: 1.2 }}
          >
            {item}
          </motion.div>
        ))}
        {/* Invisible container for drag constraints if needed, but using ref directly usually works if attached to parent. 
            Here we attach ref to parent div but dragConstraints needs a ref object. 
        */}
        <div ref={containerRef} className="absolute inset-0 pointer-events-none" />
      </div>
    )
  }
)

Gravity.displayName = "Gravity"
