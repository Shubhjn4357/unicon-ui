import { Button } from "@unicorn-ui/ui"
import { ArrowRight } from "lucide-react"

export function CTASection() {
    return (
        <section className="py-32 md:py-40 lg:py-48 min-h-[600px] relative overflow-hidden bg-surface flex items-center">
            {/* Background gradient */}
            <div className="absolute inset-0 opacity-20"
                style={{ background: 'radial-gradient(ellipse at center, var(--color-brand) 0%, transparent 70%)' }} />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center w-full">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance">
                    Ready to build something{" "}
                    <span className="bg-linear-to-r from-brand via-brand-hover to-brand bg-clip-text text-transparent">
                        magical
                    </span>
                    ?
                </h2>
                <p className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto mb-10">
                    Join thousands of developers who are building beautiful products with Unicorn UI.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="h-12 px-8 text-base bg-brand hover:bg-brand-hover text-white shadow-lg shadow-brand/30">
                        Get Started for Free
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-12 px-8 text-base border-border bg-transparent">
                        View Documentation
                    </Button>
                </div>
            </div>
        </section>
    )
}
