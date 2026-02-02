"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ProgressiveBlurProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  blurAmount?: number
  fadeDistance?: number
}

/**
 * Progressive Blur - Scroll-based or distance-based blur effect
 */
export const ProgressiveBlur = React.forwardRef<HTMLDivElement, ProgressiveBlurProps>(
  ({ children, blurAmount = 10, fadeDistance = 200, className, ...props }, ref) => {
    const [blur, setBlur] = React.useState(0)
    const elementRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      const handleScroll = () => {
        if (!elementRef.current) return

        const rect = elementRef.current.getBoundingClientRect()
        const viewportHeight = window.innerHeight
        const elementCenter = rect.top + rect.height / 2
        const viewportCenter = viewportHeight / 2

        const distance = Math.abs(elementCenter - viewportCenter)
        const blurValue = Math.min((distance / fadeDistance) * blurAmount, blurAmount)

        setBlur(blurValue)
      }

      window.addEventListener("scroll", handleScroll)
      handleScroll() // Initial call

      return () => window.removeEventListener("scroll", handleScroll)
    }, [blurAmount, fadeDistance])

    return (
      <div
        ref={(node) => {
          elementRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn("transition-all duration-300", className)}
        style={{
          filter: `blur(${blur}px)`,
        }}
        {...props}
      >
        {children}
      </div>
    )
  }
)

ProgressiveBlur.displayName = "ProgressiveBlur"
