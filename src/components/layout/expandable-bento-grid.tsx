"use client"

import { AnimatePresence, motion } from "framer-motion"
import React, { useState } from "react"
import { cn } from "../../lib/utils"

interface BentoItem {
  id: string
  title: string
  description: string
  className?: string
}

export const ExpandableBentoGrid = ({
  items = [],
  className,
}: {
  items: BentoItem[]
  className?: string
}) => {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  return (
    <div className={cn("grid auto-rows-[200px] grid-cols-3 gap-4", className)}>
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={`card-${item.id}`}
          onClick={() => setSelectedId(item.id)}
          className={cn(
            "group relative cursor-pointer overflow-hidden rounded-xl bg-card p-6 border border-border hover:shadow-md transition-shadow",
            item.className
          )}
        >
          <motion.div
            layoutId={`content-${item.id}`}
            className="flex h-full flex-col justify-between"
          >
            <h3 className="text-xl font-bold text-card-foreground">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </motion.div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-${selectedId}`}
              className="h-[500px] w-full max-w-2xl cursor-default overflow-hidden rounded-2xl bg-card p-8 border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              {items.map((item) => {
                if (item.id === selectedId) {
                  return (
                    <motion.div
                      key={item.id}
                      layoutId={`content-${item.id}`}
                      className="flex h-full flex-col"
                    >
                      <button
                        onClick={() => setSelectedId(null)}
                        className="absolute right-4 top-4 rounded-full bg-secondary p-2 hover:bg-muted"
                      >
                        ✕
                      </button>
                      <h2 className="mb-4 text-3xl font-bold text-card-foreground">{item.title}</h2>
                      <p className="text-lg text-muted-foreground">{item.description}</p>
                      <div className="mt-8 flex-1 rounded-xl bg-muted" />
                    </motion.div>
                  )
                }
                return null
              })}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
ExpandableBentoGrid.displayName = "ExpandableBentoGrid"
