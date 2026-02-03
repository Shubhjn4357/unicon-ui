import { Check, Eye, Lock, Palette } from "lucide-react"
import * as React from "react"
import { useTheme } from "../hooks/use-theme"

export interface ColorPalette {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    muted: string
    destructive: string
    background: string
    foreground: string
    card: string
    border: string
    input: string
    ring: string
    radius: string
    chart: string[]
  }
}

export interface ThemePreset {
  id: string
  name: string
  description: string
  preview: string
  palette: ColorPalette
}

const DEFAULT_PRESETS: ThemePreset[] = [
  {
    id: "default",
    name: "Default",
    description: "A balanced theme for general use",
    preview: "linear-gradient(135deg, hsl(var(--hue), 50%) 0%, hsl(var(--hue), 50%) 100%)",
    palette: {
      name: "Default",
      colors: {
        primary: "hsl(210 100% 50%)",
        secondary: "hsl(210 30% 96%)",
        accent: "hsl(210 100% 50%)",
        muted: "hsl(210 15% 96%)",
        destructive: "hsl(0 84% 97%)",
        background: "hsl(210 20% 98%)",
        foreground: "hsl(210 50% 10%)",
        card: "hsl(210 20% 95%)",
        border: "hsl(210 15% 96%)",
        input: "hsl(210 20% 94%)",
        ring: "hsl(210 100% 84%)",
        radius: "0.5rem",
        chart: ["#8884d8", "#dd6b20", "#eab308", "#22c55e", "#82ca9d"],
      },
    },
  },
  {
    id: "dark",
    name: "Dark",
    description: "A dark theme for low-light environments",
    preview: "linear-gradient(135deg, #0f172a 0%, #0f172a 100%)",
    palette: {
      name: "Dark",
      colors: {
        primary: "#3b82f6",
        secondary: "#1f2937",
        accent: "#8b5cf6",
        muted: "#374151",
        destructive: "#ef4444",
        background: "#111827",
        foreground: "#f3f4f6",
        card: "#1f2937",
        border: "#374151",
        input: "#1f2937",
        ring: "#8b5cf6",
        radius: "0.5rem",
        chart: ["#8b5cf6", "#3b82f6", "#ef4444", "#f3f4f6"],
      },
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "A calm blue theme inspired by ocean colors",
    preview: "linear-gradient(135deg, #0077b6 0%, #00524b 100%)",
    palette: {
      name: "Ocean",
      colors: {
        primary: "#0077b6",
        secondary: "#00524b",
        accent: "#40a9ff",
        muted: "#94a3b8",
        destructive: "#ef4444",
        background: "#f0f9ff",
        foreground: "#0c1221",
        card: "#00524b",
        border: "#94a3b8",
        input: "#0c1221",
        ring: "#40a9ff",
        radius: "0.5rem",
        chart: ["#0077b6", "#40a9ff", "#ef4444", "#f0f9ff"],
      },
    },
  },
  {
    id: "sunset",
    name: "Sunset",
    description: "A warm theme inspired by sunset colors",
    preview: "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
    palette: {
      name: "Sunset",
      colors: {
        primary: "#f59e0b",
        secondary: "#fbbf24",
        accent: "#fbbf24",
        muted: "#fef7cd",
        destructive: "#ef4444",
        background: "#fef3c7",
        foreground: "#1f2937",
        card: "#fffbeb",
        border: "#fbbf24",
        input: "#1f2937",
        ring: "#f59e0b",
        radius: "0.5rem",
        chart: ["#f59e0b", "#fbbf24", "#ef4444", "#1f2937"],
      },
    },
  },
]

export function useThemeGenerator() {
  const [isGenerating, setIsGenerating] = React.useState(false)
  const [activePreset, setActivePreset] = React.useState("default")
  const [customColors, setCustomColors] = React.useState<Partial<ColorPalette["colors"]>>({})
  const [isCustomTheme, setIsCustomTheme] = React.useState(false)

  const generateCSS = (palette: ColorPalette) => {
    return `
:root {
  --primary: ${palette.colors.primary};
  --primary-foreground: ${palette.colors.foreground};
  --secondary: ${palette.colors.secondary};
  --secondary-foreground: ${palette.colors.foreground};
  --accent: ${palette.colors.accent};
  --accent-foreground: ${palette.colors.foreground};
  --muted: ${palette.colors.muted};
  --muted-foreground: ${palette.colors.foreground};
  --destructive: ${palette.colors.destructive};
  --destructive-foreground: ${palette.colors.foreground};
  --background: ${palette.colors.background};
  --foreground: ${palette.colors.foreground};
  --card: ${palette.colors.card};
  --card-foreground: ${palette.colors.foreground};
  --border: ${palette.colors.border};
  --input: ${palette.colors.input};
  --ring: ${palette.colors.ring};
  --radius: ${palette.colors.radius};
  --chart-1: ${palette.colors.chart[0]};
  --chart-2: ${palette.colors.chart[1]};
  --chart-3: ${palette.colors.chart[2]};
  --chart-4: ${palette.colors.chart[3]};
  --chart-5: ${palette.colors.chart[4]};
}`
  }

  const applyTheme = (palette: ColorPalette) => {
    const css = generateCSS(palette)
    const styleId = "dynamic-theme-css"

    // Remove existing theme style
    const existingStyle = document.getElementById(styleId)
    if (existingStyle) {
      existingStyle.remove()
    }

    // Add new theme style
    const style = document.createElement("style")
    style.id = styleId
    style.textContent = css
    document.head.appendChild(style)

    setIsGenerating(false)
  }

  const downloadTheme = (palette: ColorPalette, name: string) => {
    const css = generateCSS(palette)
    const blob = new Blob([css], { type: "text/css" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${name}.css`
    a.click()
    URL.revokeObjectURL(url)
  }

  const resetToPreset = (presetId: string) => {
    const preset = DEFAULT_PRESETS.find((p) => p.id === presetId)
    if (preset) {
      setActivePreset(presetId)
      setIsCustomTheme(false)
      setCustomColors({})
      applyTheme(preset.palette)
    }
  }

  return {
    activePreset,
    customColors,
    isCustomTheme,
    isGenerating,
    DEFAULT_PRESETS,
    generateCSS,
    applyTheme,
    downloadTheme,
    resetToPreset,
    setCustomColors,
    setActivePreset,
    setIsCustomTheme,
    setIsGenerating,
  }
}
