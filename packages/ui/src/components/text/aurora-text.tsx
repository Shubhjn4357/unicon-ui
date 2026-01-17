"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface AuroraTextProps extends HTMLMotionProps<"span"> {
  children: React.ReactNode
}

/**
 * Native AuroraText - Aurora borealis gradient effect
 */
export const AuroraText = React.forwardRef<HTMLSpanElement, AuroraTextProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <motion.span
        ref={ref}
        className={cn(
          "inline-block bg-linear-to-r from-blue-600 via-purple-500 to-pink-500 bg-clip-text text-transparent",
          className
        )}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundSize: "200% auto",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        {...props}
      >
        {children}
      </motion.span>
    )
  }
)

AuroraText.displayName = "AuroraText"
