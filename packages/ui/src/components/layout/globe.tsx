"use client"

import * as React from "react"
import { useEffect, useRef } from "react"
import createGlobe from "cobe"
import { cn } from "../../lib/utils"

export interface GlobeProps extends React.HTMLAttributes<HTMLCanvasElement> {
  size?: number
  phi?: number
  theta?: number
  dark?: number
  diffuse?: number
  mapSamples?: number
  mapBrightness?: number
  baseColor?: [number, number, number]
  markerColor?: [number, number, number]
  glowColor?: [number, number, number]
  markers?: Array<{ location: [number, number]; size: number }>
}

/**
 * Globe - Interactive 3D globe using cobe library
 */
export const Globe = React.forwardRef<HTMLCanvasElement, GlobeProps>(
  (
    {
      size = 600,
      phi = 0,
      theta = 0.3,
      dark = 1,
      diffuse = 1.2,
      mapSamples = 16000,
      mapBrightness = 6,
      baseColor = [0.3, 0.3, 0.3],
      markerColor = [0.1, 0.8, 1],
      glowColor = [0.1, 0.8, 1],
      markers = [],
      className,
      ...props
    },
    ref
  ) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const phiRef = useRef(phi)

    useEffect(() => {
      const onResize = () => {
        // Trigger re-render on resize
      }
      window.addEventListener("resize", onResize)
      onResize()

      if (!canvasRef.current) {
        window.removeEventListener("resize", onResize)
        return undefined
      }

      const globe = createGlobe(canvasRef.current, {
        devicePixelRatio: 2,
        width: size * 2,
        height: size * 2,
        phi: phiRef.current,
        theta,
        dark,
        diffuse,
        mapSamples,
        mapBrightness,
        baseColor,
        markerColor,
        glowColor,
        markers,
        onRender: (state) => {
          // Auto-rotate
          phiRef.current += 0.005
          state.phi = phiRef.current
        },
      })

      return () => {
        globe.destroy()
        window.removeEventListener("resize", onResize)
      }
    }, [size, theta, dark, diffuse, mapSamples, mapBrightness, baseColor, markerColor, glowColor, markers])

    return (
      <canvas
        ref={(node) => {
          canvasRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn("mx-auto block", className)}
        style={{ width: size, height: size, aspectRatio: 1 }}
        {...props}
      />
    )
  }
)

Globe.displayName = "Globe"
