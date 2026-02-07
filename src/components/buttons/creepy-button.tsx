"use client"

import { type HTMLMotionProps, motion, useSpring } from "framer-motion"
import type React from "react"
import { useEffect, useRef, useState } from "react"
import { cn } from "../../lib/utils"

interface CreepyButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode
}

export const CreepyButton = ({ className, children, ...props }: CreepyButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  // Spring animations for smooth eye movement
  const leftEyeX = useSpring(0, { stiffness: 100, damping: 20 })
  const leftEyeY = useSpring(0, { stiffness: 100, damping: 20 })
  const rightEyeX = useSpring(0, { stiffness: 100, damping: 20 })
  const rightEyeY = useSpring(0, { stiffness: 100, damping: 20 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!buttonRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2

      // Calculate angle content relative to center
      const angle = Math.atan2(e.clientY - centerY, e.clientX - centerX)
      const distance = Math.min(10, Math.hypot(e.clientX - centerX, e.clientY - centerY) / 5)

      const x = Math.cos(angle) * distance
      const y = Math.sin(angle) * distance

      leftEyeX.set(x)
      leftEyeY.set(y)
      rightEyeX.set(x)
      rightEyeY.set(y)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [leftEyeX, leftEyeY, rightEyeX, rightEyeY])

  return (
    <motion.button
      ref={buttonRef}
      className={cn(
        "group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-primary px-8 py-3 text-primary-foreground transition-all hover:bg-primary/90 active:scale-95",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <div className="relative flex items-center justify-center gap-2">
        {/* Left Eye */}
        <div className="relative h-6 w-6 rounded-full bg-background shadow-inner">
          <motion.div
            style={{ x: leftEyeX, y: leftEyeY }}
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-75 group-hover:h-3 group-hover:w-3"
          />
        </div>

        {/* Right Eye */}
        <div className="relative h-6 w-6 rounded-full bg-background shadow-inner">
          <motion.div
            style={{ x: rightEyeX, y: rightEyeY }}
            className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-foreground transition-all duration-75 group-hover:h-3 group-hover:w-3"
          />
        </div>
      </div>

      <span className="relative z-10 font-bold uppercase tracking-wider text-sm group-hover:text-accent transition-colors">
        {children || "Who are you?"}
      </span>

      {/* Glow Effect */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-primary/0 via-primary/20 to-primary/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 blur-xl" />
    </motion.button>
  )
}
