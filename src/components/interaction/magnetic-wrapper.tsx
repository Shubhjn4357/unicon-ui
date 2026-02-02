"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface MagneticWrapperProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  range?: number
}

export function MagneticWrapper({ 
  children, 
  className, 
  intensity = 0.5, 
  range = 100 
}: MagneticWrapperProps) {
  const ref = React.useRef<HTMLDivElement>(null)
  const [position, setPosition] = React.useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e
    const { left, top, width, height } = ref.current!.getBoundingClientRect()

    // Calculate center of element
    const centerX = left + width / 2
    const centerY = top + height / 2

    // Distance from center
    const distanceX = clientX - centerX
    const distanceY = clientY - centerY

    // If mouse is close enough, act magnetic
    if (Math.abs(distanceX) < width + range && Math.abs(distanceY) < height + range) {
      setPosition({ 
        x: distanceX * intensity,
        y: distanceY * intensity 
      })
    } else {
      setPosition({ x: 0, y: 0 })
    }
  }

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 })
  }

  return (
    <motion.div
      ref={ref}
      className={cn("relative inline-block", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ 
        type: "spring", 
        stiffness: 150, 
        damping: 15, 
        mass: 0.1 
      }}
    >
      {children}
    </motion.div>
  )
}
