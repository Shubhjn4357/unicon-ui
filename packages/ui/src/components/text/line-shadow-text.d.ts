import type { HTMLMotionProps } from "framer-motion"
import type React from "react"
interface LineShadowTextProps extends HTMLMotionProps<"h1"> {
  shadowColor?: string
  children: React.ReactNode
}
export declare function LineShadowText({
  children,
  shadowColor,
  className,
  ...props
}: LineShadowTextProps): import("react/jsx-runtime").JSX.Element
//# sourceMappingURL=line-shadow-text.d.ts.map
