export type ControlType = "text" | "number" | "boolean" | "select" | "color" | "object" | "json"

export interface PropDefinition {
  name: string
  type: string
  defaultValue?: any
  description?: string
  control?: {
    type: ControlType
    options?: string[]
    min?: number
    max?: number
    step?: number
  }
}

export interface ComponentStory {
  name: string
  args: Record<string, any>
  description?: string
}

export interface ComponentDoc {
  slug: string
  title: string
  description: string
  component: React.ComponentType<any>
  props: PropDefinition[]
  stories?: ComponentStory[]
}
