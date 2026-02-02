#!/usr/bin/env node

/**
 * Component Documentation Generator
 * Generates markdown documentation for all components
 */

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const COMPONENT_DIRS = {
  buttons: "Button Components",
  layout: "Layout Components",
  text: "Text Components",
  feedback: "Feedback Components",
  special: "Special Effects",
  backgrounds: "Background Components",
  core: "Core Components",
  misc: "Miscellaneous",
}

function extractComponentInfo(filePath) {
  const content = fs.readFileSync(filePath, "utf-8")

  // Extract component name
  const nameMatch = content.match(/export (?:const|function) (\w+)/)
  const name = nameMatch ? nameMatch[1] : "Unknown"

  // Extract description from JSDoc
  const descMatch = content.match(/\/\*\*\s*\n\s*\*\s*(.+?)\s*\n/)
  const description = descMatch ? descMatch[1] : "No description available"

  // Extract features
  const featuresMatch = content.match(/\*\s*Features?:\s*(.+?)(?:\n|\*\/)/s)
  const features = featuresMatch ? featuresMatch[1].trim() : ""

  // Extract props interface
  const propsMatch = content.match(/export interface (\w+Props) (?:extends .+? )?\{([\s\S]+?)\n\}/)
  const props = propsMatch ? propsMatch[2] : ""

  return { name, description, features, props }
}

function generateCategoryDocs(category, dirName) {
  const componentsDir = path.join(__dirname, "..", "src", "components", dirName)

  if (!fs.existsSync(componentsDir)) {
    return ""
  }

  const files = fs.readdirSync(componentsDir).filter((file) => file.endsWith(".tsx"))

  if (files.length === 0) {
    return ""
  }

  let markdown = `## ${category}\n\n`

  files.forEach((file) => {
    const filePath = path.join(componentsDir, file)
    const info = extractComponentInfo(filePath)

    markdown += `### ${info.name}\n\n`
    markdown += `${info.description}\n\n`

    if (info.features) {
      markdown += `**Features:** ${info.features}\n\n`
    }

    markdown += `**Usage:**\n\`\`\`tsx\nimport { ${info.name} } from "@unicorn-ui/ui"\n\n`
    markdown += "export function Example() {\n"
    markdown += "  return (\n"
    markdown += `    <${info.name}>\n`
    markdown += "      Your content here\n"
    markdown += `    </${info.name}>\n`
    markdown += "  )\n"
    markdown += "}\n```\n\n"

    if (info.props) {
      markdown += `**Props:**\n\`\`\`typescript\n${info.props.trim()}\n\`\`\`\n\n`
    }

    markdown += "---\n\n"
  })

  return markdown
}

function generateDocs() {
  console.log("📚 Generating component documentation...\n")

  let markdown = "# Unicorn UI Components\n\n"
  markdown += "> Auto-generated documentation for all components\n\n"
  markdown += "## Installation\n\n"
  markdown += "```bash\npnpm add @unicorn-ui/ui\n```\n\n"
  markdown += "## Components\n\n"

  for (const [dirName, category] of Object.entries(COMPONENT_DIRS)) {
    const categoryDocs = generateCategoryDocs(category, dirName)
    if (categoryDocs) {
      markdown += categoryDocs
    }
  }

  const docsPath = path.join(__dirname, "..", "COMPONENTS.md")
  fs.writeFileSync(docsPath, markdown)

  console.log(`✅ Generated documentation: ${docsPath}`)
  console.log("\n📝 Documentation includes:")

  for (const category of Object.values(COMPONENT_DIRS)) {
    const dirName = Object.keys(COMPONENT_DIRS).find((key) => COMPONENT_DIRS[key] === category)
    const componentsDir = path.join(__dirname, "..", "src", "components", dirName)

    if (fs.existsSync(componentsDir)) {
      const count = fs.readdirSync(componentsDir).filter((f) => f.endsWith(".tsx")).length
      if (count > 0) {
        console.log(`   - ${category}: ${count} components`)
      }
    }
  }
}

generateDocs()
