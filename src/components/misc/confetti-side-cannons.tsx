"use client"

import confetti from "canvas-confetti"
import { COLOR_TOKENS } from "@/constants/color-tokens"
import { Button } from "../core/button"

export function ConfettiSideCannons({numberOfPieces = 100, colors = [COLOR_TOKENS.NEON_ACCENT, COLOR_TOKENS.NEON_PRIMARY, COLOR_TOKENS.NEON_SECONDARY, COLOR_TOKENS.BEAM_END]}: {numberOfPieces?: number, colors?: string[]}) {
  const handleConfetti = () => {
    const end = Date.now() + 3 * 1000 // 3 seconds

    const frame = () => {
      if (Date.now() > end) return
      const devideParticleEqually = numberOfPieces / 2
      confetti({
        particleCount: devideParticleEqually,
        angle: 60,
        spread: 55,
        startVelocity: 60,
        origin: { x: 0, y: 0.5 },
        colors: colors,
      })
      confetti({
        particleCount: devideParticleEqually,
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
