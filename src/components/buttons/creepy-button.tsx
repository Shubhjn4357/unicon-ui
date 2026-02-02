"use client"

import {
  type HTMLMotionProps,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface CreepyButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  children?: React.ReactNode
  distortionIntensity?: number
}

/**
 * CreepyButton - Button with hover distortion effect
 * Features magnetic-like distortion on hover with smooth spring physics
 */
export const CreepyButton = React.forwardRef<HTMLButtonElement, CreepyButtonProps>(
  ({ children, className, distortionIntensity = 15, ...props }, ref) => {
    const buttonRef = React.useRef<HTMLButtonElement>(null)
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    const rotateX = useSpring(
      useTransform(mouseY, [-0.5, 0.5], [distortionIntensity, -distortionIntensity]),
      {
        stiffness: 300,
        damping: 30,
      }
    )
    const rotateY = useSpring(
      useTransform(mouseX, [-0.5, 0.5], [-distortionIntensity, distortionIntensity]),
      {
        stiffness: 300,
        damping: 30,
      }
    )

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!buttonRef.current) return

      const rect = buttonRef.current.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseXPos = e.clientX - rect.left
      const mouseYPos = e.clientY - rect.top
      const xPct = mouseXPos / width - 0.5
      const yPct = mouseYPos / height - 0.5

      mouseX.set(xPct)
      mouseY.set(yPct)
    }

    const handleMouseLeave = () => {
      mouseX.set(0)
      mouseY.set(0)
    }

    return (
      <motion.button
        ref={(node) => {
          buttonRef.current = node
          if (typeof ref === "function") {
            ref(node)
          } else if (ref) {
            ref.current = node
          }
        }}
        className={cn(
          "relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg px-8 font-medium",
          "bg-linear-to-br from-purple-600 to-pink-600 text-white shadow-lg",
          "transition-shadow duration-300 hover:shadow-2xl",
          "preserve-3d perspective-1000",
          className
        )}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        {/* Inner shadow for depth */}
        <div className="absolute inset-0 rounded-lg bg-linear-to-br from-white/10 to-transparent" />

        {/* Content */}
        <span className="relative z-10">{children}</span>

        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 -z-10 rounded-lg bg-linear-to-br from-purple-600 to-pink-600 opacity-0 blur-xl transition-opacity"
          animate={{
            opacity: [0, 0.5, 0],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </motion.button>
    )
  }
)

CreepyButton.displayName = "CreepyButton"
