"use client"

import { motion, useAnimation } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  spotlightColor?: string
}

export function SpotlightCard({
  children,
  spotlightColor = "rgba(var(--primary-rgb), 0.15)",
  className,
  ...props
}: SpotlightCardProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [mouseX, setMouseX] = React.useState<number>(0)
  const [mouseY, setMouseY] = React.useState<number>(0)
  const [opacity, setOpacity] = React.useState<number>(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMouseX(e.clientX - rect.left)
    setMouseY(e.clientY - rect.top)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className={cn(
        "group relative overflow-hidden rounded-(--radius) border border-border bg-card p-6 transition-all duration-300",
        className
      )}
      {...props}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mouseX}px ${mouseY}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}
