"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface SafariMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string
  src?: string
}

export const SafariMockup = React.forwardRef<HTMLDivElement, SafariMockupProps>(
  ({ url = "https://example.com", src, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("w-full max-w-4xl mx-auto", className)} {...props}>
        <div className="rounded-t-xl border border-border bg-surface shadow-2xl">
          {/* Safari toolbar */}
          <div className="flex items-center gap-2 border-b border-border bg-surface-elevated px-4 py-3">
            <div className="flex gap-2">
              <div className="h-3 w-3 rounded-full bg-red-500" />
              <div className="h-3 w-3 rounded-full bg-yellow-500" />
              <div className="h-3 w-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 mx-4">
              <div className="rounded-md bg-surface px-3 py-1.5 text-sm text-foreground-secondary">
                {url}
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="aspect-video w-full overflow-hidden rounded-b-xl bg-white">
            {src ? (
              <img src={src} alt="Safari preview" className="h-full w-full object-cover" />
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    )
  }
)

SafariMockup.displayName = "SafariMockup"

export interface iPhoneMockupProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string
}

export const iPhoneMockup = React.forwardRef<HTMLDivElement, iPhoneMockupProps>(
  ({ src, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mx-auto w-[280px]", className)} {...props}>
        <div className="relative rounded-[40px] border-14 border-black bg-black shadow-2xl">
          {/* Notch */}
          <div className="absolute left-1/2 top-0 h-[30px] w-[140px] -translate-x-1/2 rounded-b-3xl bg-black" />
          {/* Screen */}
          <div className="aspect-[9/19.5] overflow-hidden rounded-[26px] bg-white">
            {src ? (
              <img src={src} alt="iPhone preview" className="h-full w-full object-cover" />
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    )
  }
)

iPhoneMockup.displayName = "iPhoneMockup"

export const AndroidMockup = React.forwardRef<HTMLDivElement, iPhoneMockupProps>(
  ({ src, children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("mx-auto w-[280px]", className)} {...props}>
        <div className="relative rounded-3xl border-12 border-gray-800 bg-gray-800 shadow-2xl">
          {/* Screen */}
          <div className="aspect-[9/19.5] overflow-hidden rounded-[18px] bg-white">
            {src ? (
              <img src={src} alt="Android preview" className="h-full w-full object-cover" />
            ) : (
              children
            )}
          </div>
        </div>
      </div>
    )
  }
)

AndroidMockup.displayName = "AndroidMockup"
