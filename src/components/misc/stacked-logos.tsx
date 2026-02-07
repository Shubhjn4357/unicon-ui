"use client"

import type React from "react"
import { cn } from "../../lib/utils"

interface StackedLogosProps {
  items: React.ReactNode[]
  className?: string
}

export const StackedLogos = ({ items, className }: StackedLogosProps) => {
  return (
    <div className={cn("stacked-logos group relative flex gap-4", className)}>
      {items.map((item, i) => (
        <div
          key={i}
          className="relative transition-all duration-500 hover:-translate-y-2! hover:grayscale-0! group-hover:translate-y-2 group-hover:grayscale"
          style={{ transitionDelay: `${i * 50}ms` }}
        >
          {item}
        </div>
      ))}
    </div>
  )
}
StackedLogos.displayName = "StackedLogos"
