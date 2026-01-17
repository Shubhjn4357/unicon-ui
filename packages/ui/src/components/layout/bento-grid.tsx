"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import { ArrowRight, type LucideIcon } from "lucide-react"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "featured"
}

/**
 * Native BentoGrid - Masonry-style grid layout
 * No dependencies on shadcn/Radix
 */
export const BentoGrid = React.forwardRef<HTMLDivElement, BentoGridProps>(
  ({ children, variant = "default", className, ...props }, ref) => {
    const variantClasses = {
      default: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
      featured: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
    }

    return (
      <div
        ref={ref}
        className={cn("grid w-full gap-4", variantClasses[variant], className)}
        {...props}
      >
        {children}
      </div>
    )
  }
)

BentoGrid.displayName = "BentoGrid"

export interface BentoCardProps extends HTMLMotionProps<"div"> {
  Icon?: LucideIcon | React.ElementType
  name?: string
  title?: string
  description?: string
  href?: string
  cta?: string
  background?: React.ReactNode
  featured?: boolean
  className?: string
  children?: React.ReactNode
}

export const BentoCard = React.forwardRef<HTMLDivElement, BentoCardProps>(
  (
    {
      Icon,
      name,
      title,
      description,
      href,
      cta,
      background,
      featured,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const content = (
      <motion.div
        ref={ref}
        className={cn(
          "group relative overflow-hidden rounded-(--radius) border border-border bg-surface p-6 transition-all hover:shadow-lg",
          featured && "md:col-span-2 md:row-span-2",
          className
        )}
        whileHover={{ y: -4, scale: 1.01 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {background && (
          <div className="absolute inset-0 opacity-20 transition-opacity group-hover:opacity-30">
            {background}
          </div>
        )}
        <div className="relative z-10">
          {Icon && <Icon className="mb-4 h-8 w-8 text-brand" />}
          {(name || title) && (
            <h3 className="mb-2 text-xl font-semibold text-foreground">{name || title}</h3>
          )}
          {description && <p className="mb-4 text-sm text-foreground-secondary">{description}</p>}
          {children}
          {cta && (
            <div className="mt-4 flex items-center gap-2 text-sm font-medium text-brand">
              {cta}
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    )

    if (href) {
      return (
        <a href={href} className="block">
          {content}
        </a>
      )
    }

    return content
  }
)

BentoCard.displayName = "BentoCard"
