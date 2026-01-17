"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface GlobeProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
}

/**
 * Native Globe - Simple 3D-looking globe with CSS
 */
export const Globe = React.forwardRef<HTMLDivElement, GlobeProps>(
  ({ size = 300, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative flex items-center justify-center", className)}
        style={{ width: size, height: size }}
        {...props}
      >
        <motion.div
          className="absolute rounded-full border-2 border-brand/20"
          style={{ width: size, height: size }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 h-full w-px bg-linear-to-b from-transparent via-brand/20 to-transparent"
              style={{
                transform: `translate(-50%, -50%) rotate(${i * 45}deg)`,
              }}
            />
          ))}
        </motion.div>
        <div
          className="absolute rounded-full bg-linear-to-br from-brand/10 to-accent/10"
          style={{ width: size * 0.9, height: size * 0.9 }}
        />
      </div>
    )
  }
)

Globe.displayName = "Globe"
