"use client"

import { AnimatePresence, motion } from "framer-motion"
import { Check, Copy, Download, Moon, Palette, Sun } from "lucide-react"
import * as React from "react"
import { type ThemePreset, useThemeGenerator } from "../../hooks/use-theme-generator"
import { Button } from "../core/button"
import { Label } from "../core/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../core/select"

export function ThemeCustomizer() {
  const {
    activePreset,
    customColors,
    isCustomTheme,
    isGenerating,
    isDarkMode,
    DEFAULT_PRESETS,
    DEFAULT_DESIGN_STYLES,
    designStyle,
    toggleDarkMode,
    setActivePreset,
    setCustomColors,
    downloadTheme,
    setDesignStyle,
    resetToPreset,
    applyTheme,
    DEFAULT_PRESETS: presets,
  } = useThemeGenerator()

  const [isOpen, setIsOpen] = React.useState(false)

  const handleColorChange = (key: string, value: string) => {
    const newColors = { ...customColors, [key]: value }
    setCustomColors(newColors)

    // Find base preset to merge with
    const basePreset = presets.find((p: ThemePreset) => p.id === activePreset) || presets[0]

    applyTheme({
      name: "Custom",
      colors: { ...basePreset.palette.colors, ...newColors } as any,
    })
  }

  const copyConfig = () => {
    // Implementation for copying config
    const config = {
      preset: activePreset,
      darkMode: isDarkMode,
      style: designStyle,
      customColors,
    }
    navigator.clipboard.writeText(JSON.stringify(config, null, 2))
    alert("Configuration copied to clipboard!") // Should use Toast in real app
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-2">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-80 rounded-xl border border-border bg-card p-4 shadow-xl backdrop-blur-md"
          >
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold">Theme Customizer</h3>
              {/* Dark mode toggle */}
              <Button variant="ghost" size="icon" onClick={() => toggleDarkMode(!isDarkMode)}>
                {isDarkMode ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
              </Button>
            </div>

            <div className="space-y-4">
              {/* Presets */}
              <div className="space-y-2">
                <Label>Preset</Label>
                <div className="flex flex-wrap gap-2">
                  {DEFAULT_PRESETS.map((preset: ThemePreset) => (
                    <button
                      key={preset.id}
                      onClick={() => resetToPreset(preset.id)}
                      className={`h-8 w-8 rounded-full border ring-offset-2 transition-all ${
                        activePreset === preset.id
                          ? "ring-2 ring-primary"
                          : "border-border hover:scale-110"
                      }`}
                      style={{ background: preset.preview }}
                      title={preset.name}
                    />
                  ))}
                </div>
              </div>

              {/* Design Style */}
              <div className="space-y-2">
                <Label>Design Style</Label>
                <Select
                  value={designStyle || "default"}
                  onValueChange={(v) => setDesignStyle(v === "default" ? null : v)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select style" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="default">Default</SelectItem>
                    {DEFAULT_DESIGN_STYLES.map((style: string) => (
                      <SelectItem key={style} value={style}>
                        {style.charAt(0).toUpperCase() + style.slice(1)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Color Customization (Simplified for demo) */}
              <div className="space-y-2">
                <Label>Accent Color</Label>
                <input
                  type="color"
                  className="h-10 w-full cursor-pointer rounded-md border border-input bg-background p-1"
                  onChange={(e) => handleColorChange("primary", e.target.value)}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-2 pt-2">
                <Button variant="outline" size="sm" className="flex-1" onClick={copyConfig}>
                  <Copy className="mr-2 h-4 w-4" /> Copy
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() =>
                    downloadTheme(
                      {
                        name: "custom-theme",
                        colors: customColors as any, // TODO: Fix proper type mapping partial to full
                      },
                      "theme"
                    )
                  }
                >
                  <Download className="mr-2 h-4 w-4" /> Export
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        variant="default"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Palette className="h-6 w-6" />
      </Button>
    </div>
  )
}
