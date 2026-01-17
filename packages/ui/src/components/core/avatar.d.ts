import type { HTMLMotionProps } from "framer-motion"
import type * as React from "react"
export interface AvatarProps extends Omit<HTMLMotionProps<"div">, "children"> {
  src?: string
  alt?: string
  fallback?: string
  size?: "sm" | "md" | "lg" | "xl"
  status?: "online" | "offline" | "away" | "busy"
}
export declare const Avatar: React.ForwardRefExoticComponent<
  Omit<AvatarProps, "ref"> & React.RefAttributes<HTMLDivElement>
>
export declare const AvatarImage: ({
  src,
  alt,
  ...props
}: React.ImgHTMLAttributes<HTMLImageElement>) => import("react/jsx-runtime").JSX.Element
export declare const AvatarFallback: ({
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => import("react/jsx-runtime").JSX.Element
//# sourceMappingURL=avatar.d.ts.map
