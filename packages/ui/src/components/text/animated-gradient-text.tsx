"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface AnimatedGradientTextProps
  extends Omit<
    React.HTMLAttributes<HTMLSpanElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  children: React.ReactNode
}

/**
 * Native AnimatedGradientText - Animated gradient text
 * Pure CSS gradient animation
 */
export const AnimatedGradientText = React.forwardRef<HTMLSpanElement, AnimatedGradientTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.span
        ref={ref}
        className={cn(
          "inline-block bg-linear-to-r from-brand via-accent to-brand bg-size-[200%_auto] bg-clip-text text-transparent",
          className
        )}
        animate={{
          backgroundPosition: ["0% center", "200% center"],
        }}
        transition={{
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        {...props}
      >
        {children}
      </motion.span>
    )
  }
)

AnimatedGradientText.displayName = "AnimatedGradientText"

export interface AnimatedShinyTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  shimmerWidth?: number
}

export const AnimatedShinyText = React.forwardRef<HTMLSpanElement, AnimatedShinyTextProps>(
  ({ children, shimmerWidth = 100, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn("group relative inline-block overflow-hidden", className)}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <motion.span
          className="absolute inset-0 z-0 bg-linear-to-r from-transparent via-white/30 to-transparent"
          style={{ width: `${shimmerWidth}%` }}
          animate={{
            x: ["-100%", "200%"],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </span>
    )
  }
)

AnimatedShinyText.displayName = "AnimatedShinyText"
