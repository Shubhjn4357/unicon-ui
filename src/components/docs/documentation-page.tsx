"use client"

import { Button, Card, Tabs, TabsContent, TabsList, TabsTrigger } from "@unicorn-ui/ui"
import { motion } from "framer-motion"
import { Check, Code, Copy, Eye } from "lucide-react"
import { useState } from "react"

interface DocumentationPageProps {
  title: string
  description: string
  examples: Array<{
    title: string
    preview: React.ReactNode
    code: string
  }>
  props?: Array<{
    name: string
    type: string
    description: string
    default?: string
  }>
}

export function DocumentationPage({ title, description, examples, props }: DocumentationPageProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-10 pb-10 max-w-5xl mx-auto">
      <div className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">{title}</h1>
        <p className="text-xl text-foreground-secondary">{description}</p>
      </div>

      <div className="space-y-12">
        {examples.map((example, idx) => (
          <div key={idx} className="space-y-4">
            <h3 className="text-2xl font-bold">{example.title}</h3>
            <Tabs defaultValue="preview" className="w-full">
              <div className="flex items-center justify-between mb-4">
                <TabsList>
                  <TabsTrigger value="preview" className="gap-2">
                    <Eye className="h-4 w-4" /> Preview
                  </TabsTrigger>
                  <TabsTrigger value="code" className="gap-2">
                    <Code className="h-4 w-4" /> Code
                  </TabsTrigger>
                </TabsList>
              </div>
              <div className="mt-2">
                <TabsContent value="preview">
                  <Card className="flex min-h-[350px] items-center justify-center p-10 bg-background/50 backdrop-blur border-border/50">
                    {example.preview}
                  </Card>
                </TabsContent>
                <TabsContent value="code">
                  <Card className="relative overflow-hidden bg-muted p-4 border-border/50">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="absolute right-4 top-4 h-8 w-8 hover:bg-background/20"
                      onClick={() => copyToClipboard(example.code)}
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                    </Button>
                    <pre className="overflow-x-auto p-4 text-sm font-mono leading-relaxed">
                      <code>{example.code}</code>
                    </pre>
                  </Card>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        ))}
      </div>

      {props && (
        <div className="space-y-6 pt-8">
          <h2 className="text-3xl font-bold">Props</h2>
          <Card className="overflow-hidden border-border/50">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-muted/50 border-b border-border/50">
                  <tr>
                    <th className="p-4 font-semibold whitespace-nowrap">Prop</th>
                    <th className="p-4 font-semibold whitespace-nowrap">Type</th>
                    <th className="p-4 font-semibold whitespace-nowrap">Default</th>
                    <th className="p-4 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  {props.map((prop) => (
                    <tr key={prop.name} className="hover:bg-muted/30 transition-colors">
                      <td className="p-4 font-mono font-medium">{prop.name}</td>
                      <td className="p-4 font-mono text-primary">{prop.type}</td>
                      <td className="p-4 font-mono text-muted-foreground">{prop.default || "-"}</td>
                      <td className="p-4 text-muted-foreground">{prop.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      )}
    </div>
  )
}
