import type * as React from "react"
export interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: number
  max?: number
  variant?: "default" | "success" | "warning" | "error"
  showLabel?: boolean
  animated?: boolean
}
export declare const Progress: React.ForwardRefExoticComponent<
  ProgressProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=progress.d.ts.map
