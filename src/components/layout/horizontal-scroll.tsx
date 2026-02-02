"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface HorizontalScrollProps {
  children: React.ReactNode
  className?: string
}

export function HorizontalScroll({ children, className }: HorizontalScrollProps) {
  const targetRef = React.useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  })

  // useSpring for smoother scrub feel
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 100
  })

  const x = useTransform(smoothProgress, [0, 1], ["0%", "-50%"]) // Adjust -50% based on content width logic

  return (
    <div ref={targetRef} className={cn("relative h-[300vh]", className)}>
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-10 p-10">
          {children}
        </motion.div>
      </div>
    </div>
  )
}
