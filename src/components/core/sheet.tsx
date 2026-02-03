"use client"

import { AnimatePresence, motion } from "framer-motion"
import { X } from "lucide-react"
import type React from "react"
import { createContext, useContext, useEffect, useState } from "react"
import { cn } from "../../lib/utils"

// --- Context ---

interface SheetContextProps {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const SheetContext = createContext<SheetContextProps | undefined>(undefined)

const useSheet = () => {
  const context = useContext(SheetContext)
  if (!context) throw new Error("useSheet must be used within Sheet")
  return context
}

// --- Components ---

interface SheetProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

export function Sheet({ children, open, onOpenChange }: SheetProps) {
  const [internalOpen, setInternalOpen] = useState(false)
  const isControlled = open !== undefined
  const isOpen = isControlled ? open : internalOpen

  const setIsOpen = (newOpen: boolean) => {
    if (!isControlled) setInternalOpen(newOpen)
    onOpenChange?.(newOpen)
  }

  return <SheetContext.Provider value={{ isOpen, setIsOpen }}>{children}</SheetContext.Provider>
}

export function SheetTrigger({
  children,
  asChild,
  className,
}: { children: React.ReactNode; asChild?: boolean; className?: string }) {
  const { setIsOpen } = useSheet()
  return (
    <div role="button" className={cn("inline-block", className)} onClick={() => setIsOpen(true)}>
      {children}
    </div>
  )
}

interface SheetContentProps {
  children: React.ReactNode
  side?: "left" | "right" | "top" | "bottom"
  className?: string
  overlayClassName?: string
}

export function SheetContent({
  children,
  side = "right",
  className,
  overlayClassName,
}: SheetContentProps) {
  const { isOpen, setIsOpen } = useSheet()

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  const variants = {
    left: { x: "-100%", opacity: 0 },
    right: { x: "100%", opacity: 0 },
    top: { y: "-100%", opacity: 0 },
    bottom: { y: "100%", opacity: 0 },
  }

  const active = { x: 0, y: 0, opacity: 1 }

  const positionStyles = {
    left: "inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm",
    right: "inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm",
    top: "inset-x-0 top-0 w-full border-b max-h-[50vh]",
    bottom: "inset-x-0 bottom-0 w-full border-t max-h-[50vh]",
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className={cn("fixed inset-0 z-50 bg-black/40 backdrop-blur-[2px]", overlayClassName)}
          />
          {/* Content */}
          <motion.div
            initial={variants[side]}
            animate={active}
            exit={variants[side]}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(
              "fixed z-50 bg-background shadow-2xl p-6 transition-all duration-300 ease-in-out",
              positionStyles[side],
              "unicorn-card", // Semantic class for panel styling
              className
            )}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
            {children}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function SheetHeader({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col space-y-2 text-center sm:text-left mb-6", className)}
      {...props}
    >
      {children}
    </div>
  )
}

export function SheetTitle({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2 className={cn("text-lg font-semibold text-foreground", className)} {...props}>
      {children}
    </h2>
  )
}

export function SheetDescription({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p className={cn("text-sm text-neutral-500 dark:text-neutral-400", className)} {...props}>
      {children}
    </p>
  )
}
