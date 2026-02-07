"use client"

import type React from "react"
import { cn } from "../../lib/utils"

export const FlipText = ({
  text,
  className,
}: {
  text: string
  className?: string
}) => {
  return (
    <div className={cn("flex overflow-hidden text-4xl font-bold leading-tight", className)}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          data-char={char}
          className="flip-char relative inline-block whitespace-pre"
          style={
            {
              "--flip-delay": `${i * 0.05}s`,
            } as React.CSSProperties
          }
        >
          {char}
        </span>
      ))}
    </div>
  )
}
FlipText.displayName = "FlipText"
