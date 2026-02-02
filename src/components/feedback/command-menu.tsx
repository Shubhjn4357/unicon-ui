"use client"

import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { cn } from "../../lib/utils"

export interface CommandMenuProps {
  open?: boolean
  onOpenChange?: (open: boolean) => void
  placeholder?: string
  commands?: Array<{
    id: string
    label: string
    icon?: React.ReactNode
    shortcut?: string[]
    onSelect: () => void
    group?: string
  }>
}

/**
 * Command Menu - Cmd+K style command palette
 */
export const CommandMenu = React.forwardRef<HTMLDivElement, CommandMenuProps>(
  (
    { open: controlledOpen, onOpenChange, placeholder = "Type a command...", commands = [] },
    ref
  ) => {
    const [isOpen, setIsOpen] = React.useState<boolean>(false)
    const [search, setSearch] = React.useState("")
    const [selectedIndex, setSelectedIndex] = React.useState(0)

    const open = controlledOpen ?? isOpen
    const setOpen = (value: boolean) => {
      setIsOpen(value)
      onOpenChange?.(value)
    }

    // Group commands
    const groupedCommands = React.useMemo(() => {
      const filtered = commands.filter((cmd) =>
        cmd.label.toLowerCase().includes(search.toLowerCase())
      )

      const groups: Record<string, typeof commands> = {}
      filtered.forEach((cmd) => {
        const group = cmd.group || "Commands"
        if (!groups[group]) groups[group] = []
        groups[group].push(cmd)
      })

      return groups
    }, [commands, search])

    const flatCommands = React.useMemo(() => {
      return Object.values(groupedCommands).flat()
    }, [groupedCommands])

    // Keyboard shortcuts
    React.useEffect(() => {
      const down = (e: KeyboardEvent) => {
        if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
          e.preventDefault()
          setOpen(!open)
        }

        if (!open) return

        if (e.key === "Escape") {
          setOpen(false)
        } else if (e.key === "ArrowDown") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev + 1) % flatCommands.length)
        } else if (e.key === "ArrowUp") {
          e.preventDefault()
          setSelectedIndex((prev) => (prev - 1 + flatCommands.length) % flatCommands.length)
        } else if (e.key === "Enter" && flatCommands[selectedIndex]) {
          e.preventDefault()
          flatCommands[selectedIndex].onSelect()
          setOpen(false)
          setSearch("")
        }
      }

      document.addEventListener("keydown", down)
      return () => document.removeEventListener("keydown", down)
    }, [open, setOpen, selectedIndex, flatCommands])

    // Reset selection when search changes
    React.useEffect(() => {
      setSelectedIndex(0)
    }, [search])

    return (
      <AnimatePresence>
        {open && (
          <div
            ref={ref}
            className="fixed inset-0 z-50 flex items-start justify-center pt-[20vh]"
            onClick={() => setOpen(false)}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Command palette */}
            <motion.div
              className="relative w-full max-w-2xl rounded-lg border border-border bg-card shadow-2xl"
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Search input */}
              <div className="border-b border-border p-4">
                <input
                  type="text"
                  placeholder={placeholder}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full bg-transparent text-lg outline-none placeholder:text-muted-foreground"
                />
              </div>

              {/* Results */}
              <div className="max-h-96 overflow-y-auto p-2">
                {Object.keys(groupedCommands).length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    No results found
                  </div>
                ) : (
                  Object.entries(groupedCommands).map(([group, cmds]) => (
                    <div key={group} className="mb-4">
                      <div className="mb-2 px-2 text-xs font-medium text-muted-foreground">
                        {group}
                      </div>
                      {cmds.map((cmd) => {
                        const globalIdx = flatCommands.findIndex((c) => c.id === cmd.id)
                        return (
                          <motion.button
                            key={cmd.id}
                            className={cn(
                              "flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm transition-colors cursor-pointer",
                              globalIdx === selectedIndex
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-accent"
                            )}
                            onClick={() => {
                              cmd.onSelect()
                              setOpen(false)
                              setSearch("")
                            }}
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                          >
                            {cmd.icon && <span className="shrink-0">{cmd.icon}</span>}
                            <span className="flex-1">{cmd.label}</span>
                            {cmd.shortcut && (
                              <span className="flex gap-1">
                                {cmd.shortcut.map((key) => (
                                  <kbd
                                    key={key}
                                    className="rounded bg-muted px-1.5 py-0.5 text-xs font-mono"
                                  >
                                    {key}
                                  </kbd>
                                ))}
                              </span>
                            )}
                          </motion.button>
                        )
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer hint */}
              <div className="border-t border-border px-4 py-2 text-xs text-muted-foreground">
                Navigate with ↑↓, select with Enter, close with Esc
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    )
  }
)

CommandMenu.displayName = "CommandMenu"
