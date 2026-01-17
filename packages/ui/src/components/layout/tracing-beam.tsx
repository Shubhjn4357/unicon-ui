"use client"

import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface TracingBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

/**
 * Native TracingBeam - Scroll progress beam
 */
export const TracingBeam = React.forwardRef<HTMLDivElement, TracingBeamProps>(
  ({ children, className, ...props }, ref) => {
    const { scrollYProgress } = useScroll()
    const y = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), {
      stiffness: 500,
      damping: 90,
    })

    return (
      <div ref={ref} className={cn("relative w-full max-w-4xl mx-auto", className)} {...props}>
        <div className="absolute -left-4 top-0 bottom-0 w-px bg-border hidden md:block">
          <motion.div
            className="absolute top-0 -left-px w-[3px] h-[3px] rounded-full bg-brand origin-top"
            style={{ top: y }}
          >
            <div className="absolute top-0 left-[-6px] w-[15px] h-[15px] rounded-full bg-brand/20 animate-pulse" />
          </motion.div>
          <motion.div
            className="absolute top-0 w-px bg-linear-to-b from-brand to-transparent origin-top"
            style={{ height: y }}
          />
        </div>
        <div className="pl-4 md:pl-12">{children}</div>
      </div>
    )
  }
)

TracingBeam.displayName = "TracingBeam"
