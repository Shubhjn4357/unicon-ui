"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
// @ts-ignore
import Sparkles from "../special/meteors" // Reusing meteors for shared logic if needed, but here we build native

export interface ShootingStarsProps extends React.HTMLAttributes<HTMLDivElement> {
  minDelay?: number
  maxDelay?: number
  starColor?: string
  trailColor?: string
  starWidth?: number
  starHeight?: number
}

/**
 * Native ShootingStars - SVG animated shooting stars
 */
export const ShootingStars = React.forwardRef<HTMLDivElement, ShootingStarsProps>(
  (
    {
      minDelay = 1200,
      maxDelay = 4200,
      starColor = "#9E00FF",
      trailColor = "#2EB9DF",
      starWidth = 10,
      starHeight = 1,
      className,
      ...props
    },
    ref
  ) => {
    const [star, setStar] = React.useState<{
      x: number
      y: number
      angle: number
      scale: number
      speed: number
    } | null>(null)
    const svgRef = React.useRef<SVGSVGElement>(null)

    React.useEffect(() => {
      const createStar = () => {
        if (!svgRef.current) return
        const { width, height } = svgRef.current.getBoundingClientRect()
        const startX = Math.random() * width
        const startY = Math.random() * height
        const angle = Math.random() * 360
        const scale = 0.5 + Math.random()
        const speed = Math.random() * 20 + 10 // Speed factor

        setStar({ x: startX, y: startY, angle, scale, speed })

        const nextTick = Math.random() * (maxDelay - minDelay) + minDelay
        setTimeout(createStar, nextTick)
      }

      createStar()
    }, [minDelay, maxDelay])

    React.useEffect(() => {
      if (!star) return

      const moveStar = () => {
        setStar((prev) => {
          if (!prev) return null
          const newX = prev.x + Math.cos((prev.angle * Math.PI) / 180) * prev.speed
          const newY = prev.y + Math.sin((prev.angle * Math.PI) / 180) * prev.speed
          // Check bounds (simplified) - just fade out for now via CSS animation or logic
          return { ...prev, x: newX, y: newY }
        })
        requestAnimationFrame(moveStar)
      }
      const animId = requestAnimationFrame(moveStar)
      return () => cancelAnimationFrame(animId)
    }, [star])

    return (
      <div
        ref={ref}
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        {...props}
      >
        <svg ref={svgRef} className="w-full h-full">
          {star && (
            <rect
              x={star.x}
              y={star.y}
              width={starWidth * star.scale}
              height={starHeight}
              fill="url(#gradient)"
              transform={`rotate(${star.angle}, ${star.x + (starWidth * star.scale) / 2}, ${star.y + starHeight / 2})`}
            />
          )}
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
              <stop offset="100%" style={{ stopColor: starColor, stopOpacity: 1 }} />
            </linearGradient>
          </defs>
        </svg>
      </div>
    )
  }
)

ShootingStars.displayName = "ShootingStars"
