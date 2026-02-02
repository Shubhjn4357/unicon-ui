import { DocumentationPage } from "@/components/docs/documentation-page"
import { ComponentPageSkeleton } from "@/components/skeletons/component-page-skeleton"
import { getComponentBySlug } from "@/data/component-docs" // Using the new data file
import { ComponentPlayground } from "@/components/docs/component-playground"
import { notFound } from "next/navigation"
import { Suspense } from "react"
import { Metadata } from "next"

interface ComponentPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params }: ComponentPageProps): Promise<Metadata> {
  const { slug } = await params
  const component = getComponentBySlug(slug)

  if (!component) {
    return { title: 'Component Not Found' }
  }

  return {
    title: `${component.title} - Unicorn UI`,
    description: component.description,
  }
}

async function ComponentContent(props: ComponentPageProps) {
  const params = await props.params
  const component = getComponentBySlug(params.slug)

  if (!component) {
    notFound()
  }

  return (
    <div className="container py-10 space-y-10">
      <ComponentPlayground doc={component} />
    </div>
  )
}

export default async function ComponentPage(props: ComponentPageProps) {
  return (
    <Suspense fallback={<ComponentPageSkeleton />}>
      <ComponentContent {...props} />
    </Suspense>
  )
}
