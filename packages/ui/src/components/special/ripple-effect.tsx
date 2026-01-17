"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface RippleEffectProps extends React.HTMLAttributes<HTMLDivElement> {
  rippleColor?: string
}

/**
 * Native RippleEffect - Interactive click ripple container
 */
export const RippleEffect = React.forwardRef<HTMLDivElement, RippleEffectProps>(
  ({ children, rippleColor = "rgba(255, 255, 255, 0.3)", className, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<{ x: number; y: number; id: number }[]>([])

    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()

      setRipples((prev) => [...prev, { x, y, id }])

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 1000)
    }

    return (
      <div
        ref={ref}
        className={cn("relative overflow-hidden cursor-pointer select-none", className)}
        onClick={handleClick}
        {...props}
      >
        {children}
        <AnimatePresence>
          {ripples.map((ripple) => (
            <motion.span
              key={ripple.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: ripple.x,
                top: ripple.y,
                backgroundColor: rippleColor,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ width: 0, height: 0, opacity: 0.5 }}
              animate={{ width: 500, height: 500, opacity: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          ))}
        </AnimatePresence>
      </div>
    )
  }
)

RippleEffect.displayName = "RippleEffect"
