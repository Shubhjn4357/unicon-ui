"use client"

import * as React from "react"
import { Check, Download, RotateCcw, Save } from "lucide-react"
import { useThemeGenerator, ThemePreset } from "../../hooks/use-theme-generator"
import { Button } from "../core/button"
import { Card } from "../core/card"
import { Label } from "../core/label"

export function ThemeEditor() {
    const {
        activePreset,
        customColors,
        isCustomTheme,
        DEFAULT_PRESETS,
        applyTheme,
        downloadTheme,
        resetToPreset,
        setCustomColors,
        setIsCustomTheme
    } = useThemeGenerator()

    const [activePalette, setActivePalette] = React.useState<ThemePreset["palette"] | null>(null)

    React.useEffect(() => {
        const preset = DEFAULT_PRESETS.find(p => p.id === activePreset)
        if (preset) {
            setActivePalette({
                ...preset.palette,
                colors: { ...preset.palette.colors, ...customColors }
            })
        }
    }, [activePreset, customColors, DEFAULT_PRESETS])

    const handleColorChange = (key: string, value: string) => {
        setIsCustomTheme(true)
        setCustomColors(prev => ({ ...prev, [key]: value }))

        // Live update
        if (activePalette) {
            const newPalette = {
                ...activePalette,
                colors: { ...activePalette.colors, [key]: value }
            }
            applyTheme(newPalette)
        }
    }

    const handlePresetSelect = (presetId: string) => {
        resetToPreset(presetId)
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Controls */}
            <Card className="lg:col-span-1 p-4 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
                <div>
                    <h3 className="font-semibold mb-4">Presets</h3>
                    <div className="grid grid-cols-2 gap-2">
                        {DEFAULT_PRESETS.map(preset => (
                            <button
                                key={preset.id}
                                onClick={() => handlePresetSelect(preset.id)}
                                className={`p-2 rounded border text-sm text-left transition-all ${activePreset === preset.id && !isCustomTheme
                                        ? "ring-2 ring-primary border-primary bg-primary/5"
                                        : "hover:bg-muted"
                                    }`}
                            >
                                <div className="w-full h-8 rounded mb-2" style={{ background: preset.preview }} />
                                <span className="font-medium">{preset.name}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div>
                    <div className="flex items-center justify-between mb-4">
                        <h3 className="font-semibold">Colors</h3>
                        {isCustomTheme && (
                            <Button variant="ghost" size="sm" onClick={() => resetToPreset(activePreset)}>
                                <RotateCcw className="w-3 h-3 mr-1" /> Reset
                            </Button>
                        )}
                    </div>

                    <div className="space-y-3">
                        {activePalette && Object.entries(activePalette.colors).map(([key, value]) => {
                            if (key === 'chart' || key === 'radius') return null
                            return (
                                <div key={key} className="space-y-1">
                                    <label className="text-xs uppercase text-muted-foreground font-semibold">{key}</label>
                                    <div className="flex gap-2">
                                        <input
                                            type="color"
                                            value={value as string}
                                            onChange={(e) => handleColorChange(key, e.target.value)}
                                            className="h-9 w-9 p-0.5 rounded border cursor-pointer"
                                        />
                                        <input
                                            type="text"
                                            value={value as string}
                                            onChange={(e) => handleColorChange(key, e.target.value)}
                                            className="flex-1 h-9 px-2 rounded border bg-background text-sm font-mono"
                                        />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>

                <div className="pt-4 border-t sticky bottom-0 bg-card">
                    <Button
                        className="w-full"
                        onClick={() => activePalette && downloadTheme(activePalette, `custom-theme-${Date.now()}`)}
                    >
                        <Download className="w-4 h-4 mr-2" /> Download Theme
                    </Button>
                </div>
            </Card>

            {/* Preview Area */}
            <div className="lg:col-span-3 space-y-8">
                <div className="bg-background rounded-lg border p-8 space-y-8 transition-colors duration-500">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold">Theme Preview</h2>
                        <p className="text-muted-foreground">See your changes in real-time across various components.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Card className="p-6 space-y-4">
                            <h3 className="font-semibold">Typography & Actions</h3>
                            <div className="space-x-2">
                                <Button>Primary Button</Button>
                                <Button variant="secondary">Secondary</Button>
                                <Button variant="outline">Outline</Button>
                                <Button variant="destructive">Destructive</Button>
                            </div>
                        </Card>

                        <Card className="p-6 space-y-4 bg-muted/50">
                            <h3 className="font-semibold">Inputs & Forms</h3>
                            <div className="space-y-2">
                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Default Input" />
                                <input className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" disabled placeholder="Disabled Input" />
                            </div>
                        </Card>

                        <Card className="p-6 md:col-span-2">
                            <h3 className="font-semibold mb-4">Color Palette</h3>
                            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                                {['primary', 'secondary', 'accent', 'muted', 'destructive'].map(color => (
                                    <div key={color} className="space-y-1.5">
                                        <div className="h-12 w-full rounded-md border shadow-sm" style={{ background: `hsl(var(--${color}))` }} />
                                        <p className="text-xs font-medium text-center capitalize">{color}</p>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
