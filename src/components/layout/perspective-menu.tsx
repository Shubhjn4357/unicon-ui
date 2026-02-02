"use client"

import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

interface MenuItem {
  label: string
  href: string
}

interface PerspectiveMenuProps {
  items: MenuItem[]
  isOpen: boolean
  onClose: () => void
  className?: string
}

export function PerspectiveMenu({ 
  items, 
  isOpen, 
  onClose,
  className 
}: PerspectiveMenuProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn("fixed inset-0 z-[50] flex items-center justify-center bg-background/90 backdrop-blur-sm", className)}
            onClick={onClose}
        >
             <nav className="flex flex-col gap-6 perspective-[1000px]">
                {items.map((item, i) => (
                    <motion.a
                        key={item.label}
                        href={item.href}
                        initial={{ opacity: 0, rotateX: 90, y: 50 }}
                        animate={{ opacity: 1, rotateX: 0, y: 0 }}
                        exit={{ opacity: 0, rotateX: -90, y: -50 }}
                        transition={{ 
                            delay: i * 0.1, 
                            duration: 0.5,
                            ease: [0.22, 1, 0.36, 1] 
                        }}
                        className="text-6xl font-black uppercase tracking-tighter hover:text-primary transition-colors cursor-pointer"
                        
                    >
                        {item.label}
                    </motion.a>
                ))}
             </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
