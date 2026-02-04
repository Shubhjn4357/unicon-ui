"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface BorderBeamProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number
  duration?: number
  borderWidth?: number
  anchor?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

export const BorderBeam = React.forwardRef<HTMLDivElement, BorderBeamProps>(
  (
    {
      className,
      size = 200,
      duration = 15,
      anchor = 90,
      borderWidth = 1.5,
      colorFrom = "#ffaa40",
      colorTo = "#9c40ff",
      delay = 0,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
          // mask styles
          "[mask-clip:padding-box,border-box]! mask-intersect! [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
          // pseudo styles
          "after:absolute after:aspect-square after:w-[calc(var(--size)*1px)] after:animate-border-beam after:[animation-delay:var(--delay)] after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)] after:[offset-anchor:calc(var(--anchor)*1%)_50%] after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
          className
        )}
        style={
          {
            "--size": size,
            "--duration": duration,
            "--anchor": anchor,
            "--val": 100,
            "--delay": `-${delay}s`,
            "--color-from": colorFrom,
            "--color-to": colorTo,
            "--border-width": borderWidth,
          } as React.CSSProperties
        }
        {...props}
      />
    )
  }
)

BorderBeam.displayName = "BorderBeam"
