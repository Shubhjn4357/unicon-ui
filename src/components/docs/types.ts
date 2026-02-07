export type ControlType =
  | "text"
  | "number"
  | "boolean"
  | "select"
  | "radio"
  | "color"
  | "object"
  | "json"
  | "icon"
  | "none"

export interface PropDefinition {
  name: string
  type: string
  defaultValue?: any
  description?: string
  required?: boolean
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
  category: string
  description: string
  component: React.ComponentType<any>
  props: PropDefinition[]
  stories?: ComponentStory[]
  examples?: {
    title: string
    description?: string
    code: string
  }[]
}

export interface HookDoc {
  slug: string
  title: string
  description: string
  data: {
    title: string
    description: string
    examples: {
      title: string
      preview?: React.ComponentType<any>
      code: string
    }[]
    props: {
      name: string
      type: string
      description: string
      default?: string
    }[]
  }
}

