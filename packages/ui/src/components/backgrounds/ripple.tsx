"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface RippleProps extends React.HTMLAttributes<HTMLDivElement> {
  mainCircleSize?: number
  mainCircleOpacity?: number
  numCircles?: number
}

/**
 * Native Ripple - Radial ripple wave effect
 */
export const Ripple = React.forwardRef<HTMLDivElement, RippleProps>(
  (
    { mainCircleSize = 210, mainCircleOpacity = 0.24, numCircles = 8, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none absolute inset-0 flex items-center justify-center",
          className
        )}
        {...props}
      >
        {Array.from({ length: numCircles }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-brand/30"
            style={{
              width: mainCircleSize + i * 70,
              height: mainCircleSize + i * 70,
              opacity: mainCircleOpacity - i * 0.03,
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [
                mainCircleOpacity - i * 0.03,
                (mainCircleOpacity - i * 0.03) * 0.5,
                mainCircleOpacity - i * 0.03,
              ],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    )
  }
)

Ripple.displayName = "Ripple"
