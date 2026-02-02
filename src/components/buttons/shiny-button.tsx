"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ShinyButtonProps
  extends Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {}

/**
 * Native ShinyButton - Metallic shine reflection effect
 */
export const ShinyButton = React.forwardRef<HTMLButtonElement, ShinyButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg bg-linear-to-r from-brand to-accent px-8 font-medium text-white shadow-lg transition-transform",
          className
        )}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 -translate-x-full transform-gpu opacity-0 transition-all duration-700 ease-out group-hover:translate-x-full group-hover:opacity-100">
          <div className="h-full w-full bg-linear-to-r from-transparent via-white/20 to-transparent skew-x-12" />
        </div>
      </motion.button>
    )
  }
)

ShinyButton.displayName = "ShinyButton"
