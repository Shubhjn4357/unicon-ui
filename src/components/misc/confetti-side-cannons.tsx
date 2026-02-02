"use client"

import confetti from "canvas-confetti"
import * as React from "react"
import { Button } from "../core/button"

export function ConfettiSideCannons() {
  const handleConfetti = () => {
    const end = Date.now() + 3 * 1000 // 3 seconds

    const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"]

    const frame = () => {
      if (Date.now() > end) return

      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        startVelocity: 60,
        origin: { x: 1, y: 0.5 },
        colors: colors,
      })

      requestAnimationFrame(frame)
    }

    frame()
  }

  return (
    <div className="flex items-center justify-center p-8">
      <Button
        onClick={handleConfetti}
        className="rounded-(--radius) bg-primary px-6 py-2 text-primary-foreground font-medium hover:bg-primary/90 transition-all active:scale-95"
      >
        Fire Cannons!
      </Button>
    </div>
  )
}
