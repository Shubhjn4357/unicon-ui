"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  spotlightColor?: string
}

/**
 * Spotlight Card - Card with mouse-following spotlight effect
 */
export const SpotlightCard = React.forwardRef<HTMLDivElement, SpotlightCardProps>(
  ({ children, spotlightColor = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.1)", className, ...props }, ref) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const cardRef = React.useRef<HTMLDivElement>(null)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!cardRef.current) return
      const rect = cardRef.current.getBoundingClientRect()
      setPosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    return (
      <div
        ref={(node) => {
          cardRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn("group relative overflow-hidden rounded-(--radius) border border-border bg-surface p-6 transition-all", className)}
        onMouseMove={handleMouseMove}
        {...props}
      >
        {/* Spotlight effect */}
        <div
          className="pointer-events-none absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            left: position.x,
            top: position.y,
            width: "300px",
            height: "300px",
            transform: "translate(-50%, -50%)",
            background: `radial-gradient(circle, ${spotlightColor} 0%, transparent 70%)`,
            transition: "left 0.2s ease, top 0.2s ease",
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    )
  }
)

SpotlightCard.displayName = "SpotlightCard"
