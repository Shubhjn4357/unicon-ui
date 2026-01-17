"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface GridPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string
  strokeWidth?: number
  strokeColor?: string
}

/**
 * Native GridPattern - SVG grid background pattern
 */
export const GridPattern = React.forwardRef<HTMLDivElement, GridPatternProps>(
  (
    {
      width = 40,
      height = 40,
      x = -1,
      y = -1,
      strokeDasharray = "0",
      strokeWidth = 1,
      strokeColor = "currentColor",
      className,
      ...props
    },
    ref
  ) => {
    const id = React.useId()

    return (
      <div ref={ref} className={cn("pointer-events-none absolute inset-0", className)} {...props}>
        <svg className="h-full w-full">
          <defs>
            <pattern
              id={id}
              width={width}
              height={height}
              patternUnits="userSpaceOnUse"
              x={x}
              y={y}
            >
              <path
                d={`M.5 ${height}V.5H${width}`}
                fill="none"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                strokeDasharray={strokeDasharray}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} opacity="0.5" />
        </svg>
      </div>
    )
  }
)

GridPattern.displayName = "GridPattern"
