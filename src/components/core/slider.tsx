"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SliderProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "value" | "defaultValue"> {
  value?: number[]
  onValueChange?: (value: number[]) => void
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  showValue?: boolean
}

export const Slider = React.forwardRef<HTMLDivElement, SliderProps>(
  (
    {
      value: controlledValue,
      onValueChange,
      defaultValue = [50],
      min = 0,
      max = 100,
      step = 1,
      disabled = false,
      showValue = false,
      className,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue)
    const sliderRef = React.useRef<HTMLDivElement>(null)
    const [isDragging, setIsDragging] = React.useState(false)

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const handleValueChange = (newValue: number[]) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    const getValueFromPosition = (clientX: number) => {
      if (!sliderRef.current) return value[0]
      const rect = sliderRef.current.getBoundingClientRect()
      const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
      const rawValue = min + percentage * (max - min)
      return Math.round(rawValue / step) * step
    }

    const handlePointerDown = (e: React.PointerEvent) => {
      if (disabled) return
      setIsDragging(true)
      const newValue = getValueFromPosition(e.clientX)
      handleValueChange([newValue])
      sliderRef.current?.setPointerCapture(e.pointerId)
    }

    const handlePointerMove = (e: React.PointerEvent) => {
      if (!isDragging || disabled) return
      const newValue = getValueFromPosition(e.clientX)
      handleValueChange([newValue])
    }

    const handlePointerUp = (e: React.PointerEvent) => {
      setIsDragging(false)
      sliderRef.current?.releasePointerCapture(e.pointerId)
    }

    const percentage = ((value[0] - min) / (max - min)) * 100

    return (
      <div ref={ref} className={cn("relative w-full", className)} {...props}>
        <div
          ref={sliderRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          className={cn(
            "relative h-2 w-full cursor-pointer touch-none select-none rounded-full bg-muted",
            disabled && "cursor-not-allowed opacity-50"
          )}
        >
          <motion.div
            className="absolute h-full rounded-full bg-primary"
            style={{ width: `${percentage}%` }}
            transition={{ type: "spring", stiffness: 400, damping: 30 }}
          />
          <motion.div
            className={cn(
              "absolute top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-primary bg-background shadow-md",
              isDragging && "scale-110"
            )}
            style={{ left: `${percentage}%` }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
        </div>
        {showValue && (
          <div className="mt-2 text-center text-sm text-muted-foreground">{value[0]}</div>
        )}
      </div>
    )
  }
)

Slider.displayName = "Slider"
