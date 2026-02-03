"use client"

import * as React from "react"
import { ComponentMetadata } from "../../registry/component-registry"
import { ComponentPlayground } from "./component-playground"

export interface DynamicDocumentationProps {
  component: ComponentMetadata
}

export default function DynamicDocumentation({ component }: DynamicDocumentationProps) {
  // Move hook call before conditional return to avoid "Rendered fewer hooks than expected"
  const [componentProps, setComponentProps] = React.useState<Record<string, any>>({})

  React.useEffect(() => {
    if (component?.props) {
      const defaults: Record<string, any> = {}
      component?.props.forEach(p => {
        if (p.defaultValue !== undefined) defaults[p.name] = p.defaultValue
      })
      setComponentProps(defaults)
    }
  }, [component])

  if (!component) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Component Not Found</h1>
        <p className="text-muted-foreground">The requested component was not found.</p>
      </div>
    )

    const renderControls = (props: any, onChange: (newProps: any) => void) => {
      if (!component?.props || component?.props.length === 0) return null

      return (
        <div className="space-y-4 p-4 border rounded-lg bg-card">
          <h3 className="text-lg font-semibold mb-4">Component Controls</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {component?.props.map((prop) => (
              <div key={prop.name} className="space-y-2">
                <label className="block text-sm font-medium mb-1">
                  {prop.name}
                  {prop.required && <span className="text-destructive">*</span>}
                </label>

                {prop?.control?.type === "text" && (
                  <input
                    type="text"
                    value={props[prop.name] || ""}
                    onChange={(e) => onChange({ ...props, [prop.name]: e.target.value })}
                    className="w-full px-3 py-2 border rounded bg-background"
                    placeholder={prop.defaultValue}
                  />
                )}

                {prop?.control?.type === "number" && (
                  <input
                    type="number"
                    value={props[prop.name] || prop.defaultValue}
                    onChange={(e) => onChange({ ...props, [prop.name]: Number(e.target.value) })}
                    className="w-full px-3 py-2 border rounded bg-background"
                    min={prop.control?.min}
                    max={prop.control?.max}
                    step={prop.control?.step}
                  />
                )}

                {prop?.control?.type === "boolean" && (
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={props[prop.name] || false}
                      onChange={(e) => onChange({ ...props, [prop.name]: e.target.checked })}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{prop.name}</span>
                  </label>
                )}

                {prop?.control?.type === "select" && (
                  <select
                    value={props[prop.name] || prop.defaultValue}
                    onChange={(e) => onChange({ ...props, [prop.name]: e.target.value })}
                    className="w-full px-3 py-2 border rounded bg-background"
                  >
                    {prop.control?.options?.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}

                {prop?.control?.type === "color" && (
                  <input
                    type="color"
                    value={props[prop.name] || prop.defaultValue}
                    onChange={(e) => onChange({ ...props, [prop.name]: e.target.value })}
                    className="w-full h-10 border rounded"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      )
    }

    const renderCodeExample = () => {
      if (!component?.examples || component?.examples.length === 0) return null

      const example = component?.examples[0]
      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Code Example</h3>
          <div className="relative">
            <pre className="bg-muted p-4 rounded-lg overflow-x-auto text-sm">
              <code>{example.code}</code>
            </pre>
          </div>
        </div>
      )
    }

    const renderPropsTable = () => {
      if (!component?.props || component?.props.length === 0) return null

      return (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold mb-4">Props</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border rounded-lg">
              <thead>
                <tr className="bg-muted">
                  <th className="border border-r px-4 py-2 text-left font-medium">Prop</th>
                  <th className="border border-r px-4 py-2 text-left">Type</th>
                  <th className="border border-r px-4 py-2 text-left">Default</th>
                  <th className="border border-r px-4 py-2 text-left">Required</th>
                  <th className="border border-r px-4 py-2 text-left">Description</th>
                </tr>
              </thead>
              <tbody>
                {component?.props.map((prop) => (
                  <tr key={prop.name} className="border-t">
                    <td className="border border-r px-4 py-2 font-mono text-sm">{prop.name}</td>
                    <td className="border border-r px-4 py-2 text-sm font-mono">{prop.type}</td>
                    <td className="border border-r px-4 py-2 text-sm">
                      <code className="text-xs bg-muted px-1 rounded">
                        {prop.defaultValue || "-"}
                      </code>
                    </td>
                    <td className="border border-r px-4 py-2 text-center">
                      {prop.required ? <span className="text-destructive">✓</span> : "-"}
                    </td>
                    <td className="border border-r px-4 py-2 text-sm max-w-xs">{prop.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )
    }

    const Component = React.lazy(async () => {
      try {
        const module = await import(`../components/${component?.path}`)
        return module[component?.name as keyof typeof module]
      } catch (error) {
        console.error("Failed to load component:", error)
        return () => (
          <div className="p-8 text-center text-destructive">
            Error loading component: {component?.name}
          </div>
        )
      }
    })

    return (
      <div className="container mx-auto py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{component?.name}</h1>
          <p className="text-muted-foreground mb-4">{component?.description}</p>

          <div className="flex flex-wrap gap-2 mb-8">
            {component?.category && (
              <span className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-full text-sm">
                {component?.category}
              </span>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="space-y-6">
            {renderControls(componentProps, setComponentProps)}
            {renderCodeExample()}
            {renderPropsTable()}
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold mb-4">Live Preview</h3>
            <div className="border rounded-lg p-4 bg-card">
              <React.Suspense
                fallback={
                  <div className="flex items-center justify-center h-32">
                    <div className="animate-spin rounded-full h-8 w-8 border-2 border-primary border-t-transparent"></div>
                  </div>
                }
              >
                <Component {...componentProps} />
              </React.Suspense>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
