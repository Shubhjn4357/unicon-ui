export type Registry = Record<string, RegistryEntry>

export interface RegistryEntry {
  name: string
  type: "components:ui" | "components:hook" | "components:lib"
  files: string[]
  dependencies?: string[]
  devDependencies?: string[]
}
