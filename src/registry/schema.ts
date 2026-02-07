import { z } from "zod"

export const changelogEntrySchema = z.object({
  version: z.string(),
  date: z.string(),
  changes: z.array(z.string()),
  type: z.enum(["added", "changed", "deprecated", "removed", "fixed"]),
})

export const propValidationSchema = z.object({
  min: z.number().optional(),
  max: z.number().optional(),
  pattern: z.string().optional(),
  custom: z.string().optional(),
})

export const componentPropSchema = z.object({
  name: z.string(),
  type: z.string(),
  description: z.string().optional(),
  required: z.boolean().optional(),
  defaultValue: z.unknown().optional(),
  control: z.enum(["text", "number", "boolean", "select", "color", "range"]).optional(),
  options: z.array(z.string()).optional(),
  validation: propValidationSchema.optional(),
  deprecated: z.boolean().optional(),
  deprecationMessage: z.string().optional(),
  since: z.string().optional(),
  isReactProp: z.boolean().optional(),
  acceptsChildren: z.boolean().optional(),
})

export const componentMetadataSchema = z.object({
  name: z.string(),
  category: z.string(),
  description: z.string().optional(),
  filePath: z.string(),
  exports: z.array(z.string()),
  props: z.array(componentPropSchema).optional(),
  usageExample: z.string().optional(),
  dependencies: z.array(z.string()).optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(["stable", "beta", "experimental"]).optional(),
  version: z.string().optional(),
  lastModified: z.string().optional(),
  documentation: z.string().optional(),
  bundleSize: z.number().optional(),
  renderTime: z.number().optional(),
  dependenciesCount: z.number().optional(),
  keywords: z.array(z.string()).optional(),
  popularity: z.number().optional(),
  author: z.string().optional(),
  repository: z.string().optional(),
  changelog: z.array(changelogEntrySchema).optional(),
})

export type ComponentMetadata = z.infer<typeof componentMetadataSchema>
export type ComponentProp = z.infer<typeof componentPropSchema>
