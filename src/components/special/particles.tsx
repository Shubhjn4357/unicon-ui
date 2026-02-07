"use client"

import { useTheme } from "next-themes"
import * as React from "react"

import { cn } from "../../lib/utils"
import { COLOR_TOKENS } from "../../constants/color-tokens"

export interface ParticlesProps extends React.HTMLAttributes<HTMLDivElement> {
  quantity?: number
  staticity?: number
  ease?: number
  color?: string
  refresh?: boolean
}

/**
 * Native Particles - Canvas particle system
 * Optimized with requestAnimationFrame
 */
export const Particles = React.forwardRef<HTMLDivElement, ParticlesProps>(
  (
    {
      quantity = 30,
      staticity = 50,
      ease = 50,
      refresh = false,
      color = COLOR_TOKENS.PARTICLE_LIGHT,
      className,
      ...props
    },
    _ref
  ) => {
    const canvasRef = React.useRef<HTMLCanvasElement>(null)
    const canvasContainerRef = React.useRef<HTMLDivElement>(null)
    const context = React.useRef<CanvasRenderingContext2D | null>(null)
    const circles = React.useRef<any[]>([])
    const canvasSize = React.useRef<{ w: number; h: number }>({ w: 0, h: 0 })
    const { theme } = useTheme()
    const [resolvedColor, setResolvedColor] = React.useState(color)

    React.useEffect(() => {
      // Resolve color if it's a CSS variable or needs theme adaptation
      const resolveColor = () => {
        if (color.startsWith("var(--")) {
          const variableName = color.match(/var\(([^)]+)\)/)?.[1]
          if (variableName) {
            const computedColor = getComputedStyle(document.documentElement)
              .getPropertyValue(variableName)
              .trim()
            if (computedColor) {
              // Handle HSL values that might be returned as "0 0% 100%" or "0, 0%, 100%"
              // If it looks like numbers/percents without function, assume HSL or RGB provided by Tailwind variables
              if (
                !computedColor.startsWith("#") &&
                !computedColor.startsWith("rgb") &&
                !computedColor.startsWith("hsl")
              ) {
                // Assume it's an HSL variable value (common in Shadcn/Tailwind)
                return `hsl(${computedColor})`
              }
              return computedColor
            }
          }
        }
        return color
      }
      setResolvedColor(resolveColor())
    }, [color, theme])

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
    }, [resolvedColor])

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

    const hexToHsl = (hex: string): string => {
      hex = hex.replace(/^#/, "")
      if (hex.length === 3)
        hex = hex
          .split("")
          .map((c) => c + c)
          .join("")
      const r = Number.parseInt(hex.substring(0, 2), 16) / 255
      const g = Number.parseInt(hex.substring(2, 4), 16) / 255
      const b = Number.parseInt(hex.substring(4, 6), 16) / 255
      const max = Math.max(r, g, b)
      const min = Math.min(r, g, b)
      let h = 0
      let s = 0
      const l = (max + min) / 2
      if (max !== min) {
        const d = max - min
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
        switch (max) {
          case r:
            h = (g - b) / d + (g < b ? 6 : 0)
            break
          case g:
            h = (b - r) / d + 2
            break
          case b:
            h = (r - g) / d + 4
            break
        }
        h /= 6
      }
      return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
    }

    const drawCircle = (circle: Circle, update = false) => {
      if (context.current) {
        const { x, y, translateX, translateY, size, alpha } = circle
        context.current.translate(translateX, translateY)
        context.current.beginPath()
        context.current.arc(x, y, size, 0, 2 * Math.PI)

        let fillStyle = resolvedColor
        if (resolvedColor.startsWith("#")) {
          const hsl = hexToHsl(resolvedColor)
          fillStyle = `hsla(${hsl}, ${alpha}%)`
        } else if (resolvedColor.startsWith("hsl")) {
          fillStyle = `hsla(${resolvedColor}, ${alpha}%)`
        }

        context.current.fillStyle = fillStyle

        if (resolvedColor.startsWith("#")) {
          const hsl = hexToHsl(resolvedColor)
          context.current.fillStyle = `hsla(${hsl}, ${alpha}%)`
        } else {
          context.current.fillStyle = resolvedColor
          context.current.globalAlpha = alpha
        }

        context.current.fill()
        context.current.setTransform(1, 0, 0, 1, 0, 0)
        context.current.globalAlpha = 1 // Reset

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
