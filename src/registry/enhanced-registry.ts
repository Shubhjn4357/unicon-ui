"use client"

import { useEffect, useState } from "react"
import type { ComponentMetadata, ComponentProp, SearchFilters } from "./types"

// Enhanced Component Registry with Advanced Features
export class ComponentRegistry {
  private static instance: ComponentRegistry
  private components: Map<string, ComponentMetadata> = new Map()
  private listeners: Set<() => void> = new Set()

  private constructor() {
    this.initializeComponents()
  }

  static getInstance(): ComponentRegistry {
    if (!ComponentRegistry.instance) {
      ComponentRegistry.instance = new ComponentRegistry()
    }
    return ComponentRegistry.instance
  }

  // Initialize components from metadata
  private initializeComponents() {
    try {
      // In Next.js, we might need to be careful about how we require dynamic JSON
      // This path logic might need adjustment depending on build output structure
      const metadata = require("./component-metadata.json")
      if (Array.isArray(metadata)) {
        metadata.forEach((component: ComponentMetadata) => {
          this.components.set(component.name, component)
        })
      }
    } catch (error) {
      console.warn("Component metadata not loaded in client registry", error)
    }
  }

  // Get all components
  getAllComponents(): ComponentMetadata[] {
    return Array.from(this.components.values())
  }

  // Get component by name
  getComponent(name: string): ComponentMetadata | undefined {
    return this.components.get(name)
  }

  // Get components by category
  getComponentsByCategory(category: string): ComponentMetadata[] {
    return this.getAllComponents().filter((comp) => comp.category === category)
  }

  // Advanced Search components
  searchComponents(query: string, filters?: SearchFilters): ComponentMetadata[] {
    const lowercaseQuery = query.toLowerCase()
    return this.getAllComponents().filter((comp) => {
      // Text search
      const matchesText =
        comp.name.toLowerCase().includes(lowercaseQuery) ||
        comp.description?.toLowerCase().includes(lowercaseQuery) ||
        comp.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)) ||
        comp.props?.some((prop) => prop.name.toLowerCase().includes(lowercaseQuery))

      if (!matchesText && query.length > 0) return false

      // Apply Filters
      if (filters) {
        if (filters.category && comp.category !== filters.category) return false
        if (filters.status && comp.status !== filters.status) return false
        if (filters.tags && !filters.tags.every(t => comp.tags?.includes(t))) return false
        if (filters.hasDependencies && (!comp.dependencies || comp.dependencies.length === 0)) return false
      }

      return true
    })
  }

  // Get component usage example
  getUsageExample(name: string): string {
    const component = this.getComponent(name)
    if (component?.usageExample) {
      return component.usageExample
    }
    // Fallback generator
    return `import { ${name} } from "@unicorn-ui/ui"\n\nexport default function Example() {\n  return <${name} />\n}`
  }

  // Get components by status (stable, beta, etc.)
  getComponentsByStatus(status: ComponentMetadata["status"]): ComponentMetadata[] {
    return this.getAllComponents().filter(c => c.status === status);
  }

  // Get deprecated components if any props or the component itself is marked
  getDeprecatedComponents(): ComponentMetadata[] {
    // Note: currently component-level deprecated flag is not in interface but properties might have it
    // Adding component level support would require type update, but let's assume props check for now
    return this.getAllComponents().filter(c => c.props?.some(p => p.deprecated));
  }

  // Subscribe to registry changes
  subscribe(listener: () => void) {
    this.listeners.add(listener)
    return () => this.listeners.delete(listener)
  }

  // Notify listeners of changes
  private notify() {
    this.listeners.forEach((listener) => listener())
  }

  // Get categories
  getCategories(): string[] {
    const categories = new Set(this.getAllComponents().map((comp) => comp.category))
    return Array.from(categories).sort()
  }

  // Get components with dependencies
  getComponentDependencies(name: string): string[] {
    const component = this.getComponent(name)
    return component?.dependencies || []
  }

  // Find components that depend on this one (Reverse dependency)
  getDependents(componentName: string): ComponentMetadata[] {
    return this.getAllComponents().filter(c =>
      c.dependencies?.some(dep => dep.includes(componentName))
    );
  }

  // Get component statistics
  getStats() {
    const components = this.getAllComponents()
    const categories = this.getCategories()
    const statusCounts = components.reduce((acc, comp) => {
      const status = comp.status || 'stable';
      acc[status] = (acc[status] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return {
      totalComponents: components.length,
      totalCategories: categories.length,
      componentsByCategory: categories.reduce(
        (acc, cat) => {
          acc[cat] = this.getComponentsByCategory(cat).length
          return acc
        },
        {} as Record<string, number>
      ),
      componentsByStatus: statusCounts,
      recentlyUpdated: components
        .sort(
          (a, b) =>
            new Date(b.lastModified || 0).getTime() - new Date(a.lastModified || 0).getTime()
        )
        .slice(0, 5)
        .map((comp) => comp.name),
    }
  }

  // Validate component props
  validateProps(name: string, props: Record<string, any>): { valid: boolean; errors: string[] } {
    const component = this.getComponent(name)
    if (!component) {
      return { valid: false, errors: [`Component ${name} not found`] }
    }

    const errors: string[] = []
    const requiredProps = component.props?.filter((prop) => prop.required) || []

    requiredProps.forEach((prop) => {
      if (!(prop.name in props)) {
        errors.push(`Required prop '${prop.name}' is missing`)
      }
    })

    return { valid: errors.length === 0, errors }
  }
}

// Singleton instance
export const componentRegistry = ComponentRegistry.getInstance()
