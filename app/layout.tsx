import "./globals.css"
import type { Metadata } from "next"
import { Inter, Spectral } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import MobileNav from "@/components/navbar/mobile-nav"
import MainNav from "@/components/navbar/main-nav"

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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${spectral.variable} ${inter.variable}  `}>
      <body className="min-h-screen bg-background antialiased font-inter">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {/* Dynamically render the mobile or main navigation bars depending on viewport size */}
          <MobileNav />
          <MainNav />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
