"use client"

import React from "react"
import { cn } from "../../lib/utils"

// Note: True Liquid Text usually requires Three.js or SVG filters.
// This is a CSS filter based approximation for the design requirement.
export const LiquidText = ({
  children,
  className,
}: {
  children: string
  className?: string
}) => {
  return (
    <div className={cn("relative mx-auto w-fit", className)}>
      <h1 className="relative z-10 text-6xl font-black text-foreground mix-blend-multiply dark:mix-blend-difference">
        {children}
      </h1>
      <div className="absolute -inset-2 z-0 animate-pulse bg-linear-to-r from-primary via-accent to-secondary opacity-50 blur-xl filter" />
      <svg className="hidden">
        <filter id="liquid">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.01 0.01"
            numOctaves="1"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="20"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>
    </div>
  )
}
LiquidText.displayName = "LiquidText"
