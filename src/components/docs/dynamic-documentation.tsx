"use client"

import * as React from "react"
import type { ComponentMetadata } from "../../registry/types"
import { ComponentPlayground } from "./component-playground"
import type { ComponentDoc, ComponentStory, PropDefinition } from "./types"

export interface DynamicDocumentationProps {
  component: ComponentMetadata
}

export default function DynamicDocumentation({ component }: DynamicDocumentationProps) {
  // Memoize the ComponentDoc to prevent unnecessary re-renders
  const componentDoc = React.useMemo<ComponentDoc>(() => {
    // Dynamic import of the component
    // Note: React.lazy expects a default export or we need to handle named exports
    const Component = React.lazy(async () => {
      try {
        const module = await import(
          `../components/${component.filePath.split("src/components/")[1]}`
        )

        // Try to find the component by name, or fallback to default or first export
        if (component.exports?.includes(component.name)) {
          // @ts-ignore
          return { default: module[component.name] }
        }
        // @ts-ignore
        return { default: module.default || module[Object.keys(module)[0]] }
      } catch (error) {
        console.error(`Failed to load component ${component.name}:`, error)
        return {
          default: () => (
            <div className="p-4 border border-destructive/50 text-destructive rounded bg-destructive/10">
              Error loading component: {component.name}
            </div>
          ),
        }
      }
    })

    // Map props
    const props: PropDefinition[] = (component.props || []).map((p) => ({
      name: p.name,
      type: p.type,
      defaultValue: p.defaultValue,
      description: p.description,
      control: mapControl(p),
    }))

    // Map examples to stories if possible, or create a default story
    const stories: ComponentStory[] = component.usageExample
      ? [
          {
            name: "Default",
            args: {},
            description: "Default usage",
          },
        ]
      : []

    return {
      slug: component.name.toLowerCase(),
      title: component.name,
      category: component.category,
      description: component.description || "",
      component: Component,
      props,
      stories,
    }
  }, [component])

  if (!component) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Component Not Found</h1>
        <p className="text-muted-foreground">
          The requested component was not found in the registry.
        </p>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-8">
      {/* Passing key forces re-mount when component changes, ensuring clean state */}
      <ComponentPlayground key={component.name} doc={componentDoc} />
    </div>
  )
}

function mapControl(prop: any): PropDefinition["control"] {
  // Heuristic mapping
  if (prop.control && typeof prop.control === "object") {
    return prop.control as any
  }

  if (prop.control === "text") return { type: "text" }
  if (prop.control === "number") return { type: "number" }
  if (prop.control === "boolean") return { type: "boolean" }
  if (prop.control === "select") return { type: "select", options: prop.options || [] }
  if (prop.control === "color") return { type: "color" }

  // Fallback inference
  if (prop.type === "boolean") return { type: "boolean" }
  if (prop.type === "number") return { type: "number" }
  if (typeof prop.type === "string" && prop.type.includes("|")) {
    return {
      type: "select",
      options: prop.type
        .split("|")
        .map((s: string) => s.trim().replace(/"/g, "").replace(/'/g, "")),
    }
  }

  return { type: "text" }
}
