import type * as React from "react"
export interface RadioGroupProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: string
  onValueChange?: (value: string) => void
  defaultValue?: string
  name?: string
}
export declare const RadioGroup: React.ForwardRefExoticComponent<
  RadioGroupProps & React.RefAttributes<HTMLDivElement>
>
export interface RadioGroupItemProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  value: string
  label?: string
}
export declare const RadioGroupItem: React.ForwardRefExoticComponent<
  RadioGroupItemProps & React.RefAttributes<HTMLInputElement>
>
//# sourceMappingURL=radio-group.d.ts.map
