"use client"

import { motion } from "framer-motion"
import React from "react"

import { cn } from "../../lib/utils"

export const BackgroundBeams = React.forwardRef<HTMLDivElement, { className?: string }>(
  ({ className }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "absolute inset-0 h-full w-full bg-black [bg-size:24px_24px] mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]",
          className
        )}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute -left-[10%] -top-[10%] h-[120%] w-[120%] opacity-50"
        >
          <div className="absolute left-[50%] top-[50%] h-[50vh] w-[50vh] -translate-x-[50%] -translate-y-[50%] bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_70%)] blur-[80px]" />
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              // biome-ignore lint/suspicious/noArrayIndexKey: Static array for visual effect
              key={i}
              className="absolute left-0 top-px h-full w-full bg-linear-to-b from-transparent via-[#18ccfc] to-transparent [border-left-style:solid] [border-left-width:1px] border-l-transparent"
              style={{
                rotate: i * 30,
                transformOrigin: "center center",
              }}
              animate={{
                rotate: [i * 30, i * 30 + 360],
              }}
              transition={{
                duration: 20 + Math.random() * 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </motion.div>
      </div>
    )
  }
)

BackgroundBeams.displayName = "BackgroundBeams"
