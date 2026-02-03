"use client"

import { motion } from "framer-motion"
import type * as React from "react"
import { cn } from "../../lib/utils"

interface SnowProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  className?: string
}

export const Snow: React.FC<SnowProps> = ({ size = 150, className, ...props }) => {
  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i} // biome-ignore lint/suspicious/noArrayIndexKey - Static array for visual effect
          className="absolute rounded-full bg-white"
          style={{
            width: Math.random() * 4 + 1,
            height: Math.random() * 4 + 1,
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 - 20 + "%",
            filter: "blur(1px)",
            opacity: Math.random() * 0.8 + 0.1,
          }}
          animate={{
            y: [100, -100],
            opacity: [0, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

Snow.displayName = "Snow"
