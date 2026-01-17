"use client"

import * as React from "react"
// import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export interface FlickeringGridProps extends React.HTMLAttributes<HTMLDivElement> {
  squareSize?: number
  gridGap?: number
  flickerChance?: number
  color?: string
  maxOpacity?: number
}

/**
 * Native FlickeringGrid - Randomized flickering grid squares
 */
export const FlickeringGrid = React.forwardRef<HTMLDivElement, FlickeringGridProps>(
  (
    {
      squareSize = 4,
      gridGap = 6,
      flickerChance = 0.3,
      color = "rgb(var(--color-brand-rgb, 99, 102, 241))",
      maxOpacity = 0.3,
      className,
      ...props
      // @ts-ignore
    },
    fwRef
  ) => {
    const [squares, setSquares] = React.useState<Array<{ id: number; opacity: number }>>([])

    React.useEffect(() => {
      const interval = setInterval(() => {
        setSquares((prev) =>
          prev.map((sq) => ({
            ...sq,
            opacity: Math.random() < flickerChance ? Math.random() * maxOpacity : sq.opacity * 0.9,
          }))
        )
      }, 100)

      return () => clearInterval(interval)
    }, [flickerChance, maxOpacity])

    React.useEffect(() => {
      const cols = Math.floor(window.innerWidth / (squareSize + gridGap))
      const rows = Math.floor(window.innerHeight / (squareSize + gridGap))
      const newSquares = Array.from({ length: cols * rows }).map((_, i) => ({
        id: i,
        opacity: Math.random() * maxOpacity,
      }))
      setSquares(newSquares)
    }, [squareSize, gridGap, maxOpacity])

    const cols = Math.floor(
      (typeof window !== "undefined" ? window.innerWidth : 1000) / (squareSize + gridGap)
    )

    return (
      <div
        ref={fwRef}
        className={cn("pointer-events-none absolute inset-0", className)}
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${cols}, ${squareSize}px)`,
          gap: `${gridGap}px`,
        }}
        {...props}
      >
        {squares.map((square) => (
          <div
            key={square.id}
            style={{
              width: squareSize,
              height: squareSize,
              backgroundColor: color,
              opacity: square.opacity,
              transition: "opacity 0.1s ease",
            }}
          />
        ))}
      </div>
    )
  }
)

FlickeringGrid.displayName = "FlickeringGrid"
