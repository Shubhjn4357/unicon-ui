"use client"

import { COLOR_TOKENS } from "@/constants/color-tokens"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import React from "react"

interface GlowBorderCardProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColors?: string[]
  borderWidth?: number
}

export const GlowBorderCard = ({
  children,
  className,
  glowColors = [COLOR_TOKENS.NEON_ACCENT, COLOR_TOKENS.NEON_PRIMARY, COLOR_TOKENS.NEON_ACCENT],
  borderWidth = 2,
  ...props
}: GlowBorderCardProps) => {
  return (
    <div
      className={cn("group relative grid place-items-center rounded-xl bg-card", className)}
      style={
        {
          "--glow-color-1": glowColors[0],
          "--glow-color-2": glowColors[1],
          "--glow-color-3": glowColors[2],
          "--border-width": `${borderWidth}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      <div
        className={cn(
          "absolute inset-0 rounded-[inherit] opacity-60 transition-opacity duration-500 group-hover:opacity-100",
          "glow-conic blur-xl"
        )}
      />
      <div className={cn("glow-conic absolute inset-0 rounded-[inherit]")} />
      <div className="relative z-10 h-[calc(100%-var(--border-width)*2)] w-[calc(100%-var(--border-width)*2)] rounded-[calc(0.75rem-var(--border-width))] bg-card p-6 text-card-foreground">
        {children}
      </div>
    </div>
  )
}
GlowBorderCard.displayName = "GlowBorderCard"
