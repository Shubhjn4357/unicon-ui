"use client"

import * as React from "react"
// import { motion } from "framer-motion"
import { cn } from "../../lib/utils"

export interface RainbowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

/**
 * Native RainbowButton - Animated rainbow gradient border
 */
export const RainbowButton = React.forwardRef<HTMLButtonElement, RainbowButtonProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "group relative inline-flex h-11 items-center justify-center rounded-xl px-8 font-medium text-white transition-all duration-200 active:scale-95 overflow-hidden",
          "before:absolute before:inset-0 before:rounded-xl before:p-[2px]",
          "before:bg-[conic-gradient(from_var(--angle,0deg),#ff0000,#ff7f00,#ffff00,#00ff00,#0000ff,#4b0082,#9400d3,#ff0000)]",
          "before:animate-[spin_3s_linear_infinite]",
          "before:-z-10",
          className
        )}
        style={{
          background:
            "linear-gradient(90deg, #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3)",
          backgroundSize: "200% 100%",
          animation: "rainbow-slide 3s linear infinite",
        }}
        {...props}
      >
        {children}
      </button>
    )
  }
)

RainbowButton.displayName = "RainbowButton"
