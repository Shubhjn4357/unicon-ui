import type * as React from "react"
export interface ModalProps {
  open: boolean
  onOpenChange?: (open: boolean) => void
  children: React.ReactNode
  title?: string
  description?: string
  showClose?: boolean
}
export declare const Modal: React.FC<ModalProps>
//# sourceMappingURL=modal.d.ts.map
