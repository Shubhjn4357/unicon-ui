import { Card, Avatar, Marquee } from "@unicorn-ui/ui"
import { Quote } from "lucide-react"

const testimonials = [
    {
        quote:
            "Unicorn UI has completely transformed how we build our products. The components are beautiful and the DX is unmatched.",
        author: "Sarah Chen",
        role: "Lead Developer at TechCorp",
        avatar: "SC",
    },
    {
        quote:
            "Finally, a component library that doesn't compromise on design or accessibility. Our team productivity has increased by 40%.",
        author: "Marcus Johnson",
        role: "CTO at StartupXYZ",
        avatar: "MJ",
    },
    {
        quote:
            "The attention to detail in every component is remarkable. It's clear this was built by developers who truly understand UI/UX.",
        author: "Emily Rodriguez",
        role: "Design Engineer at DesignStudio",
        avatar: "ER",
    },
    {
        quote: "I've tried every UI kit out there, and this one is by far the most polished and easiest to customize.",
        author: "Alex Kim",
        role: "Frontend Architect",
        avatar: "AK",
    },
    {
        quote: "The animations are buttery smooth and the performance is incredible. Highly recommended!",
        author: "Jessica Li",
        role: "Product Designer",
        avatar: "JL",
    },
    {
        quote: "Documentation is top-notch. I was able to build a landing page in minutes.",
        author: "David Smith",
        role: "Indie Hacker",
        avatar: "DS",
    }
]

export function TestimonialsSection() {
    return (
        <section className="py-24 bg-surface relative overflow-hidden">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-16 text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Loved by developers worldwide</h2>
                <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                    Join thousands of developers building better products with Unicorn UI
                </p>
            </div>

            <Marquee pauseOnHover className="[--duration:20s]">
                {testimonials.map((testimonial) => (
                    <Card key={testimonial.author} className="bg-surface border-border p-6 mx-4 w-[350px] shrink-0">
                        <Quote className="h-8 w-8 text-brand/30 mb-4" />
                        <p className="text-foreground mb-6 leading-relaxed line-clamp-4 min-h-[5rem]">"{testimonial.quote}"</p>
                        <div className="flex items-center gap-3">
                            <Avatar >
                                <div className="h-full w-full bg-brand/10 flex items-center justify-center text-brand font-semibold text-sm">
                                    {testimonial.avatar}
                                </div>
                            </Avatar>
                            <div>
                                <div className="font-medium text-foreground">{testimonial.author}</div>
                                <div className="text-sm text-foreground-secondary">{testimonial.role}</div>
                            </div>
                        </div>
                    </Card>
                ))}
            </Marquee>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-surface to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-surface to-transparent" />
        </section>
    )
}
