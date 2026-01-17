"use client"

import confetti from "canvas-confetti"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ConfettiSideCannonsProps extends React.HTMLAttributes<HTMLDivElement> {
  autoFire?: boolean
}

/**
 * Native ConfettiSideCannons - Side firing confetti
 */
export const ConfettiSideCannons = React.forwardRef<HTMLDivElement, ConfettiSideCannonsProps>(
  ({ autoFire = false, className, ...props }, ref) => {
    const triggerConfetti = () => {
      const end = Date.now() + 3 * 1000
      const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

      ;(function frame() {
        confetti({
          particleCount: 2,
          angle: 60,
          spread: 55,
          origin: { x: 0 },
          colors: colors,
        })
        confetti({
          particleCount: 2,
          angle: 120,
          spread: 55,
          origin: { x: 1 },
          colors: colors,
        })

        if (Date.now() < end) {
          requestAnimationFrame(frame)
        }
      })()
    }

    React.useEffect(() => {
      if (autoFire) triggerConfetti()
    }, [autoFire])

    return (
      <div ref={ref} className={cn("", className)} {...props}>
        <button
          onClick={triggerConfetti}
          className="rounded-(--radius) bg-brand px-4 py-2 text-white font-medium hover:bg-brand/90 transition-colors"
        >
          Celebrate!
        </button>
      </div>
    )
  }
)

ConfettiSideCannons.displayName = "ConfettiSideCannons"
