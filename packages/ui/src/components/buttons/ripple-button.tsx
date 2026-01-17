"use client"

import React, { type MouseEvent, useEffect, useState } from "react"
import { cn } from "../../lib/utils"

interface RippleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  rippleColor?: string
  duration?: string
}

const RippleButton = React.forwardRef<HTMLButtonElement, RippleButtonProps>(
  (
    {
      className,
      children,
      rippleColor = "rgba(255, 255, 255, 0.5)",
      duration = "600ms",
      onClick,
      ...props
    },
    ref
  ) => {
    const [buttonRipples, setButtonRipples] = useState<
      Array<{ x: number; y: number; size: number; key: number }>
    >([])

    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
      createRipple(e)
      onClick?.(e)
    }

    const createRipple = (e: MouseEvent<HTMLButtonElement>) => {
      const button = e.currentTarget
      const rect = button.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height)
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2

      const newRipple = { x, y, size, key: Date.now() }
      setButtonRipples([...buttonRipples, newRipple])
    }

    useEffect(() => {
      if (buttonRipples.length > 0) {
        const lastRipple = buttonRipples[buttonRipples.length - 1]
        const timeout = setTimeout(() => {
          setButtonRipples((prevState) =>
            prevState.filter((ripple) => ripple.key !== lastRipple.key)
          )
        }, Number.parseInt(duration))
        return () => clearTimeout(timeout)
      }
      return undefined
    }, [buttonRipples, duration])

    return (
      <button
        className={cn(
          "relative flex cursor-pointer items-center justify-center overflow-hidden rounded-lg border-2 bg-brand px-6 py-3 text-center text-white shadow-sm transition-all duration-300 hover:scale-[0.98]",
          className
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <div className="relative z-10">{children}</div>
        <span className="pointer-events-none absolute inset-0">
          {buttonRipples.map((ripple) => (
            <span
              key={ripple.key}
              className="absolute animate-ripple rounded-full bg-white opacity-30"
              style={{
                width: ripple.size,
                height: ripple.size,
                left: ripple.x,
                top: ripple.y,
                backgroundColor: rippleColor,
                transform: "scale(0)",
                transformOrigin: "center",
                animationDuration: duration,
              }}
            />
          ))}
        </span>
      </button>
    )
  }
)

RippleButton.displayName = "RippleButton"

export { RippleButton }
