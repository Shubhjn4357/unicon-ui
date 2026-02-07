"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"
import { COLOR_TOKENS } from "../../constants/color-tokens"

export interface GlowButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode
  glowColor?: string
  glowIntensity?: number
}

/**
 * GlowButton - Button with animated glow effect
 * Features pulsing glow animation with customizable color and intensity
 */
export const GlowButton = React.forwardRef<HTMLButtonElement, GlowButtonProps>(
  ({ children, className, glowColor = COLOR_TOKENS.GLOW_SUCCESS, glowIntensity = 20, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg px-8 font-medium",
          "bg-linear-to-r from-brand to-green-600 text-white shadow-lg",
          "transition-all duration-300 hover:scale-105 hover:shadow-xl",
          className
        )}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {/* Animated glow */}
        <motion.div
          className="absolute inset-0 -z-10 rounded-lg blur-xl"
          style={{
            background: glowColor,
          }}
          animate={{
            opacity: [0.5, 0.8, 0.5],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />

        {/* Content */}
        <span className="relative z-10">{children}</span>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: "200%" }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
            repeatDelay: 1,
          }}
        />
      </motion.button>
    )
  }
)

GlowButton.displayName = "GlowButton"
