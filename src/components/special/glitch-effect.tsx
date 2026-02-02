"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface GlitchEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  text: string
}

/**
 * Native GlitchEffect - Cyberpunk text glitch
 */
export const GlitchEffect = React.forwardRef<HTMLDivElement, GlitchEffectProps>(
  ({ text, className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("relative inline-block font-mono font-bold", className)}
        {...props}
      >
        <span className="relative z-10">{text}</span>
        <span
          className="absolute top-0 left-0 -z-10 translate-x-[2px] text-red-500 opacity-70 animate-pulse"
          style={{ clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)" }}
        >
          {text}
        </span>
        <span
          className="absolute top-0 left-0 -z-10 -translate-x-[2px] text-blue-500 opacity-70 animate-pulse"
          style={{
            clipPath: "polygon(0 80%, 100% 20%, 100% 100%, 0 100%)",
            animationDelay: "0.1s",
          }}
        >
          {text}
        </span>
      </div>
    )
  }
)

GlitchEffect.displayName = "GlitchEffect"
