"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface InteractiveHoverButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {}

/**
 * Native InteractiveHoverButton - Mouse tracking hover effect
 */
export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, ...props }, ref) => {
  const [position, setPosition] = React.useState({ x: 50, y: 50 })

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setPosition({ x, y })
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn(
        "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg bg-brand px-8 font-medium text-white",
        className
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div
        className="absolute h-32 w-32 rounded-full bg-white/20 blur-xl transition-all duration-300"
        style={{
          left: `${position.x}%`,
          top: `${position.y}%`,
          transform: "translate(-50%, -50%)",
        }}
      />
    </motion.button>
  )
})

InteractiveHoverButton.displayName = "InteractiveHoverButton"
