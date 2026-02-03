"use client"

import { motion } from "framer-motion"
import type * as React from "react"
import { cn } from "../../lib/utils"

interface OrbitingDotsProps extends React.HTMLAttributes<HTMLDivElement> {
  count?: number
  dotSize?: number
  color?: string
  speed?: number
  radius?: number
}

export const OrbitingDots: React.FC<OrbitingDotsProps> = ({
  count = 3,
  dotSize = 4,
  color = "hsl(var(--primary))",
  speed = 20,
  radius = 100,
  ...props
}) => {
  return (
    <div className={cn("relative w-full h-full", props.className)} {...props}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i} // biome-ignore lint/suspicious/noArrayIndexKey - Static array for animation
          className="absolute rounded-full"
          style={{
            width: dotSize,
            height: dotSize,
            backgroundColor: color,
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 0.8, 1],
            x: [0, 100, 0, -100, 0],
            y: [0, 100, 0, -100, 0],
          }}
          transition={{
            duration: speed,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

OrbitingDots.displayName = "OrbitingDots"
