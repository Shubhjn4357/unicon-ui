"use client"

import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export interface CollapsibleSidebarProps {
  children: React.ReactNode
  defaultCollapsed?: boolean
  collapsedWidth?: number
  expandedWidth?: number
  position?: "left" | "right"
  mobileBreakpoint?: number
  showToggle?: boolean
  className?: string
  contentClassName?: string
  onCollapsedChange?: (collapsed: boolean) => void
}

export function CollapsibleSidebar({
  children,
  defaultCollapsed = false,
  collapsedWidth = 80,
  expandedWidth = 280,
  position = "left",
  mobileBreakpoint = 768,
  showToggle = true,
  className,
  contentClassName,
  onCollapsedChange,
}: CollapsibleSidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)
  const [isMobile, setIsMobile] = useState(false)
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const sidebarRef = useRef<HTMLDivElement>(null)

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < mobileBreakpoint
      setIsMobile(mobile)
      if (!mobile) {
        setIsMobileOpen(false)
      }
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [mobileBreakpoint])

  // Handle collapse toggle
  const toggleCollapse = () => {
    const newState = !isCollapsed
    setIsCollapsed(newState)
    onCollapsedChange?.(newState)
  }

  // Handle mobile toggle
  const toggleMobile = () => {
    setIsMobileOpen(!isMobileOpen)
  }

  // Close on outside click (mobile)
  useEffect(() => {
    if (!isMobile || !isMobileOpen) return

    const handleClickOutside = (event: MouseEvent) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
        setIsMobileOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [isMobile, isMobileOpen])

  // Mobile menu button
  if (isMobile) {
    return (
      <>
        {/* Mobile Toggle Button */}
        <button
          onClick={toggleMobile}
          className={cn(
            "fixed top-4 z-50 rounded-lg bg-background p-2 shadow-lg border border-border",
            position === "left" ? "left-4" : "right-4"
          )}
          aria-label="Toggle sidebar"
        >
          {isMobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {/* Mobile Overlay */}
        <AnimatePresence>
          {isMobileOpen && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-40 bg-black/50"
                onClick={() => setIsMobileOpen(false)}
              />
              <motion.div
                ref={sidebarRef}
                initial={{ x: position === "left" ? "-100%" : "100%" }}
                animate={{ x: 0 }}
                exit={{ x: position === "left" ? "-100%" : "100%" }}
                transition={{ type: "spring", damping: 30, stiffness: 300 }}
                className={cn(
                  "fixed top-0 z-50 h-full bg-background shadow-2xl border-r border-border",
                  position === "left" ? "left-0" : "right-0",
                  className
                )}
                style={{ width: expandedWidth }}
              >
                <div className={cn("h-full overflow-y-auto p-4", contentClassName)}>{children}</div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </>
    )
  }

  // Desktop sidebar
  return (
    <motion.div
      ref={sidebarRef}
      animate={{
        width: isCollapsed ? collapsedWidth : expandedWidth,
      }}
      transition={{ type: "spring", damping: 30, stiffness: 300 }}
      className={cn("relative h-full bg-background border-r border-border", className)}
    >
      {/* Toggle Button */}
      {showToggle && (
        <button
          onClick={toggleCollapse}
          className={cn(
            "absolute top-4 z-10 rounded-full bg-background p-1.5 shadow-md border border-border hover:bg-accent transition-colors",
            position === "left" ? "-right-3" : "-left-3"
          )}
          aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {position === "left" ? (
            isCollapsed ? (
              <ChevronRight className="h-4 w-4" />
            ) : (
              <ChevronLeft className="h-4 w-4" />
            )
          ) : isCollapsed ? (
            <ChevronLeft className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </button>
      )}

      {/* Content */}
      <div className={cn("h-full overflow-hidden", contentClassName)}>
        <motion.div
          animate={{
            opacity: isCollapsed ? 0 : 1,
            x: isCollapsed ? (position === "left" ? -20 : 20) : 0,
          }}
          transition={{ duration: 0.2 }}
          className="h-full overflow-y-auto p-4"
        >
          {children}
        </motion.div>
      </div>
    </motion.div>
  )
}

// Sidebar content components
export function SidebarHeader({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return <div className={cn("mb-6 border-b border-border pb-4", className)}>{children}</div>
}

export function SidebarSection({
  title,
  children,
  className,
}: {
  title?: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("mb-6", className)}>
      {title && (
        <h3 className="mb-3 text-sm font-semibold text-muted-foreground uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="space-y-1">{children}</div>
    </div>
  )
}

export function SidebarItem({
  icon,
  children,
  active,
  onClick,
  className,
}: {
  icon?: React.ReactNode
  children: React.ReactNode
  active?: boolean
  onClick?: () => void
  className?: string
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors",
        active
          ? "bg-primary text-primary-foreground"
          : "hover:bg-accent hover:text-accent-foreground",
        className
      )}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span className="truncate">{children}</span>
    </button>
  )
}
