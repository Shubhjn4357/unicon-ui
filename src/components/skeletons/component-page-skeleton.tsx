import { Card, Skeleton } from "@unicorn-ui/ui"

export function ComponentPageSkeleton() {
  return (
    <div className="space-y-10 pb-10 max-w-5xl mx-auto">
      <div className="space-y-4">
        <Skeleton className="h-12 w-1/3" />
        <Skeleton className="h-6 w-2/3" />
      </div>

      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-40" />
          <Card className="min-h-[350px] p-6">
            <div className="flex items-center justify-center h-full">
              <Skeleton className="h-10 w-32" />
            </div>
          </Card>
        </div>
      </div>

      <div className="space-y-6 pt-8">
        <Skeleton className="h-10 w-24" />
        <Card className="h-48" />
      </div>
    </div>
  )
}
