"use client"

import { motion, useMotionValue, useSpring } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SmoothCursorProps extends React.HTMLAttributes<HTMLDivElement> {
  texture?: string
}

/**
 * Native SmoothCursor - Custom cursor with smooth spring physics
 */
export const SmoothCursor: React.FC<SmoothCursorProps> = ({ texture }) => {
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
        "pointer-events-none fixed left-0 top-0 z-9999 h-5 w-5 rounded-full bg-brand mix-blend-difference"
      )}
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
        x: "-50%",
        y: "-50%",
      }}
    >
      {texture && <img src={texture} alt="cursor" className="h-full w-full object-cover" />}
    </motion.div>
  )
}
