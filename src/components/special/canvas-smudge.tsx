"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface CanvasSmudgeProps extends React.HTMLAttributes<HTMLCanvasElement> {
  color?: string
}

/**
 * Native CanvasSmudge - Interactive drawing smudge (Simplified)
 */
export const CanvasSmudge = React.forwardRef<HTMLCanvasElement, CanvasSmudgeProps>(
  ({ color = "#000", className, ...props }, _ref) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const [isDrawing, setIsDrawing] = React.useState(false)

    const startDrawing = (e: React.MouseEvent) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return
      ctx.strokeStyle = color
      ctx.lineWidth = 20
      ctx.lineCap = "round"
      ctx.beginPath()
      ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
      setIsDrawing(true)
    }

    const draw = (e: React.MouseEvent) => {
      if (!isDrawing) return
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext("2d")
      if (!ctx) return
      ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY)
      ctx.stroke()
    }

    const stopDrawing = () => {
      setIsDrawing(false)
    }

    return (
      <canvas
        ref={canvasRef}
        width={800}
        height={600}
        className={cn(
          "border border-[hsl(var(--border))] cursor-crosshair touch-none bg-background",
          className
        )}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        {...props}
      />
    )
  }
)

CanvasSmudge.displayName = "CanvasSmudge"
