// Enhanced Component Metadata Types
export interface ComponentMetadata {
  name: string
  category: string
  description?: string
  filePath: string
  exports: string[]

  // Enhanced metadata
  props?: ComponentProp[]
  usageExample?: string
  dependencies?: string[]
  tags?: string[]
  status?: "stable" | "beta" | "experimental"
  version?: string
  lastModified?: string
  documentation?: string

  // Performance metrics
  bundleSize?: number
  renderTime?: number
  dependenciesCount?: number

  // SEO and discoverability
  keywords?: string[]
  popularity?: number

  // Development info
  author?: string
  repository?: string
  changelog?: ChangelogEntry[]
}

export interface ComponentProp {
  name: string
  type: string
  description?: string
  required?: boolean
  defaultValue?: unknown
  control?: "text" | "number" | "boolean" | "select" | "color" | "range"
  options?: string[]
  validation?: PropValidation

  // Advanced prop info
  deprecated?: boolean
  deprecationMessage?: string
  since?: string

  // React specific
  isReactProp?: boolean
  acceptsChildren?: boolean
}

export interface PropValidation {
  min?: number
  max?: number
  pattern?: string
  custom?: string
}

export interface ChangelogEntry {
  version: string
  date: string
  changes: string[]
  type: "added" | "changed" | "deprecated" | "removed" | "fixed"
}

// Registry event types
export interface RegistryEvent {
  type: "component-added" | "component-updated" | "component-removed"
  componentName: string
  timestamp: Date
  metadata?: ComponentMetadata
}

// Search filters
export interface SearchFilters {
  category?: string
  status?: ComponentMetadata["status"]
  tags?: string[]
  hasDependencies?: boolean
  minBundleSize?: number
  maxBundleSize?: number
}

// Playground configuration
export interface PlaygroundConfig {
  theme?: "light" | "dark" | "auto"
  showProps?: boolean
  showCode?: boolean
  autoRefresh?: boolean
  layout?: "horizontal" | "vertical"
  viewport?: "mobile" | "tablet" | "desktop"
}
