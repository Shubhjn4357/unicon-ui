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
  value?: string | string[]
  onValueChange?: (value: string | string[]) => void
  collapsible?: boolean
}

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  (
    {
      items,
      type = "single",
      defaultValue,
      value,
      onValueChange,
      collapsible = true,
      className,
      ...props
    },
    ref
  ) => {
    const [uncontrolledOpenItems, setUncontrolledOpenItems] = React.useState<Set<string>>(() => {
      if (defaultValue) {
        return new Set(Array.isArray(defaultValue) ? defaultValue : [defaultValue])
      }
      return new Set()
    })

    const isControlled = value !== undefined
    const openItems = React.useMemo(() => {
      if (isControlled && value) {
        return new Set(Array.isArray(value) ? value : [value])
      }
      return uncontrolledOpenItems
    }, [isControlled, value, uncontrolledOpenItems])

    const toggleItem = (id: string) => {
      const newSet = new Set(openItems)
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

      const newValue = Array.from(newSet)

      if (!isControlled) {
        setUncontrolledOpenItems(newSet)
      }

      onValueChange?.(type === "single" ? newValue[0] || "" : newValue)
    }

    return (
      <div ref={ref} className={cn("space-y-2", className)} {...props}>
        {items.map((item, idx) => {
          const isOpen = openItems.has(item.id)
          return (
            <div
              key={item.id || idx}
              className={cn(
                "overflow-hidden rounded border border-border",
                "unicorn-card" // Treat each accordion item like a card for themes
              )}
            >
              <button
                type="button"
                onClick={() => toggleItem(item.id)}
                className="flex w-full items-center justify-between bg-card px-4 py-3 text-left font-medium transition-colors hover:bg-accent/50 cursor-pointer"
              >
                <span>{item.title}</span>
                <motion.svg
                  className="h-5 w-5 shrink-0 text-muted-foreground"
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
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="bg-card px-4 py-3 text-sm text-muted-foreground">
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
