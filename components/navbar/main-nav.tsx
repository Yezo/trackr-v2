"use client"

import { ExternalLinks } from "@/components/navbar/external-links"
import { Logo } from "@/components/typography/Logo"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"

export const MainNav = () => {
  const pathname = usePathname()

  const navItems = {
    "/services": {
      title: "Services",
    },
    "/history": {
      title: "History",
    },
    "/about": {
      title: "About Us",
    },
  }

  return (
    <div className="hidden sm:block h-16 border-b dark:border-gray-800 border-gray-200">
      <div className="container sm:flex items-center justify-between min-h-full">
        <div className="flex gap-6 items-center">
          <Logo />

          <nav className="flex items-center space-x-6 text-sm font-medium">
            {Object.entries(navItems).map(([path, { title }]) => {
              return (
                <Link
                  href={path}
                  className={cn(
                    "transition-colors hover:text-foreground/80 font-light",
                    pathname === path ? "text-foreground" : "text-foreground/60"
                  )}
                  key={path}
                >
                  {title}
                </Link>
              )
            })}
          </nav>
        </div>

        <ExternalLinks />
        {/* <AuthLinks /> */}
      </div>
    </div>
  )
}
