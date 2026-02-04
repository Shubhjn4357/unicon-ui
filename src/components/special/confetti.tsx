"use client"

import confetti from "canvas-confetti"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ConfettiProps {
  particleCount?: number
  spread?: number
  origin?: { x: number; y: number }
}

/**
 * Native Confetti - Canvas confetti particles
 * Using canvas-confetti library
 */
export const Confetti: React.FC<ConfettiProps> = ({
  particleCount = 50,
  spread = 70,
  origin = { x: 0.5, y: 0.5 },
}) => {
  React.useEffect(() => {
    confetti({
      particleCount,
      spread,
      origin,
    })
  }, [particleCount, spread, origin])

  return null
}

export interface ConfettiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  confettiOptions?: ConfettiProps
}

export const ConfettiButton = React.forwardRef<HTMLButtonElement, ConfettiButtonProps>(
  ({ children, confettiOptions, onClick, className, ...props }, ref) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      confetti({
        particleCount: confettiOptions?.particleCount || 50,
        spread: confettiOptions?.spread || 70,
        origin: {
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        },
      })
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        onClick={handleClick}
        className={cn(
          "inline-flex items-center justify-center rounded-lg bg-primary px-4 py-2 font-medium text-primary-foreground transition-all hover:bg-primary/90 cursor-pointer",
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

ConfettiButton.displayName = "ConfettiButton"
