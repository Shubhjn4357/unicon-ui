"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn, generateId } from "../../lib/utils"

export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  name?: string
}

const RadioGroupContext = React.createContext<{
  value: string
  onValueChange: (value: string) => void
  name: string
} | null>(null)

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    { value: controlledValue, onValueChange, defaultValue, name, children, className, ...props },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState(defaultValue || "")
    const generatedName = React.useId()

    const isControlled = controlledValue !== undefined
    const value = isControlled ? controlledValue : internalValue

    const handleValueChange = (newValue: string) => {
      if (!isControlled) {
        setInternalValue(newValue)
      }
      onValueChange?.(newValue)
    }

    return (
      <RadioGroupContext.Provider
        value={{ value, onValueChange: handleValueChange, name: name || generatedName }}
      >
        <div ref={ref} role="radiogroup" className={cn("space-y-2", className)} {...props}>
          {children}
        </div>
      </RadioGroupContext.Provider>
    )
  }
)

RadioGroup.displayName = "RadioGroup"

export interface RadioGroupItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  value: string
  label?: string
}

export const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
  ({ value, label, className, id, ...props }, ref) => {
    const context = React.useContext(RadioGroupContext)
    if (!context) throw new Error("RadioGroupItem must be used within RadioGroup")

    const itemId = id || `radio-${generateId()}`
    const isChecked = context.value === value

    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          <input
            ref={ref}
            type="radio"
            id={itemId}
            value={value}
            name={context.name}
            checked={isChecked}
            onChange={() => context.onValueChange(value)}
            className="peer sr-only"
            {...props}
          />
          <motion.div
            className={cn(
              "flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 transition-colors",
              "peer-focus-visible:ring-2 peer-focus-visible:ring-brand peer-focus-visible:ring-offset-2",
              "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
              isChecked ? "border-brand bg-brand" : "border-border bg-surface",
              className
            )}
            onClick={() => document.getElementById(itemId)?.click()}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="h-2 w-2 rounded-full bg-white"
              initial={false}
              animate={{ scale: isChecked ? 1 : 0 }}
              transition={{ duration: 0.2 }}
            />
          </motion.div>
        </div>
        {label && (
          <label htmlFor={itemId} className="cursor-pointer text-sm font-medium text-foreground">
            {label}
          </label>
        )}
      </div>
    )
  }
)

RadioGroupItem.displayName = "RadioGroupItem"
