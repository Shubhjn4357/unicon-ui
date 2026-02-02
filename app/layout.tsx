import "../dist/styles.css"
import "./globals.css"
import { LayoutContent } from "@/app/components/layout/layout-content"
import { DesignStyleProvider, ThemeProvider, SmoothScroll } from "@unicorn-ui/ui"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Unicorn UI - Modern React Component Library",
  description:
    "A production-ready React component library with 131 components featuring Claymorphism, Liquid Glass, Glassmorphism, Skeuomorphism, and Minimalism",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans antialiased">
        <ThemeProvider defaultTheme="system" storageKey="unicorn-ui-theme">
          <DesignStyleProvider>
            <SmoothScroll>
              <LayoutContent>{children}</LayoutContent>
            </SmoothScroll>
          </DesignStyleProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
