"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface MeteorsProps extends React.HTMLAttributes<HTMLDivElement> {
  number?: number
}

/**
 * Native Meteors - Shooting stars effect
 * Pure CSS animations for performance
 */
export const Meteors = React.forwardRef<HTMLDivElement, MeteorsProps>(
  ({ number = 20, className, ...props }, ref) => {
    const meteors = new Array(number).fill(true)

    return (
      <div ref={ref} className={cn("pointer-events-none absolute inset-0", className)} {...props}>
        {meteors.map((_, idx) => (
          <motion.span
            key={idx}
            className="absolute left-1/2 top-0 h-0.5 w-0.5 rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]"
            style={{
              top: 0,
              left: `${Math.random() * 100}%`,
              rotate: "135deg", // Changed from rotate-215 to 135deg for downward fall
              animationDelay: `${Math.random() * (0.8 - 0.2) + 0.2}s`,
              animationDuration: `${Math.floor(Math.random() * (10 - 2) + 2)}s`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 1, 0],
              y: [0, typeof window !== "undefined" ? window.innerHeight : 1000],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              delay: Math.random() * 10,
              ease: "linear",
            }}
          >
            <div className="pointer-events-none absolute top-1/2 h-px w-[50px] -translate-y-1/2 bg-linear-to-r from-slate-500 to-transparent" />
          </motion.span>
        ))}
      </div>
    )
  }
)

Meteors.displayName = "Meteors"
