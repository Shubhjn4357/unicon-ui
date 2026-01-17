import type * as React from "react"
export interface CodeComparisonProps extends React.HTMLAttributes<HTMLDivElement> {
  beforeCode: string
  afterCode: string
  language?: string
}
/**
 * Native CodeComparison - Side-by-side code diff
 */
export declare const CodeComparison: React.ForwardRefExoticComponent<
  CodeComparisonProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=code-comparison.d.ts.map
