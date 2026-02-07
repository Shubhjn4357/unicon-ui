"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { cn } from "../../lib/utils"

interface SnowProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  className?: string
}

export const Snow: React.FC<SnowProps> = ({ size = 150, className, ...props }) => {
  const [flakes, setFlakes] = useState<
    Array<{ id: number; style: React.CSSProperties; duration: number }>
  >([])

  useEffect(() => {
    const generatedFlakes = [...Array(50)].map((_, i) => ({
      id: i,
      style: {
        width: Math.random() * 4 + 1,
        height: Math.random() * 4 + 1,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100 - 20}%`,
        filter: "blur(1px)",
        opacity: Math.random() * 0.8 + 0.1,
      } as React.CSSProperties,
      duration: Math.random() * 3 + 2,
    }))
    setFlakes(generatedFlakes)
  }, [])

  return (
    <div className={cn("relative overflow-hidden", className)} {...props}>
      {flakes.map((flake) => (
        <motion.div
          key={flake.id}
          className="absolute rounded-full bg-background"
          style={flake.style}
          animate={{
            y: [100, -100],
            opacity: [0, 1],
          }}
          transition={{
            duration: flake.duration,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </div>
  )
}

Snow.displayName = "Snow"
