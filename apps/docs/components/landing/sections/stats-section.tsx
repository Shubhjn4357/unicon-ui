const stats = [
    { value: "100+", label: "Components" },
    { value: "50K+", label: "Downloads/month" },
    { value: "10K+", label: "GitHub Stars" },
    { value: "99%", label: "Satisfaction" },
]

export function StatsSection() {
    return (
        <section className="py-24 bg-surface">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-brand mb-2">
                                {stat.value}
                            </div>
                            <div className="text-foreground-secondary text-sm md:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
