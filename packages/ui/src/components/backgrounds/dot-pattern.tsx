"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number
  height?: number
  x?: number
  y?: number
  cx?: number
  cy?: number
  cr?: number
  dotColor?: string
}

/**
 * Native DotPattern - SVG dot background pattern
 */
export const DotPattern = React.forwardRef<HTMLDivElement, DotPatternProps>(
  (
    {
      width = 16,
      height = 16,
      x = 0,
      y = 0,
      cx = 0.5,
      cy = 0.5,
      cr = 0.5,
      dotColor = "currentColor",
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
              patternContentUnits="userSpaceOnUse"
              x={x}
              y={y}
            >
              <circle cx={width * cx} cy={height * cy} r={cr} fill={dotColor} />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
        </svg>
      </div>
    )
  }
)

DotPattern.displayName = "DotPattern"
