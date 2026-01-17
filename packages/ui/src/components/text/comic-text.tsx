"use client"

import type React from "react"

import { cn } from "../../lib/utils"

interface ComicTextProps {
  children: React.ReactNode
  className?: string
}

export function ComicText({ children, className }: ComicTextProps) {
  return (
    <span
      className={cn(
        "relative inline-block font-black uppercase text-foreground transition-all duration-300 hover:-translate-y-1 hover:translate-x-1",
        className
      )}
      style={{
        filter: "drop-shadow(3px 3px 0 black) drop-shadow(6px 6px 0 var(--color-brand, #3b82f6))",
        transition: "filter 0.3s ease, transform 0.3s ease",
      }}
    >
      {children}
    </span>
  )
}
