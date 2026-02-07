"use client"

import { Code, Eye, Monitor, RefreshCw, Smartphone, Tablet } from "lucide-react"
import React, { useState } from "react"
import { type DesignStyle, useDesignStyle } from "../../hooks/use-design-style"
import { cn } from "../../lib/utils"
import { Button } from "../core/button"
import { Card } from "../core/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../core/tabs" // Assuming core components exist
import { CodeViewer } from "./code-viewer"
import { ControlPanel } from "./control-panel"
import { PropsTable } from "./props-table"
import type { ComponentDoc, ComponentStory } from "./types"

interface ComponentPlaygroundProps {
  doc: ComponentDoc
}

export function ComponentPlayground({ doc }: ComponentPlaygroundProps) {
  // Initialize args with default values
  const defaultArgs = (doc?.props || []).reduce(
    (acc, prop) => {
      if (prop.defaultValue !== undefined) {
        acc[prop.name] = prop.defaultValue
      }
      return acc
    },
    {} as Record<string, any>
  )

  const [args, setArgs] = useState(defaultArgs)
  const [activeTab, setActiveTab] = useState("preview")
  const [key, setKey] = useState(0) // For forcing re-render
  const [viewport, setViewport] = useState<"desktop" | "tablet" | "mobile">("desktop")
  const { designStyle, setDesignStyle } = useDesignStyle()

  const handleArgChange = (name: string, value: any) => {
    setArgs((prev) => ({ ...prev, [name]: value }))
  }

  const handleReset = () => {
    setArgs(defaultArgs)
    setKey((prev) => prev + 1)
  }

  const handleReplay = () => {
    setKey((prev) => prev + 1)
  }

  // Load a story
  const loadStory = (story: ComponentStory) => {
    setArgs({ ...defaultArgs, ...story.args })
    setKey((prev) => prev + 1)
  }

  // Generic event handler proxy
  // We wrap specific event handlers to update the playground state (args) or log actions
  const interactiveArgs = { ...args }

  // Automatically hook into common event handlers if they exist in props
  if (doc?.props) {
    doc.props.forEach(prop => {
      if (prop.name.startsWith("on") && typeof args[prop.name] !== "function") {
        // If it's a state change handler (e.g. onCheckedChange, onValueChange), try to update local state
        if (prop.name === "onCheckedChange" || (prop.name === "onChange" && args.checked !== undefined)) {
          interactiveArgs[prop.name] = (val: any) => {
            // Handle checkbox standard event or direct boolean
            const newValue = (val && typeof val === 'object' && 'target' in val) ? val.target.checked : val;
            handleArgChange("checked", newValue)
          }
        } else if (prop.name === "onValueChange") {
          interactiveArgs[prop.name] = (val: any) => {
            // For Slider/Select
            handleArgChange("value", val)
                 // If it has defaultValue, update that too if value isn't controlled (heuristic)
                 if (doc.props.find(p => p.name === "defaultValue")) {
                   handleArgChange("defaultValue", val)
                   }
          }
        } else if (prop.name === "onChange" && args.value !== undefined) {
          interactiveArgs[prop.name] = (e: any) => {
            if (e?.target) {
              handleArgChange("value", e.target.value)
                 }
               }
        } else {
          // Generic logger for other actions
          interactiveArgs[prop.name] = (...funcArgs: any[]) => {
            console.log(`Action: ${prop.name}`, funcArgs)
          }
        }
      }
    })
  }

  const Component = doc?.component

  return (
    <div className="space-y-8 w-full max-w-7xl mx-auto p-4">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold tracking-tight">{doc?.title}</h1>
        <p className="text-lg text-muted-foreground">{doc?.description}</p>
      </div>

      <Tabs
        defaultValue="preview"
        value={activeTab}
        className="w-full"
        onValueChange={setActiveTab}
      >
        <div className="flex items-center justify-between mb-4">
          <TabsList>
            <TabsTrigger value="preview" className="flex items-center gap-2">
              <Eye className="w-4 h-4" /> Preview
            </TabsTrigger>
            <TabsTrigger value="code" className="flex items-center gap-2">
              <Code className="w-4 h-4" /> code
            </TabsTrigger>
            <TabsTrigger value="api" className="flex items-center gap-2">
              <Code className="w-4 h-4" /> API
            </TabsTrigger>
          </TabsList>

          <div className="flex items-center gap-2">
            <div className="flex items-center bg-muted/50 rounded-md p-1 border">
              <Button
                variant={viewport === "desktop" ? "default" : "ghost"}
                size="sm"
                className="p-2 h-8"
                onClick={() => setViewport("desktop")}
              >
                <Monitor className="w-4 h-4" />
              </Button>
              <Button
                variant={viewport === "tablet" ? "default" : "ghost"}
                size="sm"
                className="p-2 h-8"
                onClick={() => setViewport("tablet")}
              >
                <Tablet className="w-4 h-4" />
              </Button>
              <Button
                variant={viewport === "mobile" ? "default" : "ghost"}
                size="sm"
                className="p-2 h-8"
                onClick={() => setViewport("mobile")}
              >
                <Smartphone className="w-4 h-4" />
              </Button>
            </div>
            <div className="h-8 w-px bg-border mx-2" />
            <select
              value={designStyle}
              onChange={(e) => setDesignStyle(e.target.value as DesignStyle)}
              className="h-8 rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            >
              <option value="none">Default</option>
              <option value="glass">Glass</option>
              <option value="liquid-glass">Liquid Glass</option>
              <option value="clay">Clay</option>
              <option value="skeu">Skeuomorphic</option>
              <option value="minimal">Minimal</option>
            </select>
            <Button variant="outline" size="sm" onClick={handleReplay}>
              <RefreshCw className="w-4 h-4 mr-2" /> Replay
            </Button>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RefreshCw className="w-4 h-4 mr-2" /> Reset
            </Button>
          </div>
        </div>

        <TabsContent value="preview" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Canvas */}
            <Card className="lg:col-span-3 overflow-hidden border-border bg-background/50 backdrop-blur-sm relative">
              <div className="absolute inset-0 bg-grid-white/[0.02] mask-[linear-gradient(0deg,white,rgba(255,255,255,0.6))]" />
              <div
                className={cn(
                  "w-full mx-auto transition-all duration-300 ease-in-out flex items-center justify-center min-h-[400px] p-10 bg-dot-pattern overflow-auto",
                  viewport === "mobile"
                    ? "max-w-[375px] border-x"
                    : viewport === "tablet"
                      ? "max-w-[768px] border-x"
                      : "max-w-full"
                )}
              >
                <div
                  className={cn(
                    "w-full h-full flex items-center justify-center",
                    designStyle !== "none" && designStyle
                  )}
                >
                  <Component key={key} {...interactiveArgs} />
                </div>
              </div>
            </Card>

            {/* Controls */}
            <div className="lg:col-span-1 space-y-4">
              <Card className="p-4 h-full">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                  Controls
                </h3>
                <ControlPanel props={doc?.props || []} values={args} onChange={handleArgChange} />
              </Card>

              {doc?.stories && doc?.stories.length > 0 && (
                <Card className="p-4">
                  <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
                    Variants
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {doc?.stories.map((story) => (
                      <Button
                        key={story.name}
                        size="sm"
                        variant="outline"
                        onClick={() => loadStory(story)}
                      >
                        {story.name}
                      </Button>
                    ))}
                  </div>
                </Card>
              )}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="code">
          <CodeViewer componentName={doc?.title} args={args} defaultArgs={defaultArgs} />
        </TabsContent>

        <TabsContent value="api">
          <PropsTable props={doc?.props} />
        </TabsContent>
      </Tabs>
    </div>
  )
}
