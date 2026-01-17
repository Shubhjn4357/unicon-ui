"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface StarsProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number
}

/**
 * Native Stars - Static or twinkling background stars
 */
export const Stars = React.forwardRef<HTMLDivElement, StarsProps>(
  ({ quantity = 100, className, ...props }, ref) => {
    const stars = React.useMemo(() => {
      return Array.from({ length: quantity }).map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: Math.random() * 2 + 1,
        animationDelay: `${Math.random() * 5}s`,
      }))
    }, [quantity])

    return (
      <div
        ref={ref}
        className={cn("absolute inset-0 overflow-hidden bg-black", className)}
        {...props}
      >
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              animationDelay: star.animationDelay,
              opacity: Math.random(),
            }}
          />
        ))}
      </div>
    )
  }
)

Stars.displayName = "Stars"
