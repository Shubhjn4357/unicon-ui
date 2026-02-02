"use client"

import { motion } from "framer-motion"
import { useCallback, useEffect, useId, useRef, useState } from "react"

import { cn } from "../../lib/utils"

interface AnimatedGridPatternProps {
  width?: number
  height?: number
  x?: number
  y?: number
  strokeDasharray?: string | number
  numSquares?: number
  className?: string
  maxOpacity?: number
  duration?: number
  repeatDelay?: number
}

export function AnimatedGridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = 0,
  numSquares = 50,
  className,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
  ...props
}: AnimatedGridPatternProps) {
  const id = useId()
  const containerRef = useRef<SVGSVGElement>(null)
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [squares, setSquares] = useState<{ id: number; pos: [number, number] }[]>([])

  const getPos = useCallback(() => {
    return [
      Math.floor((Math.random() * dimensions.width) / width),
      Math.floor((Math.random() * dimensions.height) / height),
    ] as [number, number]
  }, [dimensions, width, height])

  // Initial squares generation
  useEffect(() => {
    setSquares(
      Array.from({ length: numSquares }, (_, i) => ({
        id: i,
        pos: [0, 0] as [number, number],
      }))
    )
  }, [numSquares])

  // Update squares with valid positions once dimensions are available
  useEffect(() => {
    if (dimensions.width && dimensions.height) {
      setSquares((prevSquares) =>
        prevSquares.map((sq) => ({
          ...sq,
          pos: getPos(),
        }))
      )
    }
  }, [dimensions, getPos])

  // Resize observer to update container dimensions
  useEffect(() => {
    const node = containerRef.current
    if (!node) return

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        })
      }
    })

    resizeObserver.observe(node)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <svg
      ref={containerRef}
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-muted-foreground/30 stroke-muted-foreground/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern id={id} width={width} height={height} patternUnits="userSpaceOnUse" x={x} y={y}>
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      <svg x={x} y={y} className="overflow-visible">
        {squares.map((sq) => (
          <motion.rect
            key={`sq-${sq.id}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: maxOpacity }}
            transition={{
              duration,
              repeat: 1,
              delay: sq.id * 0.1,
              repeatType: "reverse",
            }}
            onAnimationComplete={() => {
              setSquares((prev) =>
                prev.map((s) => (s.id === sq.id ? { ...s, pos: getPos() } : s))
              )
            }}
            width={width - 1}
            height={height - 1}
            x={sq.pos[0] * width + 1}
            y={sq.pos[1] * height + 1}
            fill="currentColor"
            strokeWidth="0"
          />
        ))}
      </svg>
    </svg>
  )
}
