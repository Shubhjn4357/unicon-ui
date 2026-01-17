import type * as React from "react"
export interface AccordionItem {
  id: string
  title: string
  content: React.ReactNode
}
export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
  items: AccordionItem[]
  type?: "single" | "multiple"
  defaultValue?: string | string[]
  collapsible?: boolean
}
export declare const Accordion: React.ForwardRefExoticComponent<
  AccordionProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=accordion.d.ts.map
