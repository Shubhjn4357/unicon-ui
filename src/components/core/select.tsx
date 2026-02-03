"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, ChevronDown } from "lucide-react"
import type React from "react"
import { createContext, useContext, useEffect, useRef, useState } from "react"
import { cn } from "../../lib/utils"

// --- Context ---

interface SelectContextProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
  value: string | undefined
  setValue: (value: string) => void
  placeholder?: string
  optionsMap: Map<string, string> // To store value-label pairs
}

const SelectContext = createContext<SelectContextProps | undefined>(undefined)

const useSelect = () => {
  const context = useContext(SelectContext)
  if (!context) {
    throw new Error("useSelect must be used within a Select")
  }
  return context
}

// --- Components ---

interface SelectProps {
  children: React.ReactNode
  value?: string
  defaultValue?: string
  placeholder?: string
  onValueChange?: (value: string) => void
  disabled?: boolean
}

export function Select({
  children,
  value: controlledValue,
  defaultValue,
  placeholder,
  onValueChange,
  disabled,
}: SelectProps) {
  const [internalValue, setInternalValue] = useState(defaultValue)
  const [isOpen, setIsOpen] = useState(false)
  const optionsMap = useRef(new Map<string, string>()).current

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue

  const setValue = (newValue: string) => {
    if (!isControlled) {
      setInternalValue(newValue)
    }
    onValueChange?.(newValue)
  }

  // Close when disabled
  useEffect(() => {
    if (disabled) setIsOpen(false)
  }, [disabled])

  return (
    <SelectContext.Provider value={{ isOpen, setIsOpen, value, setValue, placeholder, optionsMap }}>
      <div className={cn("relative w-full", disabled && "opacity-50 pointer-events-none")}>
        {children}
      </div>
    </SelectContext.Provider>
  )
}

interface SelectTriggerProps {
  children: React.ReactNode
  className?: string
}

export function SelectTrigger({ children, className }: SelectTriggerProps) {
  const { isOpen, setIsOpen } = useSelect()

  return (
    <button
      type="button"
      onClick={() => setIsOpen(!isOpen)}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-border bg-card px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        "unicorn-input", // Behaves like an input visually
        className
      )}
    >
      {children}
      <ChevronDown className="h-4 w-4 opacity-50" />
    </button>
  )
}

export function SelectValue({ placeholder: propPlaceholder }: { placeholder?: string }) {
  const { value, placeholder: contextPlaceholder, optionsMap } = useSelect()
  const label = (value && optionsMap.get(value)) || propPlaceholder || contextPlaceholder

  return <span className={cn(!value && "text-muted-foreground")}>{label || "Select..."}</span>
}

export function SelectContent({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  const { isOpen, setIsOpen } = useSelect()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [setIsOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.15 }}
          className={cn(
            "absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md border border-border bg-card p-1 text-foreground shadow-md",
            "unicorn-card unicorn-select-content", // Uses card styling
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export function SelectGroup({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return <div className={cn("p-1", className)}>{children}</div>
}

export function SelectLabel({
  children,
  className,
}: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("px-2 py-1.5 text-xs font-semibold text-muted-foreground", className)}>
      {children}
    </div>
  )
}

interface SelectItemProps {
  value: string
  children: React.ReactNode
  className?: string
}

export function SelectItem({ value, children, className }: SelectItemProps) {
  const { value: selectedValue, setValue, setIsOpen, optionsMap } = useSelect()

  // Register option label
  if (typeof children === "string") {
    optionsMap.set(value, children)
  }

  const isSelected = selectedValue === value

  return (
    <div
      onClick={() => {
        setValue(value)
        setIsOpen(false)
      }}
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors hover:bg-accent hover:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
        isSelected && "bg-accent text-accent-foreground",
        className
      )}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        {isSelected && <Check className="h-4 w-4" />}
      </span>
      {children}
    </div>
  )
}
