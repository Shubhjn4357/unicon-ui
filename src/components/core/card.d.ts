import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
export interface CardProps extends HTMLMotionProps<"div"> {
  hover?: boolean
  glass?: boolean
}
/**
 * Native Card Component
 */
export declare const Card: React.ForwardRefExoticComponent<
  Omit<CardProps, "ref"> & React.RefAttributes<HTMLDivElement>
>
export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}
export declare const CardHeader: React.ForwardRefExoticComponent<
  CardHeaderProps & React.RefAttributes<HTMLDivElement>
>
export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}
export declare const CardTitle: React.ForwardRefExoticComponent<
  CardTitleProps & React.RefAttributes<HTMLHeadingElement>
>
export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}
export declare const CardDescription: React.ForwardRefExoticComponent<
  CardDescriptionProps & React.RefAttributes<HTMLParagraphElement>
>
export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}
export declare const CardContent: React.ForwardRefExoticComponent<
  CardContentProps & React.RefAttributes<HTMLDivElement>
>
export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}
export declare const CardFooter: React.ForwardRefExoticComponent<
  CardFooterProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=card.d.ts.map
