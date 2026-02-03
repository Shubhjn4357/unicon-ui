import fs from "node:fs"
import path from "node:path"
import * as ts from "typescript"
import { ComponentMetadata, ComponentProp, ChangelogEntry } from "./types"

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
   * Discover and analyze all components
   */
  public generate(): void {
    console.log("Discovering components...")
    const components = this.discoverAll()

    // Output to the same directory
    const outputPath = path.join(__dirname, "component-metadata.json")
    fs.writeFileSync(outputPath, JSON.stringify(components, null, 2))
    console.log(`Generated metadata for ${components.length} components at ${outputPath}`)
  }

  /**
   * Discover all components in the source directory
   */
  discoverAll(): ComponentMetadata[] {
    const components: ComponentMetadata[] = []

    // Adjust these based on actual project structure
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
        try {
          const metadata = this.analyzeComponent(componentPath, dir)
          if (metadata) {
            components.push(metadata)
            this.metadata.set(metadata.name, metadata)
          }
        } catch (e) {
          console.error(`Error analyzing ${componentPath}:`, e)
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
    const dependencies = this.extractDependencies(sourceFile)

    // Extract JSDoc metadata
    const jsDocTags = this.extractJSDocMetadata(sourceFile)

    return {
      name: path.basename(filePath, ".tsx"),
      category,
      filePath: filePath.replace(/\\/g, "/"),
      exports,
      props,
      dependencies,
      ...jsDocTags,
      lastModified: fs.statSync(fullPath).mtime.toISOString(),
      usageExample: this.extractUsageExample(sourceFile)
    }
  }

  /**
   * Extract JSDoc metadata (description, tags, status, etc.)
   */
  private extractJSDocMetadata(sourceFile: ts.SourceFile): Partial<ComponentMetadata> {
    const metadata: Partial<ComponentMetadata> = {}

    const fileText = sourceFile.getFullText()
    const comments = ts.getLeadingCommentRanges(fileText, 0)

    if (comments && comments.length > 0) {
      const firstComment = comments[0]
      const commentText = fileText.substring(firstComment.pos, firstComment.end)

      metadata.description = this.parseJSDocDescription(commentText)
      // Cast to expected type
      metadata.status = (this.parseJSDocTag(commentText, "status") as any) || "stable"
      metadata.author = this.parseJSDocTag(commentText, "author")
      metadata.version = this.parseJSDocTag(commentText, "version")

      const tagsMatch = commentText.match(/@tags\s+(.*)/)
      if (tagsMatch) {
        metadata.tags = tagsMatch[1].split(",").map(t => t.trim())
      }
    }

    return metadata
  }

  private parseJSDocDescription(comment: string): string {
    return comment
      .replace(/\/\*\*|\*\/|\*/g, "")
      .split("\n")
      .filter(line => !line.trim().startsWith("@"))
      .map(line => line.trim())
      .join(" ")
      .trim()
  }

  private parseJSDocTag(comment: string, tagName: string): string | undefined {
    const regex = new RegExp(`@${tagName}\\s+(.*)`)
    const match = comment.match(regex)
    return match ? match[1].trim() : undefined
  }

  /**
   * Extract dependencies (imports)
   */
  private extractDependencies(sourceFile: ts.SourceFile): string[] {
    const dependencies: Set<string> = new Set()

    ts.forEachChild(sourceFile, (node) => {
      if (ts.isImportDeclaration(node)) {
        if (node.moduleSpecifier && ts.isStringLiteral(node.moduleSpecifier)) {
          const moduleSpecifier = node.moduleSpecifier.text
          if (moduleSpecifier.startsWith("@components/") || moduleSpecifier.startsWith("./")) {
            dependencies.add(moduleSpecifier)
          }
        }
      }
    })

    return Array.from(dependencies)
  }

  /**
   * Extract exported components from a file
   */
  private extractExports(sourceFile: ts.SourceFile): string[] {
    const exports: string[] = []

    ts.forEachChild(sourceFile, (node) => {
      if (ts.isExportDeclaration(node)) {
        if (node.exportClause && ts.isNamedExports(node.exportClause)) {
          node.exportClause.elements.forEach(element => {
            exports.push(element.name.text)
          })
        }
      } else if (ts.isClassDeclaration(node) || ts.isFunctionDeclaration(node) || ts.isVariableStatement(node)) {
        const modifiers = ts.canHaveModifiers(node) ? ts.getModifiers(node) : undefined
        if (modifiers?.some(m => m.kind === ts.SyntaxKind.ExportKeyword)) {
          if (ts.isClassDeclaration(node) && node.name) {
            exports.push(node.name.text)
          } else if (ts.isFunctionDeclaration(node) && node.name) {
            exports.push(node.name.text)
          } else if (ts.isVariableStatement(node)) {
            node.declarationList.declarations.forEach(decl => {
              if (ts.isIdentifier(decl.name)) {
                exports.push(decl.name.text)
              }
            })
          }
         }
      }
    })

    return exports
  }

  /**
   * Extract component props
   */
  private extractProps(sourceFile: ts.SourceFile): ComponentProp[] {
    const props: ComponentProp[] = []

    ts.forEachChild(sourceFile, (node) => {
      if (ts.isInterfaceDeclaration(node) && node.name) {
        const interfaceName = node.name.text
        if (interfaceName.endsWith("Props")) {
          node.members.forEach((member) => {
            if (ts.isPropertySignature(member)) {
              if (ts.isIdentifier(member.name)) {
                props.push(this.mapPropDefinition(member))
              }
            }
          })
        }
      }
    })

    return props
  }

  private mapPropDefinition(member: ts.PropertySignature): ComponentProp {
    const name = (member.name as ts.Identifier).text
    const type = member.type ? this.typeNodeToString(member.type) : "any"

    return {
      name,
      type,
      required: !member.questionToken,
      description: this.extractDescription(member),
      control: this.inferControlType(type)
    }
  }

  private extractDescription(node: ts.Node): string | undefined {
    // Basic JSDoc extraction - would need more robust parsing for production
    const anyNode = node as any;
    if (anyNode.jsDoc && anyNode.jsDoc.length > 0) {
      return anyNode.jsDoc[0].comment
    }
    return undefined
  }

  private inferControlType(type: string): any {
    if (type === "boolean") return "boolean"
    if (type === "number") return "number"
    if (type.includes("|")) return "select"
    if (type.includes("Color")) return "color"
    return "text"
  }

  private typeNodeToString(node: ts.TypeNode): string {
    if (ts.isTypeReferenceNode(node) && node.typeName) {
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

    if (node.kind === ts.SyntaxKind.StringKeyword) return "string"
    if (node.kind === ts.SyntaxKind.NumberKeyword) return "number"
    if (node.kind === ts.SyntaxKind.BooleanKeyword) return "boolean"

    return "any"
  }

  private extractUsageExample(sourceFile: ts.SourceFile): string | undefined {
    const fullText = sourceFile.getFullText();
    const exampleMatch = fullText.match(/@example\s+([\s\S]*?)(?=\*\/)/);
    if (exampleMatch) {
      return exampleMatch[1].trim();
    }
    return undefined;
  }
}

if (require.main === module) {
  try {
    const registry = new ComponentRegistry()
    registry.generate()
  } catch (error) {
    console.error("Registry generation failed:", error)
    process.exit(1)
  }
}
