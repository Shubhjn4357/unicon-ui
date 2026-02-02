"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronRight, Menu, X } from "lucide-react"
import * as React from "react"
import { cn } from "../../lib/utils"
import { Button } from "../core/button"

export interface SidebarItemProps {
  icon?: React.ReactNode
  label: string
  href?: string
  active?: boolean
  onClick?: () => void
  children?: React.ReactNode
}

export function SidebarItem({ icon, label, active, onClick, children }: SidebarItemProps) {
  return (
    <div className="w-full">
      <button
        onClick={onClick}
        className={cn(
          "flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all",
          "hover:bg-accent hover:text-accent-foreground",
          active ? "bg-accent text-accent-foreground font-medium" : "text-muted-foreground"
        )}
      >
        {icon && <span className="shrink-0">{icon}</span>}
        <span className="flex-1 text-left">{label}</span>
        {children && (
          <ChevronRight className={cn("h-4 w-4 transition-transform", active && "rotate-90")} />
        )}
      </button>
    </div>
  )
}

export interface CollapsibleSidebarProps {
  items: SidebarItemProps[]
  className?: string
  logo?: React.ReactNode
  footer?: React.ReactNode
  defaultCollapsed?: boolean
}

export function CollapsibleSidebar({
  items,
  className,
  logo,
  footer,
  defaultCollapsed = false,
}: CollapsibleSidebarProps) {
  const [isCollapsed, setIsCollapsed] = React.useState(defaultCollapsed)

  return (
    <div
      className={cn(
        "flex flex-col border-r border-border bg-card h-full transition-all duration-300",
        isCollapsed ? "w-16" : "w-64",
        className
      )}
    >
      <div className="flex items-center h-16 px-4 border-b border-border">
        {!isCollapsed && <div className="flex-1 truncate font-bold">{logo || "Unicorn UI"}</div>}
        <Button
          variant="ghost"
          size="icon"
          className="ml-auto"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      </div>

      <div className="flex-1 overflow-y-auto p-3 space-y-1">
        {items.map((item, idx) => (
          <SidebarItem key={idx} {...item} />
        ))}
      </div>

      {footer && <div className="p-4 border-t border-border mt-auto">{!isCollapsed && footer}</div>}
    </div>
  )
}
