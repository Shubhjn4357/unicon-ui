"use client"

import * as React from "react"

import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"

interface PopoverContextValue {
  open: boolean
  setOpen: (open: boolean) => void
  triggerRef: React.MutableRefObject<HTMLElement | null>
}

const PopoverContext = React.createContext<PopoverContextValue | null>(null)

export interface PopoverProps {
  children: React.ReactNode
  open?: boolean
  onOpenChange?: (open: boolean) => void
  defaultOpen?: boolean
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  open: controlledOpen,
  onOpenChange,
  defaultOpen = false,
}) => {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const triggerRef = React.useRef<HTMLElement>(null)

  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const setOpen = (newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }

  return (
    <PopoverContext.Provider value={{ open, setOpen, triggerRef }}>
      {children}
    </PopoverContext.Provider>
  )
}

export const PopoverTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ children, onClick, ...props }, ref) => {
  const context = React.useContext(PopoverContext)
  if (!context) throw new Error("PopoverTrigger must be used within Popover")

  const combinedRef = React.useCallback(
    (node: HTMLButtonElement) => {
      ;(context.triggerRef as React.MutableRefObject<HTMLButtonElement | null>).current = node
      if (typeof ref === "function") ref(node)
      else if (ref) ref.current = node
    },
    [context.triggerRef, ref]
  )

  return (
    <button
      ref={combinedRef}
      onClick={(e) => {
        context.setOpen(!context.open)
        onClick?.(e)
      }}
      aria-expanded={context.open}
      {...props}
    >
      {children}
    </button>
  )
})

PopoverTrigger.displayName = "PopoverTrigger"

import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion"

export interface PopoverContentProps extends HTMLMotionProps<"div"> {
  align?: "start" | "center" | "end"
  side?: "top" | "bottom" | "left" | "right"
  sideOffset?: number
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  ({ children, align = "center", side = "bottom", sideOffset = 8, className, ...props }, _ref) => {
    const context = React.useContext(PopoverContext)
    const [mounted, setMounted] = React.useState(false)
    const [position, setPosition] = React.useState({ top: 0, left: 0 })
    const contentRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
      setMounted(true)
    }, [])

    React.useEffect(() => {
      if (!context?.open || !context.triggerRef.current || !contentRef.current) return

      const updatePosition = () => {
        const trigger = context.triggerRef.current
        const content = contentRef.current
        if (!trigger || !content) return

        const triggerRect = trigger.getBoundingClientRect()
        const contentRect = content.getBoundingClientRect()

        let top = 0
        let left = 0

        // Calculate position based on side
        if (side === "bottom") {
          top = triggerRect.bottom + sideOffset
        } else if (side === "top") {
          top = triggerRect.top - contentRect.height - sideOffset
        } else if (side === "left") {
          left = triggerRect.left - contentRect.width - sideOffset
          top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2
        } else if (side === "right") {
          left = triggerRect.right + sideOffset
          top = triggerRect.top + triggerRect.height / 2 - contentRect.height / 2
        }

        // Calculate alignment for top/bottom
        if (side === "bottom" || side === "top") {
          if (align === "start") {
            left = triggerRect.left
          } else if (align === "center") {
            left = triggerRect.left + triggerRect.width / 2 - contentRect.width / 2
          } else if (align === "end") {
            left = triggerRect.right - contentRect.width
          }
        }

        setPosition({ top, left })
      }

      updatePosition()
      window.addEventListener("resize", updatePosition)
      window.addEventListener("scroll", updatePosition, true)

      return () => {
        window.removeEventListener("resize", updatePosition)
        window.removeEventListener("scroll", updatePosition, true)
      }
    }, [context?.open, side, align, sideOffset])

    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (!context?.open) return
        const target = e.target as Node
        if (
          contentRef.current &&
          !contentRef.current.contains(target) &&
          context.triggerRef.current &&
          !context.triggerRef.current.contains(target)
        ) {
          context.setOpen(false)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      return () => document.removeEventListener("mousedown", handleClickOutside)
    }, [context])

    if (!context || !mounted) return null

    return createPortal(
      <AnimatePresence>
        {context.open && (
          <motion.div
            ref={contentRef}
            className={cn(
              "fixed z-50 rounded-(--radius) border border-border bg-card p-4 shadow-lg outline-none",
              "unicorn-popover unicorn-card", // Reuses card/popover styles
              className
            )}
            style={{ top: position.top, left: position.left }}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.15 }}
            {...props}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>,
      document.body
    )
  }
)

PopoverContent.displayName = "PopoverContent"
