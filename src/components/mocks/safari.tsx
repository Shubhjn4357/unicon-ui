"use client"

import React from "react"
import { cn } from "../../lib/utils"

interface SafariProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
  src?: string
}

export const Safari = React.forwardRef<HTMLDivElement, SafariProps>(
  ({ className, url = "unicorn.ui", src, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "relative min-h-[300px] w-full overflow-hidden rounded-xl border bg-background shadow-xl",
          className
        )}
        {...props}
      >
        <div className="flex items-center gap-2 border-b bg-muted/50 px-4 py-3">
          <div className="flex gap-2">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex flex-1 items-center justify-center">
            <div className="flex h-8 w-full max-w-sm items-center justify-center rounded-md bg-background px-3 text-xs text-muted-foreground shadow-sm">
              <span className="truncate">{url}</span>
            </div>
          </div>
          <div className="w-16" /> {/* Spacer for balance */}
        </div>
        <div className="relative h-full w-full bg-background">
          {src ? (
            <img src={src} alt="Safari Content" className="h-full w-full object-cover" />
          ) : (
            children
          )}
        </div>
      </div>
    )
  }
)

Safari.displayName = "Safari"
