"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface Card {
  id: number
  name: string
  content: React.ReactNode
}

export interface CardStackProps extends HTMLMotionProps<"div"> {
  items: Card[]
  offset?: number
  scaleFactor?: number
}

/**
 * Native CardStack - Stacked swipeable cards
 */
export const CardStack = React.forwardRef<HTMLDivElement, CardStackProps>(
  ({ items, offset = 10, scaleFactor = 0.06, className, ...props }, ref) => {
    const [cards] = React.useState<Card[]>(items)

    return (
      <motion.div
        ref={ref}
        className={cn("relative h-60 w-60 md:h-60 md:w-96", className)}
        {...props}
      >
        {cards.map((card, index) => {
          return (
            <motion.div
              key={card.id}
              className="absolute h-60 w-60 md:h-60 md:w-96 rounded-3xl bg-card border border-border p-4 shadow-xl flex flex-col justify-between"
              style={{
                transformOrigin: "top center",
              }}
              animate={{
                top: index * -offset,
                scale: 1 - index * scaleFactor, // decrease scale for cards behind
                zIndex: cards.length - index, // decrease z-index
              }}
            >
              <div className="group flex h-full w-full flex-col">
                <p className="text-lg font-bold text-foreground">{card.name}</p>
                <div className="mt-2 text-sm font-normal text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {card.content}
                </div>
              </div>
            </motion.div>
          )
        })}
      </motion.div>
    )
  }
)

CardStack.displayName = "CardStack"
