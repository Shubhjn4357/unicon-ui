"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface CheckboxProps extends Omit<HTMLMotionProps<"input">, "type" | "size"> {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  label?: string
  size?: "sm" | "md" | "lg"
}

/**
 * Native Checkbox Component
 * Built without shadcn/Radix - pure SVG checkmark with Framer Motion
 */
export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked, onCheckedChange, label, size = "md", className, id, ...props }, ref) => {
    const [internalChecked, setInternalChecked] = React.useState(checked || false)
    const checkboxId = id || `checkbox-${React.useId()}`

    const isControlled = checked !== undefined
    const isChecked = isControlled ? checked : internalChecked

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newChecked = e.target.checked
      if (!isControlled) {
        setInternalChecked(newChecked)
      }
      onCheckedChange?.(newChecked)
    }

    const sizeStyles = {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    }

    return (
      <div className="flex items-center gap-2">
        <div className="relative inline-block">
          <motion.input
            ref={ref}
            type="checkbox"
            id={checkboxId}
            checked={isChecked}
            onChange={handleChange}
            className="peer sr-only"
            {...props}
          />
          <motion.div
            className={cn(
              "flex cursor-pointer items-center justify-center rounded-[calc(var(--radius)*0.5)] border-2 border-border bg-surface transition-colors duration-200",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-brand peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              isChecked && "border-brand bg-brand",
              sizeStyles[size],
              className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById(checkboxId)?.click()}
          >
            <motion.svg
              className={cn("text-white", sizeStyles[size])}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              initial={false}
              animate={{ opacity: isChecked ? 1 : 0, scale: isChecked ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <motion.path
                d="M20 6L9 17L4 12"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: isChecked ? 1 : 0 }}
                transition={{ duration: 0.2 }}
              />
            </motion.svg>
          </motion.div>
        </div>
        {label && (
          <label
            htmlFor={checkboxId}
            className="cursor-pointer text-sm font-medium text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-50"
          >
            {label}
          </label>
        )}
      </div>
    )
  }
)

Checkbox.displayName = "Checkbox"
