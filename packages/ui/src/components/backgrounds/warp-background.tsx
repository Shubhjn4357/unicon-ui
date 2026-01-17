"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface WarpBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  perspective?: number
  beamColor?: string
}

/**
 * Native WarpBackground - Star wars hyperspace effect
 */
export const WarpBackground = React.forwardRef<HTMLDivElement, WarpBackgroundProps>(
  ({ perspective = 100, beamColor = "rgba(255, 255, 255, 0.5)", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-black", className)}
        style={{ perspective: `${perspective}px` }}
        {...props}
      >
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)",
          }}
        >
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 h-0.5 w-0.5 rounded-full"
              style={{
                background: beamColor,
                boxShadow: `0 0 10px 2px ${beamColor}`,
              }}
              initial={{
                x: (Math.random() - 0.5) * window.innerWidth,
                y: (Math.random() - 0.5) * window.innerHeight,
                z: 0,
                opacity: 0,
                scale: 0.5,
              }}
              animate={{
                z: [0, 1000],
                opacity: [0, 1, 0],
                scale: [0.5, 5],
              }}
              transition={{
                duration: Math.random() * 2 + 1,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>
    )
  }
)

WarpBackground.displayName = "WarpBackground"
