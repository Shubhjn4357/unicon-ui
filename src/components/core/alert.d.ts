import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
export interface AlertProps extends HTMLMotionProps<"div"> {
  variant?: "default" | "destructive" | "success" | "warning"
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
  children?: React.ReactNode
}
export declare const Alert: React.ForwardRefExoticComponent<
  Omit<AlertProps, "ref"> & React.RefAttributes<HTMLDivElement>
>
export declare const AlertTitle: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLHeadingElement> & React.RefAttributes<HTMLHeadingElement>
>
export declare const AlertDescription: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLParagraphElement> & React.RefAttributes<HTMLParagraphElement>
>
//# sourceMappingURL=alert.d.ts.map
