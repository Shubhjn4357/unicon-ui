"use client"

import type React from "react"

import { type HTMLMotionProps, motion } from "framer-motion"
import { cn } from "../../lib/utils"

interface LineShadowTextProps extends HTMLMotionProps<"h1"> {
  shadowColor?: string
  children: React.ReactNode
}

export function LineShadowText({
  children,
  shadowColor = "black",
  className,
  ...props
}: LineShadowTextProps) {
  return (
    <motion.h1
      className={cn("relative inline-block text-(--shadow-color)", className)}
      style={
        {
          "--shadow-color": shadowColor,
        } as React.CSSProperties
      }
      {...props}
    >
      <span className="absolute top-0 left-0 -z-10 translate-x-0.5 translate-y-0.5 text-(--shadow-color) opacity-30 blur-[2px]">
        {children}
      </span>
      <span className="absolute top-0 left-0 -z-20 translate-x-1 translate-y-1 text-(--shadow-color) opacity-20 blur-xs">
        {children}
      </span>
      <span className="absolute left-[0.3em] top-[0.3em] -z-30 block h-full w-full text-(--shadow-color) opacity-10 blur-[6px]">
        {children}
      </span>
      <span className="relative z-10">{children}</span>
    </motion.h1>
  )
}
