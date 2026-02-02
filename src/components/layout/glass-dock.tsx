"use client"

import { motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface GlassDockProps {
  /**
   * Items to display in the dock
   */
  items: Array<{
    icon: React.ReactNode
    label: string
    href?: string
    onClick?: () => void
  }>
  /**
   * Additional CSS classes
   */
  className?: string
  /**
   * Magnification scale on hover
   * @default 1.5
   */
  magnification?: number
  /**
   * Distance from hovered item to apply magnification
   * @default 100
   */
  distance?: number
}

/**
 * GlassDock - Glassmorphism dock component with hover magnification
 * Features backdrop blur, hover effects, and smooth icon scaling
 */
export const GlassDock = React.forwardRef<HTMLDivElement, GlassDockProps>(
  ({ items, className, magnification = 1.5, distance = 100 }, ref) => {
    const [hoveredIndex, setHoveredIndex] = React.useState<number | null>(null)
    const mouseX = React.useRef<number>(0)

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      mouseX.current = e.clientX
    }

    return (
      <motion.div
        ref={ref}
        className={cn(
          "glass-effect-strong flex items-center gap-2 rounded-2xl p-3 shadow-xl",
          className
        )}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => setHoveredIndex(null)}
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {items.map((item, index) => (
          <DockItem
            key={index}
            item={item}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            magnification={magnification}
            distance={distance}
          />
        ))}
      </motion.div>
    )
  }
)

GlassDock.displayName = "GlassDock"

interface DockItemProps {
  item: GlassDockProps["items"][0]
  index: number
  hoveredIndex: number | null
  setHoveredIndex: (index: number | null) => void
  magnification: number
  distance: number
}

function DockItem({ item, index, hoveredIndex, setHoveredIndex, magnification }: DockItemProps) {
  const ref = React.useRef<HTMLButtonElement>(null)
  const [scale, setScale] = React.useState(1)

  React.useEffect(() => {
    if (hoveredIndex === null) {
      setScale(1)
      return
    }

    const diff = Math.abs(hoveredIndex - index)
    const scaleFactor = Math.max(0, 1 - diff * 0.3)
    setScale(1 + (magnification - 1) * scaleFactor)
  }, [hoveredIndex, index, magnification])

  const handleClick = () => {
    if (item.onClick) {
      item.onClick()
    } else if (item.href) {
      window.location.href = item.href
    }
  }

  return (
    <motion.button
      ref={ref}
      className={cn(
        "group relative flex h-12 w-12 items-center justify-center rounded-xl transition-colors",
        "hover:bg-white/10 dark:hover:bg-white/5"
      )}
      onMouseEnter={() => setHoveredIndex(index)}
      onClick={handleClick}
      animate={{ scale }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative z-10">{item.icon}</div>

      {/* Tooltip */}
      <motion.div
        className={cn(
          "absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg px-3 py-1.5 text-sm font-medium",
          "glass-effect-strong opacity-0 group-hover:opacity-100 transition-opacity"
        )}
        initial={{ y: 10, opacity: 0 }}
        whileHover={{ y: 0, opacity: 1 }}
      >
        {item.label}
      </motion.div>
    </motion.button>
  )
}
