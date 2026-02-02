"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn, prefersReducedMotion } from "../../lib/utils"

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  reverse?: boolean
  fade?: boolean
  speed?: "slow" | "normal" | "fast"
  repeat?: number
}

/**
 * Native Marquee - Infinite horizontal scrolling
 * Pure CSS + Framer Motion, no dependencies
 */
export const Marquee = React.forwardRef<HTMLDivElement, MarqueeProps>(
  (
    {
      children,
      pauseOnHover = false,
      reverse = false,
      fade = false,
      speed = "normal",
      repeat = 2,
      className,
      ...props
    },
    ref
  ) => {
    const prefersReduced = prefersReducedMotion()

    const speedConfig = {
      slow: 60,
      normal: 40,
      fast: 20,
    }

    const duration = speedConfig[speed]

    return (
      <div
        ref={ref}
        className={cn(
          "group relative flex overflow-hidden",
          pauseOnHover && "hover:pause",
          className
        )}
        {...props}
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <motion.div
            key={i}
            className="flex min-w-full shrink-0 items-center justify-around gap-4"
            animate={
              prefersReduced
                ? {}
                : {
                  x: reverse ? ["0%", "100%"] : ["0%", "-100%"],
                }
            }
            transition={{
              x: {
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                duration,
                ease: "linear",
              },
            }}
          >
            {children}
          </motion.div>
        ))}
        {fade && (
          <>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-background to-transparent" />
          </>
        )}
      </div>
    )
  }
)

Marquee.displayName = "Marquee"
