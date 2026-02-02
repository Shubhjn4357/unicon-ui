"use client"

import { useMotionValue, useSpring, useVelocity, useTransform } from "framer-motion"
import { useEffect } from "react"

export function useMouse() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  // Smooth out the mouse values
  const smoothX = useSpring(x, { damping: 20, stiffness: 300 })
  const smoothY = useSpring(y, { damping: 20, stiffness: 300 })
  
  const velocityX = useVelocity(smoothX)
  const velocityY = useVelocity(smoothY)

  useEffect(() => {
    const updateMouse = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }

    window.addEventListener("mousemove", updateMouse)
    return () => window.removeEventListener("mousemove", updateMouse)
  }, [x, y])

  return { x, y, smoothX, smoothY, velocityX, velocityY }
}
