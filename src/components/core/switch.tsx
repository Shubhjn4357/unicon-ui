"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  size?: "sm" | "md" | "lg"
  label?: string
}

/**
 * Native Switch Component
 * Built without shadcn/Radix - pure CSS with Framer Motion animation
 */
export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ checked, onCheckedChange, size = "md", label, className, id, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(checked || false)
    const switchId = id || `switch-${React.useId()}`

    const isControlled = checked !== undefined
    const isChecked = isControlled ? checked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked
      if (!isControlled) {
        setInternalChecked(newChecked)
      }
      onCheckedChange?.(newChecked)
    }

    const sizeConfig = {
      sm: { width: "w-9", height: "h-5", thumb: "h-4 w-4", translate: "translate-x-4" },
      md: { width: "w-11", height: "h-6", thumb: "h-5 w-5", translate: "translate-x-5" },
      lg: { width: "w-14", height: "h-7", thumb: "h-6 w-6", translate: "translate-x-7" },
    }

    const config = sizeConfig[size]

    return (
      <div className="flex items-center gap-2">
        <div className="relative inline-block">
          <input
            ref={ref}
            type="checkbox"
            id={switchId}
            checked={isChecked}
            onChange={handleChange}
            className="peer sr-only"
            {...props}
          />
          <motion.div
            className={cn(
              "relative cursor-pointer rounded-full transition-colors duration-200",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              config.width,
              config.height,
              isChecked ? "bg-primary" : "bg-muted-foreground/20",
              className
            )}
            onClick={() => document.getElementById(switchId)?.click()}
          >
            <motion.div
              className={cn(
                "absolute top-0.5 left-0.5 rounded-full bg-white shadow-sm ring-1 ring-black/5",
                config.thumb
              )}
              animate={{
                x: isChecked
                  ? `calc(${config.width.replace("w-", "")} * 0.25rem - ${config.thumb.split(" ")[1].replace("w-", "")} * 0.25rem - 0.125rem)`
                  : 0,
              }}
              transition={{ type: "spring", stiffness: 400, damping: 35, mass: 0.8 }}
            />
          </motion.div>
        </div>
        {label && (
          <label
            htmlFor={switchId}
            className="cursor-pointer text-sm font-medium text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Switch.displayName = "Switch"
