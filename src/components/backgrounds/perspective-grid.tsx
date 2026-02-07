"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import React, { useEffect, useRef } from "react"
import { cn } from "../../lib/utils"

export const PerspectiveGrid = ({ className }: { className?: string }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0.5)
  const mouseY = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [20, -20]), {
    damping: 30,
    stiffness: 200,
  })
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-20, 20]), {
    damping: 30,
    stiffness: 200,
  })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return
      const { left, top, width, height } = containerRef.current.getBoundingClientRect()

      const nX = (e.clientX - left) / width
      const nY = (e.clientY - top) / height

      mouseX.set(nX)
      mouseY.set(nY)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  return (
    <div
      ref={containerRef}
      className={cn(
        "perspective-1000 relative flex h-[600px] w-full items-center justify-center overflow-hidden bg-background",
        className
      )}
    >
      <motion.div
        style={{ rotateX, rotateY }}
        className="grid h-[200%] w-[150%] grid-cols-12 gap-4 opacity-50"
      >
        {Array.from({ length: 144 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square rounded-xl border border-border/50 bg-secondary/30 backdrop-blur-sm transition-colors hover:bg-secondary"
          />
        ))}
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-background via-transparent to-background" />
    </div>
  )
}
PerspectiveGrid.displayName = "PerspectiveGrid"
