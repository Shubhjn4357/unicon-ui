import * as React from "react"

export interface ThemeMode {
  light: {
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
  }
  dark: {
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
  }
}

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
    preview: "linear-gradient(135deg, hsl(210 100% 50%) 0%, hsl(210 100% 50%) 100%)",
    palette: {
      name: "Default",
      colors: {
        primary: "hsl(210 100% 50%)",
        secondary: "hsl(210 30% 96%)",
        accent: "hsl(210 100% 50%)",
        muted: "hsl(210 15% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(210 20% 98%)",
        foreground: "hsl(210 50% 10%)",
        card: "hsl(210 20% 100%)",
        border: "hsl(210 15% 90%)",
        input: "hsl(210 20% 94%)",
        ring: "hsl(210 100% 50%)",
        radius: "0.5rem",
        chart: ["#3b82f6", "#f59e0b", "#eab308", "#22c55e", "#10b981"],
      },
    },
  },
  {
    id: "ocean",
    name: "Ocean",
    description: "A calm blue theme inspired by ocean colors",
    preview: "linear-gradient(135deg, #0077b6 0%, #00d9ff 100%)",
    palette: {
      name: "Ocean",
      colors: {
        primary: "hsl(201 100% 36%)",
        secondary: "hsl(196 100% 50%)",
        accent: "hsl(186 100% 50%)",
        muted: "hsl(210 15% 96%)",
        destructive: "hsl(0 84% 60%)",
        background: "hsl(210 20% 98%)",
        foreground: "hsl(210 50% 10%)",
        card: "hsl(210 20% 100%)",
        border: "hsl(210 15% 90%)",
        input: "hsl(210 20% 94%)",
        ring: "hsl(201 100% 36%)",
        radius: "0.5rem",
        chart: ["#0077b6", "#00d9ff", "#10b981", "#f59e0b", "#ef4444"],
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
  const [designStyle, setDesignStyle] = React.useState<string | null>(null)
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const DEFAULT_DESIGN_STYLES = ["clay", "glass", "skeu", "minimal", "liquid-glass"]

  // Normalize color input and compute an RGB triple "r, g, b"
  const toRgbTriple = (color: string): { rgb: string; hslTriplet?: string } => {
    // If already HSL, extract inner contents
    const hslMatch = color.match(/hsl\(([^)]*)\)/i)
    if (hslMatch) {
      const triplet = hslMatch[1].trim()
      // compute rgb from hsl
      const parts = triplet.replace(/,+/g, " ").split(/\s+/).filter(Boolean)
      const h = parseFloat(parts[0])
      const s = parseFloat(parts[1].replace("%", "")) / 100
      const l = parseFloat(parts[2].replace("%", "")) / 100
      const rgb = hslToRgb(h, s, l)
      return { hslTriplet: triplet, rgb: `${rgb.r}, ${rgb.g}, ${rgb.b}` }
    }

    // If hex, convert
    if (color.startsWith("#")) {
      const hex = color.replace("#", "")
      const r = parseInt(hex.substring(0, 2), 16)
      const g = parseInt(hex.substring(2, 4), 16)
      const b = parseInt(hex.substring(4, 6), 16)
      const { h, s, l } = rgbToHsl(r, g, b)
      const triplet = `${Math.round(h)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
      return { hslTriplet: triplet, rgb: `${r}, ${g}, ${b}` }
    }

    // Fallback: try to parse space-separated triplet
    const parts = color.replace(/,+/g, " ").split(/\s+/).filter(Boolean)
    if (parts.length >= 3) {
      const triplet = `${parts[0]} ${parts[1]} ${parts[2]}`
      return { hslTriplet: triplet, rgb: "0, 0, 0" }
    }

    return { hslTriplet: "210 50% 50%", rgb: "0, 0, 0" }
  }

  function hslToRgb(h: number, s: number, l: number) {
    const c = (1 - Math.abs(2 * l - 1)) * s
    const hh = (h / 60) % 6
    const x = c * (1 - Math.abs((hh % 2) - 1))
    let r = 0
    let g = 0
    let b = 0
    if (0 <= hh && hh < 1) {
      r = c
      g = x
      b = 0
    } else if (1 <= hh && hh < 2) {
      r = x
      g = c
      b = 0
    } else if (2 <= hh && hh < 3) {
      r = 0
      g = c
      b = x
    } else if (3 <= hh && hh < 4) {
      r = 0
      g = x
      b = c
    } else if (4 <= hh && hh < 5) {
      r = x
      g = 0
      b = c
    } else if (5 <= hh && hh < 6) {
      r = c
      g = 0
      b = x
    }
    const m = l - c / 2
    return {
      r: Math.round((r + m) * 255),
      g: Math.round((g + m) * 255),
      b: Math.round((b + m) * 255),
    }
  }

  function rgbToHsl(r: number, g: number, b: number) {
    r /= 255
    g /= 255
    b /= 255
    const max = Math.max(r, g, b)
    const min = Math.min(r, g, b)
    let h = 0
    let s = 0
    const l = (max + min) / 2
    if (max !== min) {
      const d = max - min
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min)
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0)
          break
        case g:
          h = (b - r) / d + 2
          break
        case b:
          h = (r - g) / d + 4
          break
      }
      h = h * 60
    }
    return { h, s, l }
  }

  // Helper to build variables for a token name. Emits
  // --<name>: h s% l% (HSL channel format to match design-system.css)
  const buildToken = (name: string, value: string) => {
    const { hslTriplet, rgb } = toRgbTriple(value)
    return {
      rgb,
      css: `  --${name}: ${hslTriplet || "0 0% 0%"};\n`,
      hslTriplet,
    }
  }

  // For dark mode we can use gentle overrides; for now reuse the palette but mark as dark by using predefined mappings
  const generateCSS = (palette: ColorPalette, dark = false) => {
    const names = [
      "primary",
      "secondary",
      "accent",
      "muted",
      "destructive",
      "background",
      "foreground",
      "card",
      "border",
      "input",
      "ring",
    ] as const

    const tokens = names.map((n) => buildToken(n, (palette.colors as any)[n]))

    const start = dark ? ".dark {\n" : ":root {\n"
    const end = "}\n"

    let css = start
    for (const t of tokens) css += t.css

    css += end
    return css
  }

  const applyTheme = (palette: ColorPalette) => {
    const styleId = "dynamic-theme-css"

    // Remove existing theme style
    const existingStyle = document.getElementById(styleId)
    if (existingStyle) {
      existingStyle.remove()
    }

    // Add new theme style with both light and dark modes
    const style = document.createElement("style")
    style.id = styleId
    const lightCSS = generateCSS(palette, false)
    const darkCSS = generateCSS(palette, true)
    style.textContent = `${lightCSS}\n\n${darkCSS}`
    document.head.appendChild(style)

    // Apply dark class based on isDarkMode or user preference
    const isDark = isDarkMode || (typeof window !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches)
    if (typeof document !== "undefined") {
      if (isDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }

    // Apply design style if set
    if (designStyle) {
      try {
        document.body.setAttribute("data-design-style", designStyle)
      } catch (e) {
        // ignore in non-browser environments
      }
    }

    setIsGenerating(false)
  }

  const toggleDarkMode = (dark: boolean) => {
    setIsDarkMode(dark)
    if (typeof document !== "undefined") {
      if (dark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
    }
  }

  const setDesignStyleAttr = (style: string | null) => {
    setDesignStyle(style)
    if (typeof document !== "undefined") {
      if (style) document.body.setAttribute("data-design-style", style)
      else document.body.removeAttribute("data-design-style")
    }
  }

  const downloadTheme = (palette: ColorPalette, name: string) => {
    const lightCSS = generateCSS(palette, false)
    const darkCSS = generateCSS(palette, true)
    const css = `${lightCSS}\n\n${darkCSS}`
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

  // Apply theme on mount
  React.useEffect(() => {
    const preset = DEFAULT_PRESETS.find((p) => p.id === activePreset)
    if (preset) {
      applyTheme(preset.palette)
    }
  }, [])

  return {
    activePreset,
    customColors,
    isCustomTheme,
    isGenerating,
    isDarkMode,
    DEFAULT_PRESETS,
    DEFAULT_DESIGN_STYLES,
    generateCSS,
    applyTheme,
    downloadTheme,
    resetToPreset,
    toggleDarkMode,
    setCustomColors,
    setActivePreset,
    setIsCustomTheme,
    setIsGenerating,
    designStyle,
    setDesignStyle: setDesignStyleAttr,
  }
}
