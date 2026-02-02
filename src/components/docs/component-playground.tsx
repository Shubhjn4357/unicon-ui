"use client"

import React, { useState, useEffect } from "react"
import { ComponentDoc, ComponentStory } from "./types"
import { ControlPanel } from "./control-panel"
import { CodeViewer } from "./code-viewer"
import { PropsTable } from "./props-table"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../core/tabs" // Assuming core components exist
import { Card } from "../core/card"
import { Button } from "../core/button"
import { RefreshCw, Code, Eye, Monitor, Smartphone, Tablet } from "lucide-react"
import { cn } from "../../lib/utils"
import { motion, AnimatePresence } from "framer-motion"
import { useDesignStyle, DesignStyle } from "../../hooks/use-design-style"

interface ComponentPlaygroundProps {
    doc: ComponentDoc
}

export function ComponentPlayground({ doc }: ComponentPlaygroundProps) {
    // Initialize args with default values
    const defaultArgs = doc.props.reduce((acc, prop) => {
        if (prop.defaultValue !== undefined) {
            acc[prop.name] = prop.defaultValue
        }
        return acc
    }, {} as Record<string, any>)

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

    // Load a story
    const loadStory = (story: ComponentStory) => {
        setArgs({ ...defaultArgs, ...story.args })
        setKey((prev) => prev + 1)
    }

    const Component = doc.component

    return (
        <div className="space-y-8 w-full max-w-7xl mx-auto p-4">
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl font-bold tracking-tight">{doc.title}</h1>
                <p className="text-lg text-muted-foreground">{doc.description}</p>
            </div>

            <Tabs defaultValue="preview" className="w-full" onValueChange={setActiveTab}>
                <div className="flex items-center justify-between mb-4">
                    <TabsList>
                        <TabsTrigger value="preview" className="flex items-center gap-2">
                            <Eye className="w-4 h-4" /> Preview
                        </TabsTrigger>
                        <TabsTrigger value="code" className="flex items-center gap-2">
                            <Code className="w-4 h-4" /> Code
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
                            <div className={cn(
                                "w-full mx-auto transition-all duration-300 ease-in-out flex items-center justify-center min-h-[400px] p-10 bg-dot-pattern overflow-auto",
                                viewport === "mobile" ? "max-w-[375px] border-x" :
                                    viewport === "tablet" ? "max-w-[768px] border-x" : "max-w-full"
                            )}>
                                <div className={cn("w-full h-full flex items-center justify-center", designStyle !== 'none' && designStyle)}>
                                    <Component key={key} {...args} />
                                </div>
                            </div>
                        </Card>

                        {/* Controls */}
                        <div className="lg:col-span-1 space-y-4">
                            <Card className="p-4 h-full">
                                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Controls</h3>
                                <ControlPanel
                                    props={doc.props}
                                    values={args}
                                    onChange={handleArgChange}
                                />
                            </Card>

                            {doc.stories && doc.stories.length > 0 && (
                                <Card className="p-4">
                                    <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Variants</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {doc.stories.map(story => (
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
                    <CodeViewer componentName={doc.title} args={args} defaultArgs={defaultArgs} />
                </TabsContent>

                <TabsContent value="api">
                    <PropsTable props={doc.props} />
                </TabsContent>
            </Tabs>
        </div>
    )
}
