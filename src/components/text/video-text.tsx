"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface VideoTextProps extends React.HTMLAttributes<HTMLDivElement> {
  videoSrc: string
  text: string
}

/**
 * VideoText - High-end video-in-text masking component
 */
export function VideoText({ videoSrc, text, className, ...props }: VideoTextProps) {
  const [id] = React.useState(() => `mask-${Math.random().toString(36).substr(2, 9)}`)

  return (
    <div className={cn("relative inline-block w-full overflow-hidden", className)} {...props}>
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <svg className="relative w-full h-auto pointer-events-none select-none" viewBox="0 0 500 100">
        <defs>
          <mask id={id} x="0" y="0" width="100%" height="100%">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="50%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="font-black uppercase"
              style={{ fontSize: "60px" }}
              fill="black"
            >
              {text}
            </text>
          </mask>
        </defs>
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          className="fill-background"
          mask={`url(#${id})`}
        />
      </svg>
    </div>
  )
}
