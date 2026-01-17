"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string
}

/**
 * Native SpotlightCard - Mouse-tracking spotlight effect
 * Using Framer Motion's useMotionValue for smooth tracking
 */
export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  (
    {
      children,
      spotlightColor = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.15)",
      className,
      ...props
    },
    _ref
  ) => {
    const cardRef = React.useRef<HTMLDivElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const springConfig = { damping: 25, stiffness: 300 }
    const x = useSpring(mouseX, springConfig)
    const y = useSpring(mouseY, springConfig)

    const handleMouseMove = (e: any) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    return (
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative overflow-hidden rounded-(--radius) border border-border bg-surface p-6",
          className
        )}
        {...props}
      >
        {/* Spotlight effect */}
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${x}px ${y}px, ${spotlightColor}, transparent 40%)`,
          }}
        />
        {/* Content */}
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

SpotlightCard.displayName = "SpotlightCard"
