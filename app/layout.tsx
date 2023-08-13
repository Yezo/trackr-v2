import "./globals.css"
import type { Metadata } from "next"
import { Inter, Spectral, Rubik } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

import { MobileNav } from "@/components/navbar/mobile-nav"
import { MainNav } from "@/components/navbar/main-nav"
import { Toaster } from "@/components/ui/toaster"
import { AuthProvider } from "@/components/auth-provider"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Trackr.",
  description: "A modern web application for managing your job applications",
}

const spectral = Spectral({
  variable: "--font-spectral",
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
})

const inter = Inter({
  variable: "--font-inter",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  display: "swap",
  subsets: ["latin"],
})

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["300", "400", "500", "600"],
  display: "swap",
  subsets: ["latin"],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <AuthProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${spectral.variable} ${inter.variable} ${rubik.variable} `}
      >
        <body className="min-h-screen bg-background font-rubik antialiased">
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <MobileNav />
            <MainNav />
            {children}
            <Analytics />
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </AuthProvider>
  )
}
