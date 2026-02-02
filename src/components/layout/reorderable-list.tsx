"use client"

import { Reorder } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface ReorderableListProps {
  items: string[]
  setItems: (items: string[]) => void
  className?: string
}

export function ReorderableList({ 
  items, 
  setItems, 
  className 
}: ReorderableListProps) {
  return (
    <Reorder.Group 
      axis="y" 
      values={items} 
      onReorder={setItems} 
      className={cn("flex flex-col gap-4", className)}
    >
      {items.map((item) => (
        <Reorder.Item 
            key={item} 
            value={item}
            className="p-4 rounded-xl border bg-card cursor-grab active:cursor-grabbing shadow-xs"
            whileDrag={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
        >
          <div className="flex items-center justify-between">
            <span className="font-medium">{item}</span>
            <span className="text-muted-foreground">::</span>
          </div>
        </Reorder.Item>
      ))}
    </Reorder.Group>
  )
}
