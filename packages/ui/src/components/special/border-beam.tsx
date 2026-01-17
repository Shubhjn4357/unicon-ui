"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  duration?: number
  delay?: number
  colorFrom?: string
  colorTo?: string
}

/**
 * Native BorderBeam - Animated glowing border
 * Using conic gradient and rotation animation
 */
export const BorderBeam = React.forwardRef<HTMLDivElement, BorderBeamProps>(
  (
    {
      size = 300,
      duration = 15,
      delay = 0,
      colorFrom = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.5)",
      colorTo = "transparent",
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none absolute inset-0 overflow-hidden rounded-[inherit]",
          className
        )}
        {...props}
      >
        <motion.div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: `conic-gradient(from 0deg, ${colorTo}, ${colorFrom}, ${colorTo})`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration,
            delay,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <div className="absolute inset-[2px] rounded-[inherit] bg-surface" />
      </div>
    )
  }
)

BorderBeam.displayName = "BorderBeam"
