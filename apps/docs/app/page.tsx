import { Navbar } from "@/components/landing/sections/navbar"
import { HeroSectionNew } from "@/components/landing/sections/hero-section-new"
import { LogoCloud } from "@/components/landing/sections/logo-cloud"
import { StatsSection } from "@/components/landing/sections/stats-section"
import { FeaturesSection } from "@/components/landing/sections/features-section"
import { ComponentShowcaseNew } from "@/components/landing/sections/component-showcase-new"
import { CodePreview as CodePreviewSection } from "@/components/landing/sections/code-preview"
import { TestimonialsSection } from "@/components/landing/sections/testimonials-section"
import { FAQSection } from "@/components/landing/sections/faq-section"
import { CTASection } from "@/components/landing/sections/cta-section"
import { FooterSection } from "@/components/landing/sections/footer"
import { Particles } from "@unicorn-ui/ui"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-surface text-foreground font-sans">
      <Navbar />

      <main className="flex-1 flex flex-col">
        <HeroSectionNew />
        <LogoCloud />
        <StatsSection />
        <FeaturesSection />
        <ComponentShowcaseNew />
        <CodePreviewSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />

        {/* Global optional effects */}
        <div className="fixed inset-0 pointer-events-none z-[-1]">
          {/* We can add more global effects here if needed, but per-section effects are often better for performance */}
        </div>
      </main>

      <FooterSection />
    </div>
  )
}
