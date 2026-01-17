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
          "inline-block bg-clip-text text-transparent",
          className
        )}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899, #f59e0b, #3b82f6)",
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
