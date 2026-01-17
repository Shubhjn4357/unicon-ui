import type * as React from "react"
export interface SliderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  value?: number[]
  onValueChange?: (value: number[]) => void
  defaultValue?: number[]
  min?: number
  max?: number
  step?: number
  disabled?: boolean
  showValue?: boolean
}
export declare const Slider: React.ForwardRefExoticComponent<
  SliderProps & React.RefAttributes<HTMLDivElement>
>
//# sourceMappingURL=slider.d.ts.map
