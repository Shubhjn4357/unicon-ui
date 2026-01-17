"use client"

import { motion, type HTMLMotionProps, useMotionTemplate, useMotionValue } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface MagicCardProps extends HTMLMotionProps<"div"> {
  children?: React.ReactNode
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
}

/**
 * Native MagicCard - Mouse-following gradient highlight
 */
export const MagicCard = React.forwardRef<HTMLDivElement, MagicCardProps>(
  (
    {
      children,
      gradientSize = 200,
      gradientColor = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.2)",
      gradientOpacity = 0.8,
      className,
      ...props
    },
    ref
  ) => {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      mouseX.set(e.clientX - rect.left)
      mouseY.set(e.clientY - rect.top)
    }

    const background = useMotionTemplate`
      radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px, ${gradientColor}, transparent 80%)
    `

    return (
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        className={cn(
          "group relative overflow-hidden rounded-(--radius) border border-border bg-surface p-6",
          className
        )}
        {...props}
      >
        <motion.div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{ background }}
        />
        <div className="relative z-10">{children}</div>
      </motion.div>
    )
  }
)

MagicCard.displayName = "MagicCard"
