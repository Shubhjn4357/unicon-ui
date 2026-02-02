import type * as React from "react"
export interface SparklesTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
  colors?: {
    first: string
    second: string
  }
  sparklesCount?: number
}
/**
 * Native SparklesText - Animated sparkles around text
 */
export declare const SparklesText: React.ForwardRefExoticComponent<
  SparklesTextProps & React.RefAttributes<HTMLSpanElement>
>
//# sourceMappingURL=sparkles-text.d.ts.map
