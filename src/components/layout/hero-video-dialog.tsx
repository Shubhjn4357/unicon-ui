"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Play, X } from "lucide-react"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface HeroVideoDialogProps {
  videoSrc: string
  thumbnailSrc: string
  thumbnailAlt?: string
  className?: string
}

export function HeroVideoDialog({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
  className,
}: HeroVideoDialogProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className={cn("relative", className)}>
      <div
        className="group relative cursor-pointer overflow-hidden rounded border border-border bg-card shadow-sm transition-all hover:shadow-md"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-background/20 transition-colors group-hover:bg-background/40">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-primary shadow-lg transition-transform group-hover:scale-110">
            <Play className="h-8 w-8 ml-1 fill-current" />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-5xl aspect-video overflow-hidden rounded shadow-2xl bg-card"
            >
              <iframe
                src={videoSrc}
                className="h-full w-full border-none"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
              <button
                className="absolute top-4 right-4 rounded-full bg-background/50 p-2 text-foreground transition-colors hover:bg-background/70"
                onClick={() => setIsOpen(false)}
              >
                <X className="h-5 w-5" />
                <span className="sr-only">Close</span>
              </button>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  )
}
