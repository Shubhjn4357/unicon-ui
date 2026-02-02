"use client"

import React from "react"
import { PropDefinition } from "./types"
import { Label } from "../core/label" // Assuming
import { Input } from "../core/input"
import { Switch } from "../core/switch"
import { Select } from "../core/select" // You might need to check if this handles primitive values or adjust
// If your Select is complex, use a simple HTML select or custom generic one for now
import { cn } from "../../lib/utils"

interface ControlPanelProps {
  props: PropDefinition[]
  values: Record<string, any>
  onChange: (name: string, value: any) => void
}

export function ControlPanel({ props, values, onChange }: ControlPanelProps) {
  return (
    <div className="space-y-6">
      {props.filter(p => p.control).map((prop) => (
        <div key={prop.name} className="space-y-2">
          <div className="flex items-center justify-between">
              <Label htmlFor={`control-${prop.name}`} className="text-xs font-medium text-foreground/80">
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

function ControlInput({ definition, value, onChange }: { 
    definition: PropDefinition, 
    value: any, 
    onChange: (val: any) => void 
}) {
    const { control } = definition

    if (!control) return null

    switch (control.type) {
        case "text":
            return (
                <Input 
                    type="text" 
                    value={value || ""} 
                    onChange={(e) => onChange(e.target.value)}
                    className="h-8 text-sm"
                />
            )
        case "number":
            return (
                <Input 
                    type="number" 
                    value={value || 0} 
                    onChange={(e) => onChange(Number(e.target.value))}
                    min={control.min}
                    max={control.max}
                    step={control.step}
                    className="h-8 text-sm"
                />
            )
        case "boolean":
            return (
                <div className="flex items-center h-8">
                    <Switch 
                        checked={!!value} 
                        onCheckedChange={onChange}
                        size="sm"
                    />
                </div>
            )
        case "select":
            return (
                 <select
                    className="flex h-8 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                  >
                     {control.options?.map(opt => (
                         <option key={opt} value={opt}>{opt}</option>
                     ))}
                  </select>
            )
        case "color":
             return (
                 <div className="flex gap-2">
                     <Input 
                         type="color" 
                         value={value || "#000000"} 
                         onChange={(e) => onChange(e.target.value)}
                         className="h-8 w-8 p-1 cursor-pointer rounded-md"
                     />
                     <Input 
                         type="text" 
                         value={value || ""} 
                         onChange={(e) => onChange(e.target.value)}
                         className="h-8 text-sm flex-1"
                     />
                 </div>
             )
        default:
            return null
    }
}
