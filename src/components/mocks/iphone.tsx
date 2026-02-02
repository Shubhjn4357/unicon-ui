"use client"

import React from "react"
import { cn } from "../../lib/utils"

interface IphoneProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
}

export const Iphone15Pro = React.forwardRef<HTMLDivElement, IphoneProps>(
  ({ className, src, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative aspect-9/19 w-[280px] rounded-[48px] bg-black border-8 border-gray-900 overflow-hidden shadow-xl ring-1 ring-white/10",
          className
        )}
        {...props}
      >
        {/* Dynamic Island / Notch Area */}
        <div className="absolute left-1/2 top-0 z-20 h-7 w-32 -translate-x-1/2 rounded-b-2xl bg-zinc-900">
          <div className="absolute left-1/2 top-1/2 h-2 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-800" />
        </div>

        {/* Screen Content */}
        <div className="relative h-full w-full overflow-hidden rounded-[45px] bg-background">
          {src ? (
            <img src={src} alt="iPhone Content" className="h-full w-full object-cover" />
          ) : (
            children
          )}
        </div>

        {/* Side Buttons (Visual only, simple css) */}
        <div className="absolute -left-[10px] top-24 h-8 w-1 rounded-l-md bg-zinc-800" />
        <div className="absolute -left-[10px] top-40 h-12 w-1 rounded-l-md bg-zinc-800" />
        <div className="absolute -left-[10px] top-56 h-12 w-1 rounded-l-md bg-zinc-800" />
        <div className="absolute -right-[10px] top-40 h-20 w-1 rounded-r-md bg-zinc-800" />
      </div>
    )
  }
)

Iphone15Pro.displayName = "Iphone15Pro"
