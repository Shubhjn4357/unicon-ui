"use client"

import * as React from "react"
import { cn } from "../../lib/utils"

import { type HTMLMotionProps, motion } from "framer-motion"

export interface PulsatingButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode
  pulseColor?: string
  duration?: string
}

/**
 * Native PulsatingButton - Pulsing/ripple ring effect
 */
export const PulsatingButton = React.forwardRef<HTMLButtonElement, PulsatingButtonProps>(
  (
    {
      children,
      className,
      pulseColor = "rgba(var(--color-brand-rgb, 99, 102, 241), 0.7)",
      duration = "1.5s",
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex h-11 items-center justify-center rounded-lg bg-brand px-8 font-medium text-white",
          className
        )}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {/* Auto-pulsing effect always active */}
        <motion.div
          className="absolute inset-0 rounded-lg"
          style={{
            boxShadow: `0 0 0 0 ${pulseColor}`,
          }}
          animate={{
            boxShadow: [`0 0 0 0 ${pulseColor}`, `0 0 0 20px rgba(0, 0, 0, 0)`],
          }}
          transition={{
            duration: parseFloat(duration),
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      </motion.button>
    )
  }
)

PulsatingButton.displayName = "PulsatingButton"

export interface RippleButtonProps extends HTMLMotionProps<"button"> {
  children?: React.ReactNode
}

export const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  ({ children, className, ...props }, ref) => {
    const [ripples, setRipples] = React.useState<Array<{ x: number; y: number; id: number }>>([])

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      const rect = e.currentTarget.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const id = Date.now()

      setRipples((prev) => [...prev, { x, y, id }])

      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== id))
      }, 600)

      props.onClick?.(e)
    }

    return (
      <motion.button
        ref={ref}
        className={cn(
          "relative inline-flex h-11 items-center justify-center overflow-hidden rounded-lg bg-brand px-8 font-medium text-white",
          className
        )}
        onClick={handleClick}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10">{children}</span>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            className="absolute rounded-full bg-white/30"
            style={{
              left: ripple.x,
              top: ripple.y,
              width: 0,
              height: 0,
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{ width: 300, height: 300, opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        ))}
      </motion.button>
    )
  }
)

RippleButton.displayName = "RippleButton"
