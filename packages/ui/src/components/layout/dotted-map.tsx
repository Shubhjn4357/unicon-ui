"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface DottedMapProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string
}

/**
 * Native DottedMap - SVG dot map of world
 */
export const DottedMap = React.forwardRef<HTMLDivElement, DottedMapProps>(
  ({ color = "currentColor", className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative w-full opacity-50", className)} {...props}>
        <svg viewBox="0 0 1000 500" className="h-full w-full" style={{ color }}>
          {/* Simplified world map dot pattern - normally would contain many circle elements */}
          {/* Using a pattern fill for simulation as generating 1000s of dots manually is too large */}
          <defs>
            <pattern
              id="dot-pattern"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.5" fill={color} />
            </pattern>
            <mask id="world-mask">
              <rect width="100%" height="100%" fill="black" />
              {/* Simplified Continents paths - rough approximation */}
              <path
                d="M150,150 Q300,50 400,150 T800,150"
                stroke="white"
                strokeWidth="100"
                fill="none"
              />
              <path
                d="M200,350 Q400,450 600,350 T900,350"
                stroke="white"
                strokeWidth="80"
                fill="none"
              />
              {/* Real implementations use a heavy SVG path for the mask */}
            </mask>
          </defs>
          <rect width="100%" height="100%" fill="url(#dot-pattern)" mask="url(#world-mask)" />
        </svg>
      </div>
    )
  }
)

DottedMap.displayName = "DottedMap"
