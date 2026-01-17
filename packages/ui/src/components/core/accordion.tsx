"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  collapsible?: boolean
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, type = "single", defaultValue, collapsible = true, className, ...props }, ref) => {
    const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
      if (defaultValue) {
        return new Set(Array.isArray(defaultValue) ? defaultValue : [defaultValue])
      }
      return new Set()
    })

    const toggleItem = (id: string) => {
      setOpenItems((prev) => {
        const newSet = new Set(prev)
        const isOpen = newSet.has(id)

        if (type === "single") {
          newSet.clear()
          if (!isOpen) newSet.add(id)
        } else {
          if (isOpen && collapsible) {
            newSet.delete(id)
          } else if (!isOpen) {
            newSet.add(id)
          }
        }
        return newSet
      })
    }

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {items.map((item) => {
          const isOpen = openItems.has(item.id)
          return (
            <div key={item.id} className="overflow-hidden rounded-(--radius) border border-border">
              <button
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between bg-surface px-4 py-3 text-left font-medium transition-colors hover:bg-surface-elevated"
              >
                <span>{item.title}</span>
                <motion.svg
                  className="h-5 w-5 shrink-0 text-foreground-secondary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </motion.svg>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                  >
                    <div className="border-t border-border bg-surface px-4 py-3 text-sm text-foreground-secondary">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )
        })}
      </div>
    )
  }
)

Accordion.displayName = "Accordion"
