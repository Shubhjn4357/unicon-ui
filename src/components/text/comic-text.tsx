"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface ComicTextProps extends HTMLMotionProps<"span"> {
  children: string
  className?: string
}

export const ComicText = ({ children, className, ...props }: ComicTextProps) => {
  return (
    <motion.span
      className={cn(
        "relative inline-block font-black uppercase text-foreground transition-all duration-300 hover:-translate-y-1 hover:translate-x-1",
        "drop-shadow-[2px_2px_0px_hsl(var(--primary)/0.5)]",
        className
      )}
      {...props}
    >
      {children}
    </motion.span>
  )
}
