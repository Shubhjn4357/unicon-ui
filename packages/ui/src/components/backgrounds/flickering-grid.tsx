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
  interactive?: boolean
  interactionRadius?: number
}

/**
 * Native FlickeringGrid - Randomized flickering grid squares with mouse interaction
 */
export const FlickeringGrid = React.forwardRef<HTMLDivElement, FlickeringGridProps>(
  (
    {
      squareSize = 4,
      gridGap = 6,
      flickerChance = 0.3,
      color = "rgb(var(--color-brand-rgb, 99, 102, 241))",
      maxOpacity = 0.3,
      interactive = true,
      interactionRadius = 200,
      className,
      ...props
      // @ts-ignore
    },
    fwRef
  ) => {
    const [squares, setSquares] = React.useState<Array<{ id: number; opacity: number; x: number; y: number }>>([])
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 })
    const containerRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const cols = Math.floor(window.innerWidth / (squareSize + gridGap))
      const rows = Math.floor(window.innerHeight / (squareSize + gridGap))
      const newSquares = Array.from({ length: cols * rows }).map((_, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        return {
          id: i,
          opacity: Math.random() * maxOpacity,
          x: col * (squareSize + gridGap) + squareSize / 2,
          y: row * (squareSize + gridGap) + squareSize / 2,
        }
      })
      setSquares(newSquares)
    }, [squareSize, gridGap, maxOpacity])

    React.useEffect(() => {
      if (!interactive) return undefined

      const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef.current) return
        const rect = containerRef.current.getBoundingClientRect()
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      }

      const container = containerRef.current
      if (container) {
        container.addEventListener("mousemove", handleMouseMove)
        return () => container.removeEventListener("mousemove", handleMouseMove)
      }

      return undefined
    }, [interactive])

    React.useEffect(() => {
      const interval = setInterval(() => {
        setSquares((prev) =>
          prev.map((sq) => {
            let baseFlicker = Math.random() < flickerChance ? Math.random() * maxOpacity : sq.opacity * 0.9

            if (interactive) {
              const distance = Math.sqrt(Math.pow(sq.x - mousePos.x, 2) + Math.pow(sq.y - mousePos.y, 2))
              if (distance < interactionRadius) {
                const intensity = 1 - distance / interactionRadius
                baseFlicker = Math.max(baseFlicker, intensity * maxOpacity * 2)
              }
            }

            return {
              ...sq,
              opacity: baseFlicker,
            }
          })
        )
      }, 100)

      return () => clearInterval(interval)
    }, [flickerChance, maxOpacity, interactive, mousePos, interactionRadius])

    const cols = Math.floor(
      (typeof window !== "undefined" ? window.innerWidth : 1000) / (squareSize + gridGap)
    )

    return (
      <div
        ref={(node) => {
          containerRef.current = node
          if (typeof fwRef === "function") fwRef(node)
          else if (fwRef) fwRef.current = node
        }}
        className={cn("pointer-events-auto absolute inset-0", className)}
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
