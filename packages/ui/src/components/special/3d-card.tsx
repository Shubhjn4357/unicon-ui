"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface Card3DProps extends React.HTMLAttributes<HTMLDivElement> {
  containerClassName?: string
}

/**
 * Native 3D Card - Tilt effect with mouse tracking
 */
export const Card3D = React.forwardRef<HTMLDivElement, Card3DProps>(
  ({ children, containerClassName, className, ...props }, ref) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)

    const mouseXSpring = useSpring(x)
    const mouseYSpring = useSpring(y)

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"])
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"])

    const handleMouseMove = (e: any) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const width = rect.width
      const height = rect.height
      const mouseX = e.clientX - rect.left
      const mouseY = e.clientY - rect.top
      const xPct = mouseX / width - 0.5
      const yPct = mouseY / height - 0.5
      x.set(xPct)
      y.set(yPct)
    }

    const handleMouseLeave = () => {
      x.set(0)
      y.set(0)
    }

    return (
      <div ref={ref} className={cn("relative perspective-1000", containerClassName)} {...props}>
        <motion.div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className={cn(
            "relative rounded-(--radius) border border-border bg-surface p-6 transition-shadow hover:shadow-xl",
            className
          )}
        >
          <div style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}>
            {children}
          </div>
        </motion.div>
      </div>
    )
  }
)

Card3D.displayName = "Card3D"
