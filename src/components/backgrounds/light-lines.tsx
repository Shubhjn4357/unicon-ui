"use client"

import { motion } from "framer-motion"
import React from "react"
import { cn } from "../../lib/utils"

export const LightLines = ({ className }: { className?: string }) => {
  return (
    <div className={cn("relative h-full w-full overflow-hidden bg-background", className)}>
      {Array.from({ length: 20 }).map((_, i) => (
        <Line key={i} index={i} />
      ))}
    </div>
  )
}

const Line = ({ index }: { index: number }) => {
  const randomDelay = Math.random() * 5
  const randomDuration = 3 + Math.random() * 5
  const randomLeft = Math.random() * 100

  return (
    <motion.div
      initial={{ top: "-100%", opacity: 0 }}
      animate={{
        top: ["-100%", "200%"],
        opacity: [0, 1, 0, 0],
      }}
      transition={{
        duration: randomDuration,
        delay: randomDelay,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      }}
      className="absolute w-px bg-linear-to-b from-transparent via-cyan-500 to-transparent"
      style={{
        left: `${randomLeft}%`,
        height: `${30 + Math.random() * 50}%`,
        filter: "blur(2px)",
      }}
    />
  )
}
LightLines.displayName = "LightLines"
