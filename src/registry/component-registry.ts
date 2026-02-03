import fs from "node:fs"
import path from "node:path"
import * as ts from "typescript"

export interface ComponentMetadata {
  name: string
  path: string
  category: string
  filePath: string
  description?: string
  exports: string[]
  props?: PropDefinition[]
  examples?: CodeExample[]
}

export interface PropDefinition {
  name: string
  type: string
  description?: string
  required?: boolean
  defaultValue?: any
  control?: {
    type: "text" | "number" | "boolean" | "select" | "color" | "range"
    options?: string[]
    min?: number
    max?: number
    step?: number
  }
}

export interface CodeExample {
  title: string
  code: string
  description?: string
}

export class ComponentRegistry {
  private program: ts.Program
  private checker: ts.TypeChecker
  private metadata: Map<string, ComponentMetadata> = new Map()

  constructor() {
    const configPath = path.join(process.cwd(), "tsconfig.json")
    const configFile = ts.readConfigFile(configPath, ts.sys.readFile)
    if (configFile.error) {
      throw new Error(configFile.error.messageText.toString())
    }

    const parsedConfig = ts.parseJsonConfigFileContent(
      configFile.config,
      ts.sys,
      path.dirname(configPath)
    )

    this.program = ts.createProgram(parsedConfig.fileNames, parsedConfig.options)
    this.checker = this.program.getTypeChecker()
  }

  /**
   * Discover all components in the source directory
   */
  discoverAll(): ComponentMetadata[] {
    const components: ComponentMetadata[] = []

    const componentDirs = [
      "core",
      "layout",
      "special",
      "backgrounds",
      "text",
      "buttons",
      "misc",
      "feedback",
      "interaction",
      "animation",
      "mocks",
      "skeletons",
    ]

    for (const dir of componentDirs) {
      const dirPath = path.join(process.cwd(), "src", "components", dir)
      if (!fs.existsSync(dirPath)) continue

      const files = fs.readdirSync(dirPath).filter((f) => f.endsWith(".tsx") && !f.startsWith("."))

      for (const file of files) {
        const componentPath = path.join(dir, file)
        const metadata = this.analyzeComponent(componentPath, dir)
        if (metadata) {
          components.push(metadata)
          this.metadata.set(`${dir}/${file}`, metadata)
        }
      }
    }

    return components.sort((a, b) => a.category.localeCompare(b.category))
  }

  /**
   * Analyze a component file and extract metadata
   */
  private analyzeComponent(filePath: string, category: string): ComponentMetadata | null {
    const fullPath = path.join(process.cwd(), "src", "components", filePath)
    if (!fs.existsSync(fullPath)) return null

    const sourceFile = this.program.getSourceFile(fullPath)
    if (!sourceFile) return null

    const exports = this.extractExports(sourceFile)
    const props = this.extractProps(sourceFile)
    const examples = this.extractExamples(sourceFile)

    return {
      name: path.basename(filePath, ".tsx"),
      path: filePath.replace(/\\/g, "/"),
      category,
      filePath: fullPath,
      exports,
      props,
      examples,
    }
  }

  /**
   * Extract exported components from a file
   */
  private extractExports(sourceFile: ts.SourceFile): string[] {
    const exports: string[] = []

    ts.forEachChild(sourceFile, (node) => {
      if (ts.isExportDeclaration(node)) {
        if (ts.isVariableStatement(node)) {
          // @ts-ignore - TS compiler API usage
          const declList = node.declarationList;
          if (declList) {
            declList.declarations.forEach((decl: ts.VariableDeclaration) => {
              if (decl.name && ts.isIdentifier(decl.name)) {
                exports.push(decl.name.text)
              }
            })
          }
        } else if (ts.isFunctionDeclaration(node)) {
          // @ts-ignore
          const name = node.name;
          if (name && ts.isIdentifier(name)) {
            exports.push(name.text)
          }
        }
      }
    })

    return exports
  }

  /**
   * Extract component props from TypeScript interfaces
   */
  private extractProps(sourceFile: ts.SourceFile): PropDefinition[] {
    const props: PropDefinition[] = []

    // Look for interface definitions
    ts.forEachChild(sourceFile, (node) => {
      if (ts.isInterfaceDeclaration(node) && node.name) {
        const interfaceName = node.name.text

        // Check if this looks like a props interface
        if (
          interfaceName.includes("Props") ||
          interfaceName.toLowerCase() === path.basename(this.getFileName(sourceFile)).toLowerCase()
        ) {
          node.members.forEach((member) => {
            if (ts.isPropertySignature(member)) {
              const prop = this.extractPropertyFromSignature(member)
              if (prop) {
                props.push(prop)
              }
            }
          })
        }
      }
    })

    return props
  }

  /**
   * Extract examples from JSDoc or demo functions
   */
  private extractExamples(sourceFile: ts.SourceFile): CodeExample[] {
    const examples: CodeExample[] = []

    // Look for JSDoc examples
    const jsDoc = ts.getJSDocTags(sourceFile)
    // @ts-ignore - name exists on JSDocTag in this version match
    const exampleTags = jsDoc.filter((tag) => tag.name?.text === "example")

    exampleTags.forEach((tag) => {
      if (tag.comment) {
        examples.push({
          title: "Example",
          code: typeof tag.comment === "string" ? tag.comment : Array.isArray(tag.comment) ? (tag.comment as any).map((c: any) => c.text).join("") : "",
          description: "Usage example",
        })
      }
    })

    return examples
  }

  /**
   * Extract property information from TypeScript property signature
   */
  private extractPropertyFromSignature(signature: ts.PropertySignature): PropDefinition | null {
    if (!signature.name || !signature.type) return null

    // @ts-ignore
    const name = signature.name?.text
    const typeNode = signature.type
    const typeString = typeNode ? this.typeNodeToString(typeNode) : "any"

    const isRequired = !signature.questionToken

    // defaultValue is not available on property signatures (interfaces)
    const defaultValue = undefined
    const description = this.extractDescription(signature)
    const control = this.inferControlType(typeNode, defaultValue)

    return {
      name,
      type: typeString,
      required: isRequired,
      defaultValue,
      description,
      control,
    }
  }

  /**
   * Convert TypeScript type node to string representation
   */
  private typeNodeToString(node: ts.TypeNode): string {
    if (ts.isTypeReferenceNode(node) && node.typeName) {
      // @ts-ignore - TS compiler API usage
      const typeName = node.typeName
      if (ts.isIdentifier(typeName)) {
        return typeName.text
      }
      return (typeName as any).getText() || "any"
    }

    if (ts.isUnionTypeNode(node)) {
      return node.types.map((t) => this.typeNodeToString(t)).join(" | ")
    }

    if (ts.isLiteralTypeNode(node)) {
      // @ts-ignore
      return node.literal?.text || "any"
    }

    return this.checker.typeToString(this.checker.getTypeFromTypeNode(node))
  }

  /**
   * Extract default value from property
   */
  private extractDefaultValue(initializer?: ts.Expression): any {
    if (!initializer) return undefined

    if (ts.isStringLiteral(initializer)) {
      return initializer.text
    }

    if (ts.isNumericLiteral(initializer)) {
      return Number(initializer.text)
    }

    if (initializer.kind === ts.SyntaxKind.TrueKeyword) {
      return true
    }

    if (initializer.kind === ts.SyntaxKind.FalseKeyword) {
      return false
    }

    return undefined
  }

  /**
   * Extract description from JSDoc
   */
  private extractDescription(node: ts.Node): string | undefined {
    // @ts-ignore - name exists
    const descTag = jsDoc.find((tag) => tag.name?.text === "description")
    return typeof descTag?.comment === "string" ? descTag.comment : undefined
  }

  /**
   * Infer control type for property based on its type
   */
  private inferControlType(typeNode: ts.TypeNode, defaultValue?: any): PropDefinition["control"] {
    const typeString = this.typeNodeToString(typeNode)

    // Boolean controls
    if (typeString === "boolean") {
      return { type: "boolean" }
    }

    // Number controls
    if (typeString === "number") {
      return {
        type: "number",
        min: defaultValue || 0,
      }
    }

    // String controls
    if (typeString === "string") {
      return { type: "text" }
    }

    // Select controls for union types
    if (typeString.includes(" | ") && typeString.includes('"')) {
      const options = this.extractUnionOptions(typeNode)
      return {
        type: "select",
        options,
      }
    }

    return { type: "text" }
  }

  /**
   * Extract options from union type string
   */
  private extractUnionOptions(typeNode: ts.TypeNode): string[] {
    const options: string[] = []

    if (ts.isUnionTypeNode(typeNode)) {
      typeNode.types.forEach((type) => {
        if (ts.isLiteralTypeNode(type)) {
          // @ts-ignore - TS doesn't narrow this correctly for all literal types, but text exists on string/numeric literals
          const literal = type.literal
          if (literal && "text" in literal) {
            options.push((literal as any).text)
          }
        }
      })
    }

    return options
  }

  /**
   * Get file name from source file
   */
  private getFileName(sourceFile: ts.SourceFile): string {
    const filePath = sourceFile.fileName
    return path.basename(filePath, ".tsx")
  }

  /**
   * Get component metadata by slug
   */
  getComponentBySlug(slug: string): ComponentMetadata | undefined {
    return this.metadata.get(slug)
  }

  /**
   * Get all components by category
   */
  getComponentsByCategory(category: string): ComponentMetadata[] {
    return Array.from(this.metadata.values())
      .filter((comp) => comp.category === category)
      .sort((a, b) => a.name.localeCompare(b.name))
  }

  /**
   * Get sidebar navigation data
   */
  getSidebarNavigation() {
    const categories = new Map<string, ComponentMetadata[]>()

    // Group by category
    Array.from(this.metadata.values()).forEach((comp) => {
      if (!categories.has(comp.category)) {
        categories.set(comp.category, [])
      }
      categories.get(comp.category)!.push(comp)
    })

    return Array.from(categories.entries()).map(([category, components]) => ({
      name: category,
      items: components.map((comp) => ({
        title: comp.name,
        slug: comp.path,
        description: comp.description,
      })),
    }))
  }
}
