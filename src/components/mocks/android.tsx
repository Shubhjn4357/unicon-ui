"use client"

import React from "react"
import { cn } from "../../lib/utils"

interface AndroidProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
}

export const Android = React.forwardRef<HTMLDivElement, AndroidProps>(
  ({ className, src, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative aspect-9/19 w-[280px] rounded-[36px] bg-black border-8 border-gray-900 overflow-hidden shadow-xl",
          className
        )}
        {...props}
      >
        {/* Hole Punch Camera */}
        <div className="absolute left-1/2 top-4 z-20 h-4 w-4 -translate-x-1/2 rounded-full bg-zinc-900">
          <div className="absolute inset-1 rounded-full bg-zinc-800/50" />
        </div>

        {/* Screen Content */}
        <div className="relative h-full w-full overflow-hidden rounded-[28px] bg-background">
          {src ? (
            <img src={src} alt="Android Content" className="h-full w-full object-cover" />
          ) : (
            children
          )}
        </div>

        {/* Side Buttons (Right side usually for Android/Pixel) */}
        <div className="absolute -right-[10px] top-32 h-10 w-1 rounded-r-md bg-zinc-800" />
        <div className="absolute -right-[10px] top-48 h-16 w-1 rounded-r-md bg-zinc-800" />
      </div>
    )
  }
)

Android.displayName = "Android"
