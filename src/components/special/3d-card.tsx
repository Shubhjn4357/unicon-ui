"use client"

import { motion, useAnimation } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ThreeDCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function ThreeDCard({ children, className, ...props }: ThreeDCardProps) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = React.useState(0)
  const [rotateY, setRotateY] = React.useState(0)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    setRotateX((y - centerY) / 10)
    setRotateY((centerX - x) / 10)
  }

  const handleMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      className={cn("perspective-1000", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className={cn(
          "relative rounded-(--radius) border border-border bg-card p-6 transition-shadow hover:shadow-2xl",
          "transform-style-3d shadow-xl"
        )}
      >
        <div className="translate-z-20 transform-style-3d">{children}</div>
      </motion.div>
    </div>
  )
}
