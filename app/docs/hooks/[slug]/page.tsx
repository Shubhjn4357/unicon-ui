import { CopyDemo, ThemeDemo, WindowSizeDemo } from "@/components/demos/hooks"
import { DocumentationPage } from "@/components/docs/documentation-page"
import { getHookBySlug } from "@/data/hook-docs"
import { notFound } from "next/navigation"

interface HookPageProps {
  params: Promise<{
    slug: string
  }>
}

const DEMO_MAP: Record<string, React.ReactNode> = {
  "use-theme": <ThemeDemo />,
  "use-window-size": <WindowSizeDemo />,
  "use-copy-to-clipboard": <CopyDemo />,
}

export default async function HookPage(props: HookPageProps) {
  const params = await props.params
  const hook = getHookBySlug(params.slug)

  if (!hook) {
    notFound()
  }

  const { data } = hook

  // Inject the real demo component
  const examples = data.examples.map((example: any) => ({
    ...example,
    preview: DEMO_MAP[params.slug] || (
      <div className="p-4 text-muted-foreground">Demo not available</div>
    ),
  }))

  return <DocumentationPage {...data} examples={examples} />
}
