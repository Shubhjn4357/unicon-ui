"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { cn } from "../../lib/utils"

export const InteractiveBook = ({ className }: { className?: string }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      className={cn(
        "perspective-1000 relative flex h-96 w-64 items-center justify-center",
        className
      )}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <div className="preserve-3d relative h-full w-full transition-transform duration-700">
        {/* Cover */}
        <motion.div
          animate={{ rotateY: isOpen ? -180 : 0 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          className="absolute inset-0 z-20 h-full w-full origin-left rounded-r-lg bg-primary shadow-xl"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="absolute inset-0 flex items-center justify-center text-primary-foreground backface-hidden">
            <h3 className="text-2xl font-bold">The Book</h3>
          </div>
          <div className="absolute inset-0 flex items-center justify-center bg-card rotate-y-180 backface-hidden">
            <p className="p-4 text-sm text-muted-foreground">This is the inside of the cover.</p>
          </div>
        </motion.div>

        {/* Pages */}
        <motion.div
          animate={{ rotateY: isOpen ? -175 : 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeInOut" }}
          className="absolute inset-0 z-10 h-full w-full origin-left rounded-r-lg bg-card shadow-lg border-l border-border"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="p-6">
            <h4 className="mb-4 text-xl font-bold text-card-foreground">Chapter 1</h4>
            <p className="text-sm text-muted-foreground">
              Once upon a time in a digital library far, far away...
            </p>
          </div>
        </motion.div>

        {/* Back Cover */}
        <div className="absolute inset-0 h-full w-full rounded-r-lg bg-primary/80 shadow-xl" />
      </div>
    </div>
  )
}
InteractiveBook.displayName = "InteractiveBook"
