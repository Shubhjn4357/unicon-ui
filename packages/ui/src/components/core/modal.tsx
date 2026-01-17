"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"

export interface ModalProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  title?: string
  description?: string
  showClose?: boolean
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onOpenChange,
  children,
  title,
  description,
  showClose = true,
}) => {
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  React.useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && open) {
        onOpenChange?.(false)
      }
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [open, onOpenChange])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange?.(false)}
          />
          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className={cn(
                "relative w-full max-w-lg rounded-(--radius) border border-border bg-surface p-6 shadow-lg",
                "max-h-[90vh] overflow-y-auto"
              )}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              {showClose && (
                <button
                  onClick={() => onOpenChange?.(false)}
                  className="absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100"
                  aria-label="Close"
                >
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
              {title && <h2 className="mb-2 text-lg font-semibold text-foreground">{title}</h2>}
              {description && (
                <p className="mb-4 text-sm text-foreground-secondary">{description}</p>
              )}
              {children}
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}

Modal.displayName = "Modal"
