"use client"

import { AnimatePresence, type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface AlertProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "destructive" | "success" | "warning"
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
  children?: React.ReactNode
}

export const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  (
    { children, variant = "default", dismissible = false, onDismiss, icon, className, ...props },
    ref
  ) => {
    const [isVisible, setIsVisible] = React.useState(true)

    const handleDismiss = () => {
      setIsVisible(false)
      setTimeout(() => onDismiss?.(), 200)
    }

    const variantStyles = {
      default: "bg-brand/10 text-brand border-brand/20",
      destructive:
        "bg-red-50 text-red-900 border-red-200 dark:bg-red-900/20 dark:text-red-400 dark:border-red-800",
      success:
        "bg-green-50 text-green-900 border-green-200 dark:bg-green-900/20 dark:text-green-400 dark:border-green-800",
      warning:
        "bg-yellow-50 text-yellow-900 border-yellow-200 dark:bg-yellow-900/20 dark:text-yellow-400 dark:border-yellow-800",
    }

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.div
            ref={ref}
            role="alert"
            className={cn(
              "relative rounded-(--radius) border p-4",
              variantStyles[variant],
              className
            )}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.2 }}
            {...props}
          >
            <div className="flex gap-3">
              {icon && <div className="shrink-0 pt-0.5">{icon}</div>}
              <div className="flex-1">{children}</div>
              {dismissible && (
                <button
                  onClick={handleDismiss}
                  className="shrink-0 rounded-sm opacity-70 transition-opacity hover:opacity-100"
                  aria-label="Dismiss"
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    )
  }
)

Alert.displayName = "Alert"

export const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))

AlertTitle.displayName = "AlertTitle"

export const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm opacity-90", className)} {...props} />
))

AlertDescription.displayName = "AlertDescription"
