"use client"

import { motion, useMotionValue } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface FollowerPointerProps extends React.HTMLAttributes<HTMLDivElement> {
  cardContent: React.ReactNode
}

/**
 * Native FollowerPointer - Custom content following cursor
 */
export const FollowerPointer = React.forwardRef<HTMLDivElement, FollowerPointerProps>(
  ({ children, cardContent, className, ...props }, ref) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)
    const [isInside, setIsInside] = React.useState(false)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      x.set(e.clientX - rect.left)
      y.set(e.clientY - rect.top)
    }

    return (
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsInside(true)}
        onMouseLeave={() => setIsInside(false)}
        className={cn("relative cursor-none", className)}
        {...props}
      >
        <motion.div
          className="pointer-events-none absolute z-50 rounded-xl bg-brand/10 backdrop-blur-sm p-2 border border-brand/20"
          style={{
            x,
            y,
            opacity: isInside ? 1 : 0,
            scale: isInside ? 1 : 0,
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 300,
          }}
        >
          {cardContent}
        </motion.div>
        {children}
      </div>
    )
  }
)

FollowerPointer.displayName = "FollowerPointer"
