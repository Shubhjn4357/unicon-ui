"use client"

import { type VariantProps, cva } from "class-variance-authority"
import * as React from "react"
import { cn } from "../../lib/utils"

const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

/**
 * Native Label - Accessible label component
 * Falls back to native label if Radix is not installed, but here we assume no Radix dependency if strict "native" was improved.
 * However, commonly standard Label uses radix. I will use a pure native implementation to be safe on dependencies if not available,
 * OR simple native label given the "Unicorn UI" goal of "Native".
 */

export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  <label
    ref={ref}
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className
    )}
    {...props}
  />
))
Label.displayName = "Label"

export { Label }
