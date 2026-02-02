import type React from "react"
import type { ReactNode } from "react"
interface SmartInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  leading?: ReactNode
  trailing?: ReactNode
  isLoading?: boolean
  error?: string
}
/**
 * Smart Input with slots for icons, loading states, and actions
 * Perfect for AI interactions and agentic interfaces
 */
export declare const SmartInput: React.ForwardRefExoticComponent<
  SmartInputProps & React.RefAttributes<HTMLInputElement>
>
//# sourceMappingURL=smart-input.d.ts.map
