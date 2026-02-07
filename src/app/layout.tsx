import "@/styles/design-system.css"
import "./globals.css"
import { LayoutContent } from "@/components/site/layout/layout-content"
import { APP_CONSTANTS } from "@/constants/constants"
import { DesignStyleProvider, SmoothScroll, ThemeProvider } from "@unicorn-ui/ui"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: `${APP_CONSTANTS.name} - Modern React Component Library`,
  description: APP_CONSTANTS.description,
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
