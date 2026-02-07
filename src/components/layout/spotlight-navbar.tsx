"use client"

import { motion } from "framer-motion"
import React, { useRef, useState } from "react"
import { cn } from "../../lib/utils"

interface NavItem {
  id: string
  label: string
}

const items: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "products", label: "Products" },
  { id: "pricing", label: "Pricing" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
]

export const SpotlightNavbar = ({ className }: { className?: string }) => {
  const [activeTab, setActiveTab] = useState(items[0].id)

  return (
    <div
      className={cn(
        "relative flex w-fit items-center gap-2 rounded-full border border-border bg-background p-2 shadow-sm",
        className
      )}
    >
      {items.map((item) => (
        <button
          key={item.id}
          onClick={() => setActiveTab(item.id)}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-colors outline-none focus-visible:ring-2",
            activeTab === item.id
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {activeTab === item.id && (
            <motion.div
              layoutId="bubble"
              className="absolute inset-0 z-10 rounded-full bg-secondary mix-blend-multiply dark:mix-blend-difference"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-20">{item.label}</span>
        </button>
      ))}
    </div>
  )
}
SpotlightNavbar.displayName = "SpotlightNavbar"
