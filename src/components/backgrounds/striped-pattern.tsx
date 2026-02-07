"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface StripedPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  stripeWidth?: number
  stripeColor?: string
  angle?: number
  animated?: boolean
  speed?: number
}

export const StripedPattern = React.forwardRef<HTMLDivElement, StripedPatternProps>(
  (
    {
      stripeWidth = 40,
      stripeColor = "rgba(var(--color-brand, 99, 102, 241), 0.05)",
      angle = 45,
      animated = true,
      speed = 20,
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
          backgroundSize: animated ? `${stripeWidth * 2}px ${stripeWidth * 2}px` : undefined,
          animation: animated ? `striped-move ${speed}s linear infinite` : undefined,
        }}
        {...props}
      />
    )
  }
)

StripedPattern.displayName = "StripedPattern"
