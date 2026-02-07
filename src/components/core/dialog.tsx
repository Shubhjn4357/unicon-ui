"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import { X } from "lucide-react"
import { cn } from "../../lib/utils"
// We'll use our FocusTrap component for managing focus
import { FocusTrap } from "../../components/utils/focus-trap"

export interface DialogProps {
  /**
   * Whether the dialog is open
   */
  open?: boolean
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void
  /**
   * Dialog content
   */
  children: React.ReactNode
}

/**
 * Dialog Context
 * Provides open state and toggle handler to child components
 */
interface DialogContextValue {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const DialogContext = React.createContext<DialogContextValue | undefined>(undefined)

const useDialog = () => {
  const context = React.useContext(DialogContext)
  if (!context) {
    throw new Error("Dialog components must be used within a Dialog")
  }
  return context
}

/**
 * Dialog Component
 * 
 * Root component that manages the dialog state.
 * 
 * @example
 * ```tsx
 * <Dialog open={open} onOpenChange={setOpen}>
 *   <DialogContent>...</DialogContent>
 * </Dialog>
 * ```
 */
export function Dialog({ open = false, onOpenChange, children }: DialogProps) {
// Support both controlled and uncontrolled state if needed, 
// but typically controlled is preferred for complex dialogs.
// For simplicity and "native" feel, we trust the props here or add internal state if open is undefined.

  const [internalOpen, setInternalOpen] = React.useState(false)

  const isControlled = open !== undefined
  const show = isControlled ? open : internalOpen

  const handleOpenChange = React.useCallback((newOpen: boolean) => {
    if (!isControlled) {
      setInternalOpen(newOpen)
    }
    onOpenChange?.(newOpen)
  }, [isControlled, onOpenChange])

  return (
    <DialogContext.Provider value={{ open: show, onOpenChange: handleOpenChange }}>
      {children}
    </DialogContext.Provider>
  )
}

/**
 * DialogTrigger Component
 * 
 * The element that opens the dialog.
 */
export const DialogTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean }
>(({ className, onClick, children, ...props }, ref) => {
  const { onOpenChange } = useDialog()

  return (
    <button
      ref={ref}
      type="button"
      className={cn("inline-flex justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2", className)}
      onClick={(e) => {
        onClick?.(e)
        onOpenChange(true)
      }}
      {...props}
    >
      {children}
    </button>
  )
})
DialogTrigger.displayName = "DialogTrigger"

/**
 * DialogContent Component
 * 
 * The main container for the dialog overlay and content.
 * Renders into a portal node (document.body by default).
 * Handles focus trapping, scroll locking, and escape key.
 */
export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & { showClose?: boolean }
>(({ className, children, showClose = true, ...props }, ref) => {
  const { open, onOpenChange } = useDialog()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  // Scroll lock
  React.useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.paddingRight = `${scrollbarWidth}px`
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.paddingRight = ""
        document.body.style.overflow = ""
      }
    }
  }, [open])

  if (!mounted || !open) return null

  // Using Portal to render at the end of body
  return createPortal(
    <FocusTrap
      enabled={open}
      onEscape={() => onOpenChange(false)}
      restoreFocus={true}
    >
      <div className="fixed inset-0 z-50 flex items-start justify-center sm:items-center">
        {/* Backdrop */}
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm transition-all duration-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          onClick={() => onOpenChange(false)}
          aria-hidden="true"
          data-state={open ? "open" : "closed"}
        />

        {/* Dialog Panel */}
        <div
          ref={ref}
          className={cn(
            "fixed z-50 grid w-full gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg md:w-full",
            "max-w-lg w-[calc(100%-2rem)] mt-16 sm:mt-0", // Responsive sizing
            className
          )}
          role="dialog"
          aria-modal="true"
          data-state={open ? "open" : "closed"}
          {...props}
        >
          {children}

          {showClose && (
            <button
              onClick={() => onOpenChange(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          )}
        </div>
      </div>
    </FocusTrap>,
    document.body
  )
})
DialogContent.displayName = "DialogContent"

/**
 * DialogHeader Component
 */
export const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

/**
 * DialogFooter Component
 */
export const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

/**
 * DialogTitle Component
 */
export const DialogTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = "DialogTitle"

/**
 * DialogDescription Component
 */
export const DialogDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = "DialogDescription"
