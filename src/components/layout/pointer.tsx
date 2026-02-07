"use client"

import * as React from "react"
import { cn } from "../../lib/utils"
import { COLOR_TOKENS } from "../../constants/color-tokens"

export interface PointerProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string
  color?: string
}

export const Pointer = React.forwardRef<HTMLDivElement, PointerProps>(
  ({ name, color = COLOR_TOKENS.NEON_ACCENT, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("relative", className)} {...props}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="none"
          className="relative top-[-8px] left-[-8px] drop-shadow-md"
        >
          <path
            d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8647L0.500002 1.14143L14.8464 15.6601H7.71213L5.65376 12.3673Z"
            fill={color}
          />
        </svg>
        <div
          className="absolute top-4 left-4 rounded-full px-2 py-1 text-xs font-bold text-white whitespace-nowrap"
          style={{ backgroundColor: color }}
        >
          {name}
        </div>
      </div>
    )
  }
)

Pointer.displayName = "Pointer"

export interface PointerGroupProps {
  children: React.ReactNode
}

/**
 * Native PointerGroup - Multiplayer cursor simulation container
 */
export const PointerGroup: React.FC<PointerGroupProps> = ({ children }) => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden rounded-(--radius) border border-border bg-card">
      {children}
    </div>
  )
}
