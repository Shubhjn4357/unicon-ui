import type { ReactNode } from "react"
interface FadeInProps {
  children: ReactNode
  delay?: number
  duration?: number
  className?: string
}
/**
 * Declarative fade-in animation with blur effect
 * Automatically respects user's reduced motion preferences
 */
export declare function FadeIn({
  children,
  delay,
  duration,
  className,
}: FadeInProps): import("react/jsx-runtime").JSX.Element
//# sourceMappingURL=fade-in.d.ts.map
