"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface DockProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  magnification?: number
  distance?: number
}

/**
 * Native Dock - macOS-style magnifying dock
 * Using Framer Motion's useMotionValue for smooth magnification
 */
export const Dock = React.forwardRef<HTMLDivElement, DockProps>(
  ({ children, magnification = 60, distance = 140, className, ...props }, ref) => {
    const mouseX = useMotionValue(Number.POSITIVE_INFINITY)

    return (
      <motion.div
        ref={ref}
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Number.POSITIVE_INFINITY)}
        className={cn(
          "mx-auto flex h-16 items-end gap-4 rounded-2xl border border-border bg-surface/80 px-4 pb-3 backdrop-blur-md",
          className
        )}
        {...props}
      >
        {React.Children.map(children, (child) => (
          <DockIcon mouseX={mouseX} magnification={magnification} distance={distance}>
            {child}
          </DockIcon>
        ))}
      </motion.div>
    )
  }
)

Dock.displayName = "Dock"

interface DockIconProps {
  mouseX: any
  children: React.ReactNode
  magnification: number
  distance: number
}

function DockIcon({ mouseX, children, magnification, distance }: DockIconProps) {
  const ref = React.useRef<HTMLDivElement>(null)

  const distanceFromMouse = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 }
    return val - bounds.x - bounds.width / 2
  })

  const widthSync = useTransform(
    distanceFromMouse,
    [-distance, 0, distance],
    [40, magnification, 40]
  )
  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 300,
    damping: 20,
  })

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="flex aspect-square w-10 items-center justify-center rounded-full bg-surface-elevated"
    >
      {children}
    </motion.div>
  )
}
