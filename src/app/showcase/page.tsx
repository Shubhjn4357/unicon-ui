import { Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Badge } from "@unicorn-ui/ui"
import { ArrowRight, Box, Component } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Showcase - Unicorn UI",
  description: "Beautiful applications built with Unicorn UI",
}

export default function ShowcasePage() {
  return (
    <div className="container py-20 space-y-20">
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-3xl mx-auto">
        <Badge variant="secondary" className="mb-4">Community Showcase</Badge>
        <h1 className="text-5xl font-extrabold tracking-tight">
          Built with <span className="text-primary">Unicorn UI</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover beautiful, high-performance applications crafted by our community.
        </p>
        <div className="flex items-center justify-center gap-4 pt-4">
          <Link href="/docs/installation">
            <Button size="lg">
              Start Building <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="https://github.com/unicorn-ui/ui">
            <Button size="lg" variant="outline">
              Submit Your App
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Examples Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="group overflow-hidden border-muted/50 transition-all hover:border-primary/50 hover:shadow-lg">
            <div className="h-48 bg-muted/50 relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/20">
                <Box className="w-16 h-16" />
              </div>
              <div className="absolute inset-0 bg-linear-to-t from-background to-transparent opacity-80" />
            </div>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span>Project {i}</span>
                <Badge variant="outline">v1.0</Badge>
              </CardTitle>
              <CardDescription>A stunning dashboard for analytics.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-2 flex-wrap">
                <Badge variant="secondary" className="text-xs">Dashboard</Badge>
                <Badge variant="secondary" className="text-xs">Next.js</Badge>
                <Badge variant="secondary" className="text-xs">Dark Mode</Badge>
              </div>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="w-full group-hover:text-primary">
                View Project <ArrowRight className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-all" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>

      {/* Templates Section (Upcoming) */}
      <section className="bg-muted/30 p-12 rounded-3xl text-center space-y-6">
        <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
          <Component className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold">Official Templates</h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Jumpstart your development with our production-ready templates.
          Landing pages, dashboards, and SaaS starters coming soon.
        </p>
        <Button variant="secondary">Browse Templates</Button>
      </section>
    </div>
  )
}
