import { Card } from "@unicorn-ui/ui"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@unicorn-ui/ui"

export function CodePreview() {
    return (
      <section className="py-24 bg-surface-elevated/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, intuitive API</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        Write less code, build faster. Our APIs are designed to be intuitive and easy to use.
                    </p>
                </div>

                <Card className="bg-surface border-border overflow-hidden max-w-4xl mx-auto p-0">
                    <Tabs defaultValue="button" className="w-full">
                        <div className="border-b border-border px-4">
                            <TabsList className="bg-transparent h-12">
                                <TabsTrigger value="button" className="data-[state=active]:bg-surface-elevated">
                                    Button
                                </TabsTrigger>
                                <TabsTrigger value="card" className="data-[state=active]:bg-surface-elevated">
                                    Card
                                </TabsTrigger>
                                <TabsTrigger value="dialog" className="data-[state=active]:bg-surface-elevated">
                                    Dialog
                                </TabsTrigger>
                            </TabsList>
                        </div>
                        <TabsContent value="button" className="m-0">
                            <pre className="p-6 text-sm font-mono text-foreground-secondary overflow-x-auto">
                                <code>{`import { Button } from "@unicorn-ui/ui"

export function MyComponent() {
  return (
    <div className="flex gap-4">
      <Button>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
}`}</code>
                            </pre>
                        </TabsContent>
                        <TabsContent value="card" className="m-0">
                            <pre className="p-6 text-sm font-mono text-foreground-secondary overflow-x-auto">
                                <code>{`import { Card } from "@unicorn-ui/ui"

export function MyCard() {
  return (
    <Card>
      <div className="p-6">
        <h3 className="text-lg font-semibold">Welcome</h3>
        <p className="text-muted-foreground">
          This is a beautiful card component.
        </p>
      </div>
    </Card>
  )
}`}</code>
                            </pre>
                        </TabsContent>
                        <TabsContent value="dialog" className="m-0">
                            <pre className="p-6 text-sm font-mono text-foreground-secondary overflow-x-auto">
                                <code>{`import { Modal, Button } from "@unicorn-ui/ui"

export function MyDialog() {
  const [open, setOpen] = useState(false)
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>
        Open Dialog
      </Button>
      <Modal isOpen={open} onClose={() => setOpen(false)}>
        <h2>Dialog Title</h2>
        <p>Dialog content goes here.</p>
      </Modal>
    </>
  )
}`}</code>
                            </pre>
                        </TabsContent>
                    </Tabs>
                </Card>
            </div>
        </section>
    )
}
