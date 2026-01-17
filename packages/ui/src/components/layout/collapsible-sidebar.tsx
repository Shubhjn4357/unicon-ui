"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface CollapsibleSidebarProps
  extends Omit<
    React.HTMLAttributes<HTMLDivElement>,
    "onDrag" | "onDragStart" | "onDragEnd" | "onAnimationStart" | "onAnimationEnd"
  > {
  icon?: React.ReactNode
  title?: string
  defaultCollapsed?: boolean
}

/**
 * Native CollapsibleSidebar - Expandable sidebar navigation
 */
export const CollapsibleSidebar = React.forwardRef<HTMLDivElement, CollapsibleSidebarProps>(
  ({ icon, title = "Sidebar", children, defaultCollapsed = false, className, ...props }, ref) => {
    const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

    return (
      <motion.div
        ref={ref}
        className={cn("flex flex-col border-r border-border bg-surface h-full", className)}
        animate={{ width: isCollapsed ? 64 : 240 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        {...props}
      >
        <div className="flex items-center h-16 px-4 border-b border-border">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="p-2 hover:bg-surface-elevated rounded-md"
          >
            {icon || (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <AnimatePresence>
            {!isCollapsed && (
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="ml-3 font-semibold whitespace-nowrap overflow-hidden"
              >
                {title}
              </motion.span>
            )}
          </AnimatePresence>
        </div>
        <div className="flex-1 overflow-y-auto p-2">{children}</div>
      </motion.div>
    )
  }
)

CollapsibleSidebar.displayName = "CollapsibleSidebar"
