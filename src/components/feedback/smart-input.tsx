"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Loader2, Search, X } from "lucide-react"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface SmartInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  isLoading?: boolean
  leftIcon?: React.ReactNode
  onClear?: () => void
}

export const SmartInput = React.forwardRef<HTMLInputElement, SmartInputProps>(
  (
    { label, error, isLoading, leftIcon, onClear, className, type, value, onChange, ...props },
    ref
  ) => {
    const [isFocused, setIsFocused] = React.useState(false)

    return (
      <div className="w-full space-y-1.5">
        {label && <label className="text-sm font-medium text-foreground ml-1">{label}</label>}
        <div className="relative group">
          <div
            className={cn(
              "flex items-center rounded-(--radius) border border-border bg-card px-3 py-2 transition-all duration-200",
              isFocused && "border-primary ring-2 ring-primary/20",
              error && "border-destructive ring-destructive/20"
            )}
          >
            {(leftIcon && (
              <div className="mr-2 text-muted-foreground group-focus-within:text-primary transition-colors">
                {leftIcon}
              </div>
            )) ||
              (type === "search" && (
                <Search className="mr-2 h-4 w-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
              ))}

            <input
              ref={ref}
              type={type}
              className={cn(
                "flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
                className
              )}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              value={value}
              onChange={onChange}
              {...props}
            />

            <AnimatePresence>
              {value && value.toString().length > 0 && onClear && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  onClick={onClear}
                  className="ml-2 rounded-full p-0.5 hover:bg-accent transition-colors cursor-pointer"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </motion.button>
              )}
            </AnimatePresence>

            {isLoading && (
              <div className="ml-2">
                <Loader2 className="h-4 w-4 animate-spin text-primary" />
              </div>
            )}
          </div>
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-medium text-destructive ml-1"
          >
            {error}
          </motion.p>
        )}
      </div>
    )
  }
)

SmartInput.displayName = "SmartInput"
