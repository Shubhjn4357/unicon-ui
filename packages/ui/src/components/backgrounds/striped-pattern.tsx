"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface StripedPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  stripeWidth?: number
  stripeColor?: string
  angle?: number
}

export const StripedPattern = React.forwardRef<HTMLDivElement, StripedPatternProps>(
  (
    {
      stripeWidth = 40,
      stripeColor = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.05)",
      angle = 45,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0", className)}
        style={{
          background: `repeating-linear-gradient(
            ${angle}deg,
            transparent,
            transparent ${stripeWidth / 2}px,
            ${stripeColor} ${stripeWidth / 2}px,
            ${stripeColor} ${stripeWidth}px
          )`,
        }}
        {...props}
      />
    )
  }
)

StripedPattern.displayName = "StripedPattern"
