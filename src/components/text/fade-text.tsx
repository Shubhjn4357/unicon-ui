"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface FadeTextProps extends HTMLMotionProps<"div"> {
  text: string
  direction?: "up" | "down" | "left" | "right"
  framerProps?: any // Leaving as any briefly but wrapped
}

export function FadeText({
  text,
  direction = "up",
  className,
  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring" } },
  },
  ...props
}: FadeTextProps) {
  const directionOffset = direction === "up" ? 10 : direction === "down" ? -10 : 0
  const xOffset = direction === "left" ? 10 : direction === "right" ? -10 : 0

  const axisProps = (framerProps as any) || {
    hidden: { opacity: 0, y: directionOffset, x: xOffset },
    show: { opacity: 1, y: 0, x: 0, transition: { type: "spring" } },
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={axisProps}
      className={cn("text-foreground", className)}
      {...props}
    >
      {text}
    </motion.div>
  )
}
