"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface GooeyButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  backgroundColor?: string
  foregroundColor?: string
}

/**
 * Native GooeyButton - Gooey SVG filter effect
 */
export const GooeyButton = React.forwardRef<HTMLButtonElement, GooeyButtonProps>(
  (
    { children, className, backgroundColor = "#3b82f6", foregroundColor = "#ffffff", ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          "relative overflow-hidden rounded-lg bg-[hsl(var(--primary))] px-8 py-3 font-bold text-white transition-all hover:bg-[hsl(var(--primary))]/90",
          className
        )}
        style={{ filter: "url(#gooey)" }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        <div className="absolute inset-0 bg-white/20" />
        <svg className="hidden">
          <defs>
            <filter id="gooey">
              <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>
      </button>
    )
  }
)

GooeyButton.displayName = "GooeyButton"
