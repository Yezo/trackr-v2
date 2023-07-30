"use client"
import { ExternalLinks } from "@/components/navbar/external-links"
import { Logo } from "@/components/typography/Logo"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { useState } from "react"

export const MobileNav = () => {
  const [openSheet, setOpenSheet] = useState(false)
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
    <div className="sm:hidden h-16 flex items-center container justify-between border-b dark:border-gray-800 border-gray-200">
      <div className="flex items-center gap-2">
        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
          <SheetTrigger
            className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
            onClick={() => setOpenSheet(true)}
          >
            <HamburgerMenuIcon />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>
                <Link
                  href="/"
                  className="text-lg font-bold tracking-tight transition-colors delay-100 flex items-center gap-2 "
                  onClick={() => setOpenSheet(false)}
                >
                  <Image
                    src="/dark-logo.webp"
                    width={100}
                    height={100}
                    alt="Playground"
                    className="h-4 w-4 rounded-full ring-2 ring-black dark:block hidden"
                    priority
                  />
                  <Image
                    src="/light-logo.webp"
                    width={100}
                    height={100}
                    alt="Playground"
                    className="h-4 w-4 rounded-full ring-2 ring-black dark:hidden block "
                    priority
                  />
                  Trackr.
                </Link>
              </SheetTitle>
              <SheetDescription>
                <nav className="flex flex-col items-start gap-4 text-sm font-medium">
                  {Object.entries(navItems).map(([path, { title }]) => {
                    return (
                      <Link
                        href={path}
                        className={cn(
                          "transition-colors hover:text-foreground/80 font-light",
                          pathname === path ? "text-foreground" : "text-foreground/60"
                        )}
                        key={path}
                        onClick={() => setOpenSheet(false)}
                      >
                        {title}
                      </Link>
                    )
                  })}
                </nav>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>

      <Logo />

      <ExternalLinks />
    </div>
  )
}
