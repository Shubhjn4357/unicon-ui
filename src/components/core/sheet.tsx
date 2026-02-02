"use client"

import React, { useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { cn } from "../../lib/utils"
import { X } from "lucide-react"

interface SheetProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  position?: "left" | "right" | "top" | "bottom"
  className?: string
  overlayClassName?: string
}

export function Sheet({
  isOpen,
  onClose,
  children,
  position = "right",
  className,
  overlayClassName,
}: SheetProps) {
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

  const sharedStyles = "fixed z-50 bg-background shadow-2xl p-6 transition-all duration-300 ease-in-out"

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
            onClick={onClose}
            className={cn(
              "fixed inset-0 z-40 bg-black/40 backdrop-blur-[2px]",
              overlayClassName
            )}
          />
          {/* Content */}
          <motion.div
            initial={variants[position]}
            animate={active}
            exit={variants[position]}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className={cn(sharedStyles, positionStyles[position], className)}
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none disabled:pointer-events-none data-[state=open]:bg-secondary"
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
      className={cn(
        "flex flex-col space-y-2 text-center sm:text-left mb-6",
        className
      )}
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
