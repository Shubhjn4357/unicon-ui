import { Badge } from "@/components/core/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/core/card"
import { APP_CONSTANTS } from "@/constants/constants"
import { Download, FileCode2, Package, Settings, Terminal, Zap } from "lucide-react"

export const metadata = {
  title: `CLI - ${APP_CONSTANTS.name}`,
  description: `Command-line tools for installing and managing ${APP_CONSTANTS.name} components`,
}

export default function CliPage() {
  return (
    <div className="container py-10 space-y-10">
      <div className="max-w-4xl space-y-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Terminal className="h-8 w-8" />
            <h1 className="text-4xl font-bold">CLI</h1>
          </div>
          <p className="text-lg text-muted-foreground">
            Command-line tools for installing and managing {APP_CONSTANTS.name} components in your
            project.
          </p>
        </div>

        {/* Quick Start */}
        <Card className="unicorn-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Quick Start
            </CardTitle>
            <CardDescription>
              Install the {APP_CONSTANTS.name} package and start using components
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">1. Install the package</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npm install {APP_CONSTANTS.package.name}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">2. Import components</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`import { Button, Card } from '${APP_CONSTANTS.package.name}'
import '${APP_CONSTANTS.package.name}/dist/styles.css'`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">3. Use in your app</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`<Card>
  <Button>Click me</Button>
</Card>`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* CLI Commands */}
        <Card className="unicorn-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Available Commands
            </CardTitle>
            <CardDescription>All commands available in the {APP_CONSTANTS.name} CLI</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Add Command */}
            <div className="border-l-4 border-primary pl-4">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-lg font-semibold">add</code>
                <Badge>Primary</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                Add individual components to your project without installing the entire library.
              </p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npx {APP_CONSTANTS.package.name} add [component-name]</code>
              </pre>
              <div className="mt-3 space-y-2">
                <p className="text-sm font-semibold">Examples:</p>
                <pre className="bg-muted/50 p-3 rounded text-sm">
                  <code>{`# Add a single component
npx ${APP_CONSTANTS.package.name} add button

# Add multiple components
npx ${APP_CONSTANTS.package.name} add button card input`}</code>
                </pre>
              </div>
            </div>

            {/* Sync Command */}
            <div className="border-l-4 border-secondary pl-4">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-lg font-semibold">sync</code>
                <Badge variant="secondary">Maintenance</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                Sync and regenerate the local component registry metadata. Required after adding new
                files manually.
              </p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npx {APP_CONSTANTS.package.name} sync</code>
              </pre>
            </div>

            {/* Create Command */}
            <div className="border-l-4 border-orange-500 pl-4">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-lg font-semibold">create</code>
                <Badge variant="outline">Development</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                Scaffold a new component with best practices and standard file structure.
              </p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npx {APP_CONSTANTS.package.name} create [component-name]</code>
              </pre>
            </div>

            {/* Init Command */}
            <div className="border-l-4 border-accent pl-4">
              <div className="flex items-center gap-2 mb-2">
                <code className="text-lg font-semibold">init</code>
                <Badge variant="outline">Setup</Badge>
              </div>
              <p className="text-muted-foreground mb-3">
                Initialize your project by checking Tailwind CSS configuration and setting up global
                styles.
              </p>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>npx {APP_CONSTANTS.package.name} init</code>
              </pre>
              <div className="mt-3 space-y-2">
                <p className="text-sm font-semibold">This command will:</p>
                <ul className="text-sm text-muted-foreground list-disc list-inside">
                  <li>Verify your Tailwind CSS installation</li>
                  <li>Verify your global CSS file path</li>
                  <li>Prepare your project for component installation</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Configuration */}
        <Card className="unicorn-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Configuration
            </CardTitle>
            <CardDescription>
              Customize {APP_CONSTANTS.name} behavior with a configuration file
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Create `unicorn.config.js`</h3>
                <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                  <code>{`module.exports = {
  // Component installation directory
  componentsDir: './components/ui',
  
  // CSS file to import styles
  cssFile: './app/globals.css',
  
  // Tailwind config path
  tailwind: './tailwind.config.ts',
  
  // Default design style
  designStyle: 'glass',
  
  // TypeScript support
  typescript: true,
}`}</code>
                </pre>
              </div>

              <div className="mt-4 p-4 bg-info/10 border border-info/20 rounded-lg">
                <p className="text-sm">
                  <strong>Note:</strong> After running <code>init</code>, this file will be created
                  automatically with default values.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Usage */}
        <Card className="unicorn-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCode2 className="h-5 w-5" />
              Advanced Usage
            </CardTitle>
            <CardDescription>Power-user features and customization options</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Install with custom path</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`npx ${APP_CONSTANTS.package.name} add button --path ./src/components`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Skip dependency installation</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`npx ${APP_CONSTANTS.package.name} add button --no-deps`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Overwrite existing files</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`npx ${APP_CONSTANTS.package.name} add button --force`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Install all components</h3>
              <pre className="bg-muted p-4 rounded-lg overflow-x-auto">
                <code>{`npx ${APP_CONSTANTS.package.name} add --all`}</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Troubleshooting */}
        <Card className="unicorn-card">
          <CardHeader>
            <CardTitle>Troubleshooting</CardTitle>
            <CardDescription>Common issues and solutions</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Component not found</h3>
              <p className="text-sm text-muted-foreground mb-2">
                If a component cannot be found, make sure you're using the correct name. You can run
                the add command without arguments to see a list of available components:
              </p>
              <pre className="bg-muted p-3 rounded text-sm">
                <code>npx {APP_CONSTANTS.package.name} add</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Styles not applying</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Ensure you've imported the styles in your root layout:
              </p>
              <pre className="bg-muted p-3 rounded text-sm">
                <code>{`import '${APP_CONSTANTS.package.name}/dist/styles.css'`}</code>
              </pre>
            </div>

            <div>
              <h3 className="font-semibold mb-2">TypeScript errors</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Make sure peer dependencies are installed:
              </p>
              <pre className="bg-muted p-3 rounded text-sm">
                <code>npm install react react-dom framer-motion tailwindcss</code>
              </pre>
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card className="unicorn-card bg-linear-to-br from-primary/10 to-accent/10 border-primary/20">
          <CardHeader>
            <CardTitle>Next Steps</CardTitle>
            <CardDescription>Continue exploring {APP_CONSTANTS.name}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <p className="text-sm">
              ✨{" "}
              <a href="/docs/components" className="underline">
                Browse all components
              </a>
            </p>
            <p className="text-sm">
              🎨{" "}
              <a href="/docs/theming" className="underline">
                Customize your theme
              </a>
            </p>
            <p className="text-sm">
              🚀{" "}
              <a href="/docs/examples" className="underline">
                View examples
              </a>
            </p>
            <p className="text-sm">
              📖{" "}
              <a href={APP_CONSTANTS.links.github} className="underline">
                GitHub Repository
              </a>
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
