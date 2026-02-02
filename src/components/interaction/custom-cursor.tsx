"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface CustomCursorProps {
  className?: string
  color?: string
}

export function CustomCursor({ 
  className,
  color = "black" 
}: CustomCursorProps) {
  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)
  
  const springConfig = { damping: 25, stiffness: 700 }
  const cursorXSpring = useSpring(cursorX, springConfig)
  const cursorYSpring = useSpring(cursorY, springConfig)

  React.useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }
    
    window.addEventListener("mousemove", moveCursor)
    return () => {
      window.removeEventListener("mousemove", moveCursor)
    }
  }, [cursorX, cursorY])

  return (
    <motion.div
      className={cn(
        "pointer-events-none fixed left-0 top-0 z-[9999] h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary mix-blend-difference",
        className
      )}
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        borderColor: color
      }}
    >
      <div className="absolute inset-0 m-auto h-2 w-2 rounded-full bg-primary" />
    </motion.div>
  )
}
