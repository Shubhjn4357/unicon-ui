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
          "group relative inline-flex h-11 items-center justify-center rounded-xl bg-white px-8 font-medium text-neutral-900 transition-transform duration-200 active:scale-95",
          className
        )}
        {...props}
      >
        <span className="absolute inset-0 -m-0.5 animate-rainbow rounded-xl bg-[conic-gradient(from_var(--shimmer-angle),var(--color-red-500),var(--color-yellow-500),var(--color-green-500),var(--color-cyan-500),var(--color-blue-500),var(--color-purple-500),var(--color-red-500))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </button>
    )
  }
)

RainbowButton.displayName = "RainbowButton"
