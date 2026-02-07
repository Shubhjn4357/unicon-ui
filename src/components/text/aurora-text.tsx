"use client"

import { HTMLMotionProps, motion, type Variants } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"
import { COLOR_TOKENS } from "../../constants/color-tokens"

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
        className={cn("inline-block bg-clip-text text-transparent", className)}
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          duration: 5,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        style={{
          backgroundImage: COLOR_TOKENS.GRADIENT_RAINBOW,
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
