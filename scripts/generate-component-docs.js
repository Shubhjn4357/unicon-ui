#!/usr/bin/env node
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const metadataPath = path.join(__dirname, "..", "src", "registry", "component-metadata.json")
const outPath = path.join(__dirname, "..", "src", "data", "component-docs.tsx")

if (!fs.existsSync(metadataPath)) {
  console.error("component-metadata.json not found. Run the registry generator first.")
  process.exit(1)
}

const metadata = JSON.parse(fs.readFileSync(metadataPath, "utf8"))

function toPascal(str) {
  return str.replace(/(^|[-_\/])(\w)/g, (_, __, c) => (c || "").toUpperCase())
}

function capitalize(str) {
  if (!str) return ""
  return str.charAt(0).toUpperCase() + str.slice(1)
}

const entries = metadata.map((m) => {
  const primaryExport =
    Array.isArray(m.exports) && m.exports.length > 0 ? m.exports[0] : toPascal(m.name)
  const demoName = `${primaryExport}Demo`
  const props = (m.props || []).map((p) => {
    return {
      name: p.name,
      type: p.type || "any",
      defaultValue: undefined,
      description: p.description || "",
      required: !!p.required,
      control: p.control || { type: "text" },
    }
  })

  const storyArgs = {}
  // provide a simple default for common props
  props.forEach((p) => {
    if (p.name === "children") storyArgs.children = "Example"
    if (p.type?.includes("boolean")) storyArgs[p.name] = false
    if (p.type?.includes("number")) storyArgs[p.name] = 0
    if (p.type?.includes("string")) storyArgs[p.name] = ""
  })

  return {
    slug: m.name,
    title: toPascal(m.name),
    category: capitalize(m.category),
    description: m.description || "",
    demoName,
    props,
    storyArgs,
  }
})

const header = `import * as Demos from "@/components/docs/demos"
import { HookPlaceholder } from "@/components/docs/hook-placeholder"
import type { ComponentDoc } from "../components/docs/types"

export const components: ComponentDoc[] = [\n`

const body = entries
  .map((e) => {
    const propsStr = JSON.stringify(e.props, null, 2).replace(
      /"(type|name|defaultValue|description|required|control)":/g,
      "$1:"
    )

    const propsFormatted = JSON.stringify(e.props, null, 2)

    const safeProps = e.props.length ? `props: ${propsFormatted},\n    ` : "props: [],\n    "

    const stories = Object.keys(e.storyArgs).length
      ? `stories: [ { name: "Default", args: ${JSON.stringify(e.storyArgs)} } ],\n    `
      : ""

    return `  {
    slug: "${e.slug}",
    title: "${e.title}",
    category: "${e.category}",
    description: ${JSON.stringify(e.description)},
    component: (Demos as any)["${e.demoName}"] ?? HookPlaceholder,
    ${safeProps}${stories}},\n`
  })
  .join("\n")

const footer = "]\n"

fs.writeFileSync(outPath, header + body + footer)
console.log("Generated", outPath)
