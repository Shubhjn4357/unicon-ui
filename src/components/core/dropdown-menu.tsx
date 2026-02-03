"use client"

import { AnimatePresence, motion } from "framer-motion"
import React, { useState, useRef, useEffect } from "react"
import { cn } from "../../lib/utils"
// import { ChevronRight } from "lucide-react" // Not used in this version

// --- Context ---
interface DropdownContextType {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}
const DropdownContext = React.createContext<DropdownContextType | undefined>(undefined)

// --- Components ---

interface DropdownMenuProps {
  children: React.ReactNode
}

export function DropdownMenu({ children }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div className="relative inline-block text-left" ref={menuRef}>
        {children}
      </div>
    </DropdownContext.Provider>
  )
}

interface DropdownTriggerProps {
  children: React.ReactNode
  asChild?: boolean
  className?: string
}

export function DropdownMenuTrigger({ children, className, asChild }: DropdownTriggerProps) {
  const context = React.useContext(DropdownContext)
  if (!context) throw new Error("DropdownMenuTrigger must be used within DropdownMenu")
  const { isOpen, setIsOpen } = context

  if (asChild && React.isValidElement(children)) {
    const childElement = children as React.ReactElement<React.HTMLAttributes<HTMLElement>>
    return React.cloneElement(childElement, {
      onClick: (e: React.MouseEvent<HTMLElement>) => {
        childElement.props.onClick?.(e)
        setIsOpen(!isOpen)
      },
      className: cn(childElement.props.className, className, "cursor-pointer"),
    })
  }

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={cn("cursor-pointer", className)}
      role="button"
    >
      {children}
    </div>
  )
}

interface DropdownContentProps {
  children: React.ReactNode
  className?: string
  width?: string | number
  align?: "start" | "end" | "center"
}

export function DropdownMenuContent({
  children,
  className,
  width = 220,
  align = "start",
}: DropdownContentProps) {
  const context = React.useContext(DropdownContext)
  if (!context) throw new Error("DropdownMenuContent must be used within DropdownMenu")
  const { isOpen } = context

  const alignmentClasses = {
    start: "left-0",
    end: "right-0",
    center: "left-1/2 -translate-x-1/2",
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.95 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ width }}
          className={cn(
            "absolute z-50 mt-2 bg-popover text-popover-foreground rounded-xl shadow-xl border border-border overflow-hidden",
            alignmentClasses[align],
            className
          )}
        >
          <div className="p-1">{children}</div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

interface DropdownItemProps {
  children: React.ReactNode
  onClick?: () => void
  icon?: React.ReactNode
  className?: string
  destructive?: boolean
}

export function DropdownMenuItem({
  children,
  onClick,
  icon,
  className,
  destructive,
}: DropdownItemProps) {
  const context = React.useContext(DropdownContext)
  const { setIsOpen } = context || {}

  const handleClick = () => {
    onClick?.()
    setIsOpen?.(false)
  }

  return (
    <button
      onClick={handleClick}
      className={cn(
        "bg-transparent flex w-full items-center gap-2 px-3 py-2 text-sm rounded-lg transition-colors hover:bg-accent hover:text-accent-foreground",
        destructive && "text-destructive hover:bg-destructive/10",
        className
      )}
    >
      {icon && <span className="h-4 w-4 shrink-0">{icon}</span>}
      {children}
    </button>
  )
}

export function DropdownMenuSeparator() {
  return <div className="h-px bg-border my-1 mx-1" />
}

export function DropdownMenuLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="px-3 py-1.5 text-xs font-semibold text-neutral-500 uppercase tracking-wider">
      {children}
    </div>
  )
}
