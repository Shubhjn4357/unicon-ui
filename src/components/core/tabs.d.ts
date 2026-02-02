import type * as React from "react"
export interface TabsProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string
  defaultValue?: string
  onValueChange?: (value: string) => void
}
export declare const Tabs: React.ForwardRefExoticComponent<
  TabsProps & React.RefAttributes<HTMLDivElement>
>
export declare const TabsList: React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
>
export interface TabsTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string
}
export declare const TabsTrigger: React.ForwardRefExoticComponent<
  TabsTriggerProps & React.RefAttributes<HTMLButtonElement>
>
import type { HTMLMotionProps } from "framer-motion"
export interface TabsContentProps extends HTMLMotionProps<"div"> {
  value: string
}
export declare const TabsContent: React.ForwardRefExoticComponent<
  Omit<TabsContentProps, "ref"> & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=tabs.d.ts.map
