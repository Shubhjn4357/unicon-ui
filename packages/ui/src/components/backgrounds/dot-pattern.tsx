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
  interactive?: boolean
  maxDistance?: number
}

/**
 * Native DotPattern - SVG dot background pattern with optional mouse interaction
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
      interactive = true,
      maxDistance = 150,
      className,
      ...props
    },
    ref
  ) => {
    const id = React.useId()
    const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 })
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      if (!interactive) return undefined

      const onMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }

      const container = containerRef.current
      if (container) {
        container.addEventListener("mousemove", onMouseMove)
        return () => container.removeEventListener("mousemove", onMouseMove)
      }

      return undefined
    }, [interactive])

    return (
      <div
        ref={(node) => {
          containerRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn("pointer-events-auto absolute inset-0", className)}
        {...props}
      >
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
            {interactive && (
              <filter id={`${id}-glow`}>
                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                <feMerge>
                  <feMergeNode in="coloredBlur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            )}
          </defs>
          <rect width="100%" height="100%" fill={`url(#${id})`} />
          {interactive && (
            <circle
              cx={mousePosition.x}
              cy={mousePosition.y}
              r={maxDistance}
              fill={dotColor}
              opacity="0.15"
              filter={`url(#${id}-glow)`}
              style={{
                transition: "cx 0.1s ease-out, cy 0.1s ease-out",
              }}
            />
          )}
        </svg>
      </div>
    )
  }
)

DotPattern.displayName = "DotPattern"
