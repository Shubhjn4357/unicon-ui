"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SpotlightProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  color?: string
}

/**
 * Native Spotlight

 - Mouse-following spotlight beam
 */
export const Spotlight = React.forwardRef<HTMLDivElement, SpotlightProps>(
  (
    { size = 600, color = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.15)", className, ...props },
    ref
  ) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 300 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    const background = useMotionTemplate`
      radial-gradient(${size}px circle at ${x}px ${y}px, ${color}, transparent 80%)
    `

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn("group relative", className)}
        {...props}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
      </div>
    )
  }
)

Spotlight.displayName = "Spotlight"
