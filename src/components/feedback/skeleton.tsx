"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "text" | "circular" | "rectangular" | "rounded"
  animation?: "pulse" | "wave" | "none"
  width?: string | number
  height?: string | number
}

export const Skeleton = React.forwardRef<HTMLDivElement, SkeletonProps>(
  (
    { variant = "rectangular", animation = "pulse", width, height, className, style, ...props },
    ref
  ) => {
    const variantStyles = {
      text: "h-4 rounded",
      circular: "rounded-full",
      rectangular: "rounded-none",
      rounded: "rounded-lg",
    }

    const animationStyles = {
      pulse: "animate-pulse",
      wave: "animate-shimmer bg-linear-to-r from-muted via-muted/50 to-muted bg-[length:200%_100%]",
      none: "",
    }

    return (
      <div
        ref={ref}
        className={cn("bg-muted/50", variantStyles[variant], animationStyles[animation], className)}
        style={{
          width: width,
          height: height,
          ...style,
        }}
        {...props}
      />
    )
  }
)

Skeleton.displayName = "Skeleton"
