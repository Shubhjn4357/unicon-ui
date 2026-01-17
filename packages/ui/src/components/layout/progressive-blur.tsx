"use client"


import * as React from "react"
import { cn } from "../../lib/utils"

export interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "top" | "bottom" | "left" | "right"
  blurIntensity?: number
}

/**
 * Native ProgressiveBlur - Gradient blur overlay
 */
export const ProgressiveBlur = React.forwardRef<HTMLDivElement, ProgressiveBlurProps>(
  ({ direction = "bottom", blurIntensity = 10, className, ...props }, ref) => {
    const masks = {
      bottom: "linear-gradient(to bottom, transparent, black)",
      top: "linear-gradient(to top, transparent, black)",
      left: "linear-gradient(to left, transparent, black)",
      right: "linear-gradient(to right, transparent, black)",
    }

    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 z-10", className)}
        style={{
          backdropFilter: `blur(${blurIntensity}px)`,
          WebkitBackdropFilter: `blur(${blurIntensity}px)`,
          maskImage: masks[direction],
          WebkitMaskImage: masks[direction],
        }}
        {...props}
      />
    )
  }
)

ProgressiveBlur.displayName = "ProgressiveBlur"
