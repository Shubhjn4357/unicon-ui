"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  radius?: number
  duration?: number
  delay?: number
  reverse?: boolean
  icons?: React.ReactNode[]
}

/**
 * Native OrbitingCircles - Animated orbiting elements
 * Pure CSS animations + Framer Motion
 */
export const OrbitingCircles = React.forwardRef<HTMLDivElement, OrbitingCirclesProps>(
  (
    {
      radius = 100,
      duration = 20,
      delay = 0,
      reverse = false,
      icons = [],
      className,
      children,
      ...props
    },
    ref
  ) => {
    const content = icons.length > 0 ? icons : React.Children.toArray(children)

    return (
      <div
        ref={ref}
        className={cn("relative flex h-full w-full items-center justify-center", className)}
        {...props}
      >
        {/* Center element */}
        <div className="absolute z-10 flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-surface">
          <div className="h-8 w-8 rounded-full bg-brand" />
        </div>

        {/* Orbiting elements */}
        {content.map((item, i) => {
          const angle = (360 / content.length) * i
          const delayCalc = delay + (i * duration) / content.length

          return (
            <motion.div
              key={i}
              className="absolute flex h-12 w-12 items-center justify-center rounded-full border border-border bg-surface shadow-md"
              style={{
                transformOrigin: "0 0",
              }}
              animate={{
                rotate: reverse ? -360 : 360,
              }}
              transition={{
                duration,
                delay: delayCalc,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              initial={{
                x: radius * Math.cos((angle * Math.PI) / 180),
                y: radius * Math.sin((angle * Math.PI) / 180),
              }}
            >
              <div
                style={{
                  transform: `rotate(${reverse ? 360 : -360}deg)`,
                }}
              >
                {item}
              </div>
            </motion.div>
          )
        })}
      </div>
    )
  }
)

OrbitingCircles.displayName = "OrbitingCircles"
