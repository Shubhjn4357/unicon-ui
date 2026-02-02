"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface DottedMapProps extends React.HTMLAttributes<HTMLDivElement> {
  dots?: Array<{ lat: number; lng: number; label?: string }>
  dotColor?: string
  dotSize?: number
  gridSize?: number
}

/**
 * Dotted Map - World map visualization with dots
 */
export const DottedMap = React.forwardRef<HTMLDivElement, DottedMapProps>(
  (
    {
      dots = [],
      dotColor = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.6)",
      dotSize = 4,
      gridSize = 20,
      className,
      ...props
    },
    ref
  ) => {
    // Simple world map outline using dots
    const mapDots = React.useMemo(() => {
      const result: Array<{ x: number; y: number }> = []

      // Create a dotted grid representing continents (simplified)
      const continents = [
        // North America
        { startX: 0.15, endX: 0.35, startY: 0.2, endY: 0.45 },
        // South America
        { startX: 0.2, endX: 0.35, startY: 0.45, endY: 0.75 },
        // Europe
        { startX: 0.45, endX: 0.6, startY: 0.15, endY: 0.4 },
        // Africa
        { startX: 0.45, endX: 0.65, startY: 0.35, endY: 0.7 },
        // Asia
        { startX: 0.55, endX: 0.85, startY: 0.1, endY: 0.5 },
        // Australia
        { startX: 0.75, endX: 0.9, startY: 0.55, endY: 0.75 },
      ]

      continents.forEach((continent) => {
        for (let x = continent.startX; x <= continent.endX; x += 0.02) {
          for (let y = continent.startY; y <= continent.endY; y += 0.02) {
            if (Math.random() > 0.3) {
              result.push({ x, y })
            }
          }
        }
      })

      return result
    }, [])

    // Convert lat/lng to x/y coordinates
    const convertCoords = (lat: number, lng: number) => {
      const x = ((lng + 180) / 360) * 100
      const y = ((90 - lat) / 180) * 100
      return { x, y }
    }

    return (
      <div
        ref={ref}
        className={cn(
          "relative h-full w-full overflow-hidden rounded-lg bg-[hsl(var(--card))]",
          className
        )}
        {...props}
      >
        {/* World map dots */}
        <svg
          className="absolute inset-0 h-full w-full"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
        >
          {mapDots.map((dot, idx) => (
            <circle
              key={idx}
              cx={dot.x}
              cy={dot.y}
              r={0.15}
              fill="rgba(var(--color-foreground-rgb, 0, 0, 0), 0.2)"
              className="transition-opacity hover:opacity-100"
            />
          ))}

          {/* User-provided dots */}
          {dots.map((dot, idx) => {
            const coords = convertCoords(dot.lat, dot.lng)
            return (
              <g key={`marker-${idx}`}>
                <motion.circle
                  cx={coords.x}
                  cy={coords.y}
                  r={0.5}
                  fill={dotColor}
                  initial={{ scale: 0 }}
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: idx * 0.2,
                  }}
                />
                {dot.label && (
                  <text
                    x={coords.x}
                    y={coords.y - 1}
                    fontSize="2"
                    fill="currentColor"
                    textAnchor="middle"
                    className="text-xs"
                  >
                    {dot.label}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
      </div>
    )
  }
)

DottedMap.displayName = "DottedMap"
