import * as Demos from "@/components/docs/demos"
import { DocumentationPage } from "@/components/docs/documentation-page"
import { getHookBySlug } from "@/data/hook-docs"
import { notFound } from "next/navigation"

interface HookPageProps {
  params: Promise<{
    slug: string
  }>
}

const DEMO_MAP: Record<string, React.ReactNode> = {
  "use-theme": <Demos.UseThemeDemo />,
  "use-window-size": <Demos.UseWindowSizeDemo />,
  "use-copy-to-clipboard": <Demos.UseCopyToClipboardDemo />,
  "use-async": <Demos.UseAsyncDemo />,
  "use-click-outside": <Demos.UseClickOutsideDemo />,
  "use-mouse": <Demos.UseMouseDemo />,
  "use-scroll-progress": <Demos.UseScrollProgressDemo />,
}

export default async function HookPage(props: HookPageProps) {
  const params = await props.params
  const hook = getHookBySlug(params.slug)

  if (!hook) {
    notFound()
  }

  const { data } = hook

  // Inject the real demo component
  const examples = data.examples.map((example) => ({
    ...example,
    preview: DEMO_MAP[params.slug] || (
      <div className="p-4 text-muted-foreground">Demo not available</div>
    ),
  }))

  return <DocumentationPage {...data} examples={examples} />
}
