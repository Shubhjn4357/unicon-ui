import type { HTMLMotionProps } from "framer-motion"
import type { LucideIcon } from "lucide-react"
import type * as React from "react"
export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "featured"
}
/**
 * Native BentoGrid - Masonry-style grid layout
 * No dependencies on shadcn/Radix
 */
export declare const BentoGrid: React.ForwardRefExoticComponent<
  BentoGridProps & React.RefAttributes<HTMLDivElement>
>
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
export declare const BentoCard: React.ForwardRefExoticComponent<
  Omit<BentoCardProps, "ref"> & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=bento-grid.d.ts.map
