"use client"

import { type HTMLMotionProps, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface CardProps extends HTMLMotionProps<"div"> {
  hover?: boolean
  glass?: boolean
}

/**
 * Native Card Component
 */
export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, hover = false, glass = false, className, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-(--radius) border border-border bg-card p-6 shadow-sm transition-all duration-200",
          hover && "hover:shadow-md hover:border-primary/20",
          className
        )}
        whileHover={hover ? { y: -2, scale: 1.01 } : undefined}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        {...props}
      >
        {children}
      </motion.div>
    )
  }
)

Card.displayName = "Card"

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardHeader = React.forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex flex-col space-y-1.5", className)} {...props}>
        {children}
      </div>
    )
  }
)

CardHeader.displayName = "CardHeader"

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> { }

export const CardTitle = React.forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <h3
        ref={ref}
        className={cn(
          "text-2xl font-semibold leading-none tracking-tight text-[hsl(var(--foreground))]",
          className
        )}
        {...props}
      >
        {children}
      </h3>
    )
  }
)

CardTitle.displayName = "CardTitle"

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> { }

export const CardDescription = React.forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <p
        ref={ref}
        className={cn("text-sm text-muted-foreground", className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

CardDescription.displayName = "CardDescription"

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardContent = React.forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("pt-0", className)} {...props}>
        {children}
      </div>
    )
  }
)

CardContent.displayName = "CardContent"

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> { }

export const CardFooter = React.forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("flex items-center pt-4", className)} {...props}>
        {children}
      </div>
    )
  }
)

CardFooter.displayName = "CardFooter"
