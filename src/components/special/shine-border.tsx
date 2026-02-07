"use client"

import type * as React from "react"
import { cn } from "../../lib/utils"

export interface ShineBorderProps {
  children: React.ReactNode
  className?: string
  color?: string | string[]
  borderWidth?: number
  duration?: number
}

export function ShineBorder({
  children,
  className,
  color = "var(--primary)",
  borderWidth = 1,
  duration = 14,
}: ShineBorderProps) {
  return (
    <div
      className={cn(
        "relative flex h-full w-full items-center justify-center rounded-(--radius) border border-transparent bg-card p-px",
        className
      )}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-(--radius) transition-opacity"
        style={{
          background: Array.isArray(color) ? `linear-gradient(90deg, ${color.join(", ")})` : color,
          padding: borderWidth,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "exclude",
        }}
      />
      <div className="relative z-10 w-full h-full rounded-(--radius) bg-card overflow-hidden">
        {children}
      </div>
    </div>
  )
}
