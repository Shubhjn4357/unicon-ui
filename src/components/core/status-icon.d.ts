import type * as React from "react"
export interface StatusIconProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children"> {
  status: "success" | "warning" | "error" | "info"
  icon?: React.ReactNode
  size?: "sm" | "md" | "lg"
}
export declare const StatusIcon: React.ForwardRefExoticComponent<
  StatusIconProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=status-icon.d.ts.map
