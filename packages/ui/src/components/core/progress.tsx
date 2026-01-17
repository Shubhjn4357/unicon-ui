"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  variant?: "default" | "success" | "warning" | "error"
  showLabel?: boolean
  animated?: boolean
}

export const Progress = React.forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value = 0,
      max = 100,
      variant = "default",
      showLabel = false,
      animated = true,
      className,
      ...props
    },
    ref
  ) => {
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100)

    const variantStyles = {
      default: "bg-brand",
      success: "bg-green-500",
      warning: "bg-yellow-500",
      error: "bg-red-500",
    }

    return (
      <div ref={ref} className={cn("relative w-full", className)} {...props}>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-elevated">
          <motion.div
            className={cn("h-full rounded-full transition-colors", variantStyles[variant])}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{
              duration: animated ? 0.5 : 0,
              ease: "easeOut",
            }}
          />
        </div>
        {showLabel && (
          <div className="mt-1 text-right text-xs text-foreground-secondary">
            {Math.round(percentage)}%
          </div>
        )}
      </div>
    )
  }
)

Progress.displayName = "Progress"
