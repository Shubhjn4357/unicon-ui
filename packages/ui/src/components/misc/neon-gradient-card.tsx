"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface NeonGradientCardProps extends React.HTMLAttributes<HTMLDivElement> {
  borderSize?: number
  borderRadius?: number
  neonColors?: {
    firstColor: string
    secondColor: string
  }
}

/**
 * Native NeonGradientCard - Animated neon border effect
 */
export const NeonGradientCard = React.forwardRef<HTMLDivElement, NeonGradientCardProps>(
  (
    {
      children,
      borderSize = 2,
      borderRadius = 20,
      neonColors = {
        firstColor: "#ff00aa",
        secondColor: "#00FFF1",
      },
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn("relative", className)}
        style={{
          padding: borderSize,
          borderRadius: `${borderRadius}px`,
        }}
        {...props}
      >
        <motion.div
          className="absolute inset-0 rounded-[inherit]"
          style={{
            background: `conic-gradient(from 0deg, ${neonColors.firstColor}, ${neonColors.secondColor}, ${neonColors.firstColor})`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
        <div className="relative z-10 h-full rounded-[inherit] bg-surface p-6">{children}</div>
      </div>
    )
  }
)

NeonGradientCard.displayName = "NeonGradientCard"
