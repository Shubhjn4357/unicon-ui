"use client"

import { cn } from "../../lib/utils"

interface NoiseOverlayProps {
  className?: string
  opacity?: number
}

export function NoiseOverlay({ 
  className, 
  opacity = 0.05 
}: NoiseOverlayProps) {
  return (
    <div 
      className={cn(
        "pointer-events-none fixed inset-0 z-50 h-screen w-screen",
        className
      )}
      style={{
        opacity: opacity,
      }}
    >
       <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <filter id="noiseFilter">
          <feTurbulence 
            type="fractalNoise" 
            baseFrequency="0.8" 
            numOctaves="3" 
            stitchTiles="stitch" 
          />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
    </div>
  )
}
