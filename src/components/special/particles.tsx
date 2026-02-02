"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

export interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number
  staticity?: number
  ease?: number
  refresh?: boolean
}

/**
 * Native Particles - Canvas particle system
 * Optimized with requestAnimationFrame
 */
export const Particles = React.forwardRef<HTMLDivElement, ParticlesProps>(
  ({ quantity = 30, staticity = 50, ease = 50, refresh = false, className, ...props }, _ref) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const canvasContainerRef = React.useRef<HTMLDivElement>(null)
    const context = React.useRef<CanvasRenderingContext2D | null>(null)
    const circles = React.useRef<any[]>([])
    const canvasSize = React.useRef<{ w: number; h: number }>({ w: 0, h: 0 })

    React.useEffect(() => {
      if (canvasRef.current) {
        context.current = canvasRef.current.getContext("2d")
      }
      initCanvas()
      animate()
      window.addEventListener("resize", initCanvas)

      return () => {
        window.removeEventListener("resize", initCanvas)
      }
    }, [])

    const initCanvas = () => {
      resizeCanvas()
      drawParticles()
    }

    const resizeCanvas = () => {
      if (canvasContainerRef.current && canvasRef.current && context.current) {
        circles.current.length = 0
        canvasSize.current.w = canvasContainerRef.current.offsetWidth
        canvasSize.current.h = canvasContainerRef.current.offsetHeight
        canvasRef.current.width = canvasSize.current.w
        canvasRef.current.height = canvasSize.current.h
      }
    }

    const circleParams = (): Circle => {
      const x = Math.floor(Math.random() * canvasSize.current.w)
      const y = Math.floor(Math.random() * canvasSize.current.h)
      const translateX = 0
      const translateY = 0
      const size = Math.floor(Math.random() * 2) + 1
      const alpha = 0.1 + Math.random() * 0.5
      const targetAlpha = Number.parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
      const dx = (Math.random() - 0.5) * 0.2
      const dy = (Math.random() - 0.5) * 0.2
      const magnetism = 0.1 + Math.random() * 4
      return { x, y, translateX, translateY, size, alpha, targetAlpha, dx, dy, magnetism }
    }

    const drawCircle = (circle: Circle, update = false) => {
      if (context.current) {
        const { x, y, translateX, translateY, size, alpha } = circle
        context.current.translate(translateX, translateY)
        context.current.beginPath()
        context.current.arc(x, y, size, 0, 2 * Math.PI)
        context.current.fillStyle = `rgba(255, 255, 255, ${alpha})`
        context.current.fill()
        context.current.setTransform(1, 0, 0, 1, 0, 0)

        if (!update) {
          circles.current.push(circle)
        }
      }
    }

    const clearContext = () => {
      if (context.current) {
        context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)
      }
    }

    const drawParticles = () => {
      clearContext()
      const particleCount = quantity
      for (let i = 0; i < particleCount; i++) {
        const circle = circleParams()
        drawCircle(circle)
      }
    }

    const animate = () => {
      clearContext()
      circles.current.forEach((circle: Circle, _i: number) => {
        circle.x += circle.dx
        circle.y += circle.dy

        if (circle.x < 0 || circle.x > canvasSize.current.w) circle.dx *= -1
        if (circle.y < 0 || circle.y > canvasSize.current.h) circle.dy *= -1

        drawCircle(circle, true)
      })
      requestAnimationFrame(animate)
    }

    return (
      <div ref={canvasContainerRef} className={cn("pointer-events-none", className)} {...props}>
        <canvas ref={canvasRef} />
      </div>
    )
  }
)

Particles.displayName = "Particles"

interface Circle {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}
