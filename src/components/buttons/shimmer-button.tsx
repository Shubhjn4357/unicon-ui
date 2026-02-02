"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ShimmerButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode
  shimmerColor?: string
  shimmerSize?: string
}

/**
 * Native ShimmerButton - Shine/shimmer effect on hover
 */
export const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      children,
      className,
      shimmerColor = "rgba(255, 255, 255, 0.3)",
      shimmerSize = "200%",
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg bg-[hsl(var(--primary))] px-8 font-medium text-white transition-all duration-200",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <motion.div
          className="absolute inset-0 -translate-x-full"
          style={{
            background: `linear-gradient(90deg, transparent, ${shimmerColor}, transparent)`,
            width: shimmerSize,
          }}
          animate={{
            translateX: ["-100%", "200%"],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      </motion.button>
    )
  }
)

ShimmerButton.displayName = "ShimmerButton"
