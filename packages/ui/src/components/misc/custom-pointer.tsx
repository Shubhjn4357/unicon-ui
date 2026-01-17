"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface CustomPointerProps extends React.HTMLAttributes<HTMLDivElement> {
  cursorSize?: number
  cursorColor?: string
  trailLength?: number
}

/**
 * Custom Pointer - Smooth cursor follower with trail effect
 */
export const CustomPointer = React.forwardRef<HTMLDivElement, CustomPointerProps>(
  ({ cursorSize = 20, cursorColor = "var(--color-brand)", trailLength = 5, className, ...props }, ref) => {
    const [position, setPosition] = React.useState({ x: 0, y: 0 })
    const [isVisible, setIsVisible] = React.useState(false)
    const [trail, setTrail] = React.useState<Array<{ x: number; y: number; id: number }>>([])

    React.useEffect(() => {
      let trailId = 0
      const handleMouseMove = (e: MouseEvent) => {
        setIsVisible(true)
        setPosition({ x: e.clientX, y: e.clientY })
        
        setTrail(prev => {
          const newTrail = [{ x: e.clientX, y: e.clientY, id: trailId++ }, ...prev.slice(0, trailLength - 1)]
          return newTrail
        })
      }

      const handleMouseLeave = () => setIsVisible(false)
      const handleMouseEnter = () => setIsVisible(true)

      document.addEventListener("mousemove", handleMouseMove)
      document.addEventListener("mouseleave", handleMouseLeave)
      document.addEventListener("mouseenter", handleMouseEnter)

      return () => {
        document.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseleave", handleMouseLeave)
        document.removeEventListener("mouseenter", handleMouseEnter)
      }
    }, [trailLength])

    if (!isVisible) return null

    return (
      <div ref={ref} className={cn("pointer-events-none fixed inset-0 z-50", className)} {...props}>
        {/* Trail particles */}
        {trail.map((point, i) => (
          <motion.div
            key={point.id}
            className="absolute rounded-full"
            style={{
              left: point.x,
              top: point.y,
              width: cursorSize * (1 - i / trailLength),
              height: cursorSize * (1 - i / trailLength),
              backgroundColor: cursorColor,
              opacity: 1 - i / trailLength,
              transform: "translate(-50%, -50%)",
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 0.8 }}
            transition={{ duration: 0.2 }}
          />
        ))}
        
        {/* Main cursor */}
        <motion.div
          className="absolute rounded-full mix-blend-difference"
          style={{
            left: position.x,
            top: position.y,
            width: cursorSize,
            height: cursorSize,
            backgroundColor: cursorColor,
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 20px ${cursorColor}`,
          }}
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
        />
      </div>
    )
  }
)

CustomPointer.displayName = "CustomPointer"
