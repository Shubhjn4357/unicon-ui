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
          "group relative inline-flex h-11 items-center justify-center rounded-xl bg-white px-8 font-medium text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100 transition-transform duration-200 active:scale-95",
          className
        )}
        {...props}
      >
        <span
          className="absolute inset-0 -m-[2px] animate-rainbow rounded-xl"
          style={{
            background:
              "conic-gradient(from var(--shimmer-angle, 0deg), #ff0000, #ff7f00, #ffff00, #00ff00, #0000ff, #4b0082, #9400d3, #ff0000)",
            backgroundSize: "200% 200%",
            opacity: 1,
            animation: "rainbow 3s linear infinite",
          }}
        />
        <span className="relative z-10 flex items-center gap-2 bg-white dark:bg-neutral-900 rounded-[10px] py-2 px-8">
          {children}
        </span>
      </button>
    )
  }
)

RainbowButton.displayName = "RainbowButton"
