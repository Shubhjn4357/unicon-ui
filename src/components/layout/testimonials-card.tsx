"use client"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import React, { useState } from "react"
import { cn } from "../../lib/utils"

interface Testimonial {
  id: number
  name: string
  role: string
  message: string
  avatar?: string
}

export const TestimonialsCard = ({
  testimonials,
  className,
}: {
  testimonials: Testimonial[]
  className?: string
}) => {
  const [current, setCurrent] = useState(0)

  const next = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <div
      className={cn(
        "relative w-full max-w-lg overflow-hidden rounded-2xl bg-card p-8 shadow-xl border border-border",
        className
      )}
    >
      <div className="mb-6 text-muted-foreground/50">
        <Quote size={48} />
      </div>

      <div className="relative h-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0"
          >
            <p className="mb-6 text-lg italic leading-relaxed text-card-foreground">
              "{testimonials[current].message}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-linear-to-br from-primary to-accent" />
              <div>
                <h4 className="font-bold text-card-foreground">{testimonials[current].name}</h4>
                <p className="text-sm text-muted-foreground">{testimonials[current].role}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="absolute bottom-8 right-8 flex gap-2">
        <button
          onClick={prev}
          className="rounded-full bg-secondary p-2 transition-colors hover:bg-muted text-secondary-foreground"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="rounded-full bg-secondary p-2 transition-colors hover:bg-muted text-secondary-foreground"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  )
}
TestimonialsCard.displayName = "TestimonialsCard"
