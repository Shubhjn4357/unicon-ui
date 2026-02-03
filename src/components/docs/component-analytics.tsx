"use client"

import * as React from "react"
import { BarChart, PieChart, Activity, Package } from "lucide-react"
import { componentRegistry } from "../../registry/enhanced-registry"
import { Card } from "../core/card"

export function ComponentAnalytics() {
    const [stats, setStats] = React.useState<any>(null)

    React.useEffect(() => {
        // Subscribe to registry changes
        const updateStats = () => {
            setStats(componentRegistry.getStats())
        }

        updateStats()
        const unsubscribe = componentRegistry.subscribe(updateStats)
        return () => { unsubscribe() }
    }, [])

    if (!stats) return null

    return (
        <div className="space-y-8 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatsCard
                    title="Total Components"
                    value={stats.totalComponents}
                    icon={<Package className="w-4 h-4 text-muted-foreground" />}
                />
                <StatsCard
                    title="Categories"
                    value={stats.totalCategories}
                    icon={<BarChart className="w-4 h-4 text-muted-foreground" />}
                />
                <StatsCard
                    title="Avg Bundle Size"
                    value="~4.2kb"
                    subtext="Estimated Gzipped"
                    icon={<Activity className="w-4 h-4 text-muted-foreground" />}
                />
                <StatsCard
                    title="Documentation Coverage"
                    value="98%"
                    icon={<PieChart className="w-4 h-4 text-muted-foreground" />}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="p-6">
                    <h3 className="font-semibold mb-4">Distribution by Category</h3>
                    <div className="space-y-4">
                        {Object.entries(stats.componentsByCategory).map(([category, count]: [string, any]) => (
                            <div key={category} className="space-y-1">
                                <div className="flex justify-between text-sm">
                                    <span className="capitalize">{category}</span>
                                    <span className="text-muted-foreground">{count}</span>
                                </div>
                                <div className="h-2 bg-muted rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-primary"
                                        style={{ width: `${(count / stats.totalComponents) * 100}%` }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>

                <Card className="p-6">
                    <h3 className="font-semibold mb-4">Component Status</h3>
                    <div className="space-y-4">
                        {Object.entries(stats.componentsByStatus || {}).map(([status, count]: [string, any]) => (
                            <div key={status} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
                                <div className="flex items-center gap-3">
                                    <div className={`w-2 h-2 rounded-full ${getStatusColor(status)}`} />
                                    <span className="capitalize font-medium">{status}</span>
                                </div>
                                <span className="text-xl font-bold">{count}</span>
                            </div>
                        ))}
                    </div>
                </Card>
            </div>

            <Card className="p-6">
                <h3 className="font-semibold mb-4">Recently Updated</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {stats.recentlyUpdated.map((name: string) => (
                        <div key={name} className="p-3 border rounded-lg bg-background flex items-center gap-2">
                            <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary font-bold text-xs">
                                {name.substring(0, 2)}
                            </div>
                            <span className="text-sm font-medium truncate">{name}</span>
                        </div>
                    ))}
                </div>
            </Card>
        </div>
    )
}

function StatsCard({ title, value, subtext, icon }: any) {
    return (
        <Card className="p-6">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <h3 className="tracking-tight text-sm font-medium text-muted-foreground">{title}</h3>
                {icon}
            </div>
            <div>
                <div className="text-2xl font-bold">{value}</div>
                {subtext && <p className="text-xs text-muted-foreground">{subtext}</p>}
            </div>
        </Card>
    )
}

function getStatusColor(status: string) {
    switch (status) {
        case 'stable': return 'bg-green-500'
        case 'beta': return 'bg-yellow-500'
        case 'experimental': return 'bg-purple-500'
        case 'deprecated': return 'bg-red-500'
        default: return 'bg-gray-500'
    }
}
