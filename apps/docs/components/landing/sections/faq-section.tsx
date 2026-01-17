import { Accordion } from "@unicorn-ui/ui"

const faqs = [
    {
        id: "faq-1",
        title: "Is Unicorn UI free to use?",
        content:
            "Yes! Unicorn UI offers a free tier with 50+ core components under the MIT license. Our Pro and Enterprise plans offer additional premium components and features.",
    },
    {
        id: "faq-2",
        title: "Can I use Unicorn UI in commercial projects?",
        content:
            "All our components can be used in both personal and commercial projects. The free tier uses MIT license, and Pro/Enterprise licenses include commercial usage rights.",
    },
    {
        id: "faq-3",
        title: "Do you offer support?",
        content:
            "We offer community support through GitHub and Discord for free users. Pro and Enterprise customers get priority support with faster response times and dedicated channels.",
    },
    {
        id: "faq-4",
        title: "How do I customize the components?",
        content:
            "Unicorn UI uses CSS variables for theming, making it easy to customize colors, spacing, and other design tokens. You can also extend or override component styles using Tailwind CSS.",
    },
    {
        id: "faq-5",
        title: "Is Unicorn UI compatible with my framework?",
        content:
            "Unicorn UI works with any React-based framework including Next.js, Vite, Remix, Gatsby, and Create React App. We provide framework-specific guides in our documentation.",
    },
    {
        id: "faq-6",
        title: "Do you provide Figma files?",
        content:
            "Yes! Pro and Enterprise customers get access to our complete Figma design system, including all components, design tokens, and example layouts.",
    },
]

export function FAQSection() {
    return (
        <section className="py-24 bg-surface-elevated/30">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently asked questions</h2>
                    <p className="text-lg text-foreground-secondary max-w-2xl mx-auto">
                        Everything you need to know about Unicorn UI
                    </p>
                </div>

                <div className="max-w-3xl mx-auto">
                    <Accordion items={faqs} />
                </div>
            </div>
        </section>
    )
}
