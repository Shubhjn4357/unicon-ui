import { DocsLayout as DocsSidebarLayout } from "@/components/layout/docs-layout"

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <DocsSidebarLayout>{children}</DocsSidebarLayout>
    </div>
  )
}
