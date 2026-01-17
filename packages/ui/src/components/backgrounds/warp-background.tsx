"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface WarpBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  perspective?: number
  beamColor?: string
  lineCount?: number
}

/**
 * Native WarpBackground - Star wars hyperspace warp tunnel effect
 */
export const WarpBackground = React.forwardRef<HTMLDivElement, WarpBackgroundProps>(
  (
    { perspective = 100, beamColor = "rgba(255, 255, 255, 0.5)", lineCount = 30, className, ...props },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 overflow-hidden bg-black", className)}
        style={{ perspective: `${perspective}px` }}
        {...props}
      >
        {/* Radial warp lines */}
        <div className="absolute inset-0">
          {[...Array(lineCount)].map((_, i) => {
            const angle = (360 / lineCount) * i
            return (
              <motion.div
                key={`line-${i}`}
                className="absolute top-1/2 left-1/2 origin-left h-0.5"
                style={{
                  background: `linear-gradient(to right, transparent, ${beamColor})`,
                  transformOrigin: "0 50%",
                  transform: `rotate(${angle}deg)`,
                  width: "50%",
                }}
                animate={{
                  scaleX: [1, 1.5, 1],
                  opacity: [0.3, 0.8, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: (i / lineCount) * 2,
                }}
              />
            )
          })}
        </div>

        {/* Star particles */}
        <div
          className="absolute inset-0"
          style={{
            transformStyle: "preserve-3d",
            transform: "translateZ(0)",
          }}
        >
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={`star-${i}`}
              className="absolute top-1/2 left-1/2 h-1 w-1 rounded-full"
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
                z: [0, perspective * 15],
                opacity: [0, 1, 0],
                scale: [0.5, 10],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeIn",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </div>
    )
  }
)

WarpBackground.displayName = "WarpBackground"
