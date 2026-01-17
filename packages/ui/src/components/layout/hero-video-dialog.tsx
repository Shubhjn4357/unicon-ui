"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
// import { cn } from "../../lib/utils"

export interface HeroVideoDialogProps {
  videoSrc: string
  thumbnailSrc: string
  thumbnailAlt?: string
}

/**
 * Native HeroVideoDialog - Video modal with thumbnail transition
 */
export const HeroVideoDialog: React.FC<HeroVideoDialogProps> = ({
  videoSrc,
  thumbnailSrc,
  thumbnailAlt = "Video thumbnail",
}) => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div className="relative">
      <div
        className="group relative cursor-pointer overflow-hidden rounded-(--radius) border border-border"
        onClick={() => setIsOpen(true)}
      >
        <img
          src={thumbnailSrc}
          alt={thumbnailAlt}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/40">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 shadow-lg transition-transform group-hover:scale-110">
            <svg className="h-6 w-6 text-black ml-1" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-full max-w-5xl aspect-video overflow-hidden rounded-(--radius) shadow-2xl bg-black"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <iframe
                src={videoSrc}
                className="w-full h-full"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              />
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
