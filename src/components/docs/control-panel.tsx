"use client"

import React from "react"
// If your Select is complex, use a simple HTML select or custom generic one for now
import { cn } from "../../lib/utils"
import { Input } from "../core/input"
import { Label } from "../core/label" // Assuming
import { Select } from "../core/select" // You might need to check if this handles primitive values or adjust
import { Switch } from "../core/switch"
import type { PropDefinition } from "./types"

interface ControlPanelProps {
  props: PropDefinition[]
  values: Record<string, any>
  onChange: (name: string, value: any) => void
}

export function ControlPanel({ props, values, onChange }: ControlPanelProps) {
  return (
    <div className="space-y-6">
      {props
        .filter((p) => p.control)
        .map((prop) => (
          <div key={prop.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <Label
                htmlFor={`control-${prop.name}`}
                className="text-xs font-medium text-foreground/80"
              >
                {prop.name}
              </Label>
              <span className="text-[10px] text-muted-foreground font-mono">{prop.type}</span>
            </div>

            <ControlInput
              definition={prop}
              value={values[prop.name]}
              onChange={(val) => onChange(prop.name, val)}
            />
            {prop.description && (
              <p className="text-[10px] text-muted-foreground">{prop.description}</p>
            )}
          </div>
        ))}
    </div>
  )
}

function ControlInput<T = any>({
  definition,
  value,
  onChange,
}: {
  definition: PropDefinition
    value: T
    onChange: (val: T) => void
}) {
  const { control } = definition

  if (!control) return null

  switch (control.type) {
    case "text":
      return (
        <Input
          type="text"
          value={(value as string) || ""}
          onChange={(e) => onChange(e.target.value as T)}
          className="h-8 text-sm"
        />
      )
    case "number":
      return (
        <div className="flex gap-2 items-center">
          <Input
            type="number"
            value={(value as number) || 0}
            onChange={(e) => onChange(Number(e.target.value) as T)}
            min={control.min}
            max={control.max}
            step={control.step}
            className="h-8 text-sm w-20"
          />
          {(control.min !== undefined && control.max !== undefined) && (
            <Input
              type="range"
              min={control.min}
              max={control.max}
              step={control.step || 1}
              value={(value as number) || 0}
              onChange={(e) => onChange(Number(e.target.value) as T)}
              className="flex-1 h-8 cursor-pointer accent-primary"
            />
          )}
        </div>
      )
    case "boolean":
      return (
        <div className="flex items-center h-8">
          <Switch checked={!!value} onCheckedChange={(val) => onChange(val as T)} size="sm" />
        </div>
      )
    case "select":
      return (
        <select
          className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          value={value as string}
          onChange={(e) => onChange(e.target.value as T)}
        >
          {control.options?.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )
    case "radio":
      return (
        <div className="flex flex-wrap gap-2">
          {control.options?.map((opt) => (
            <div key={opt} className="flex items-center space-x-2">
              <input
                type="radio"
                id={`radio-${definition.name}-${opt}`}
                value={opt}
                checked={value === opt}
                onChange={(e) => onChange(e.target.value as T)}
                className="aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow focus:outline-none"
              />
              <label htmlFor={`radio-${definition.name}-${opt}`} className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                {opt}
              </label>
            </div>
          ))}
        </div>
      )
    case "color":
      return (
        <div className="flex gap-2 items-center">
          <div className="relative overflow-hidden rounded-md border shadow-sm w-10 h-8">
            <input
              type="color"
              value={(value as string) || "#000000"}
              onChange={(e) => onChange(e.target.value as T)}
              className="absolute -top-2 -left-2 w-16 h-16 p-0 border-0 cursor-pointer"
            />
          </div>
          <Input
            type="text"
            value={(value as string) || ""}
            onChange={(e) => onChange(e.target.value as T)}
            className="h-8 text-sm flex-1 font-mono"
            placeholder="#000000"
          />
        </div>
      )
    case "json":
    case "object":
      return (
        <textarea
          className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 font-mono"
          value={typeof value === 'object' ? JSON.stringify(value, null, 2) : (value as string)}
          onChange={(e) => {
            try {
              const parsed = JSON.parse(e.target.value)
              onChange(parsed as T)
            } catch {
              // console.error("Invalid JSON")
            }
          }}
        />
      )
    case "icon":
      return <IconPicker value={value as string} onChange={onChange as (val: string) => void} />
    default:
      return null
  }
}


import * as LucideIcons from "lucide-react"
import { ChevronsUpDown, Check } from "lucide-react"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../core/command"
import { Popover, PopoverContent, PopoverTrigger } from "../core/popover"

function IconPicker({ value, onChange }: { value: string; onChange: (icon: string) => void }) {
  const [open, setOpen] = React.useState(false)
  const iconNames = React.useMemo(() => Object.keys(LucideIcons).filter(key => key !== "icons" && key !== "createLucideIcon") as string[], [])

  const SelectedIcon = (LucideIcons as any)[value] || LucideIcons.HelpCircle

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="flex items-center gap-2 cursor-pointer border rounded-md p-1.5 w-full hover:bg-accent/50 transition-colors">
        <div className="p-1 bg-muted rounded-full">
          <SelectedIcon className="w-4 h-4" />
        </div>
        <span className="text-sm text-foreground flex-1 truncate">{value || "Select Icon"}</span>
        <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
      </PopoverTrigger>
      <PopoverContent className="p-0 w-50" align="start">
        <Command>
          <CommandInput placeholder="Search icon..." />
          <CommandList>
            <CommandEmpty>No icon found.</CommandEmpty>
            <CommandGroup className="max-h-50 overflow-y-auto">
              {iconNames.slice(0, 100).map((iconName) => {
                const Icon = (LucideIcons as any)[iconName]
                return (
                  <CommandItem
                    key={iconName}
                    value={iconName}
                    onSelect={(currentValue: string) => {
                      onChange(currentValue === value ? "" : currentValue)
                      setOpen(false)
                    }}
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4 mr-1" />
                    <span>{iconName}</span>
                    {value === iconName && <Check className="ml-auto h-4 w-4" />}
                  </CommandItem>
                )
              })}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
