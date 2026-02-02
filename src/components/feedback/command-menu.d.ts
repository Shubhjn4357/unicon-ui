import type { ReactNode } from "react"
interface CommandItem {
  id: string
  label: string
  group?: string
  onSelect: () => void
  icon?: ReactNode
  shortcut?: string
}
interface CommandMenuProps {
  items: CommandItem[]
  placeholder?: string
  onClose?: () => void
  className?: string
}
/**
 * Command Menu (Cmd+K interface) using native Dialog
 * Features keyboard navigation, fuzzy search, and grouped commands
 */
export declare function CommandMenu({
  items,
  placeholder,
  onClose,
  className,
}: CommandMenuProps): import("react/jsx-runtime").JSX.Element
//# sourceMappingURL=command-menu.d.ts.map
