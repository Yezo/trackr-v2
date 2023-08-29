"use client"

import { ExternalLinks } from "@/components/navbar/external-links"
import { LinkButton } from "@/components/ui/link-button"
import { dashboardItems, productItems } from "@/components/navbar/nav-data"
import { Separator } from "@/components/ui/separator"
import { Logo } from "@/components/typography/Logo"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { signOut, useSession } from "next-auth/react"
import { Button } from "@/components/ui/button"

export const MobileNav = () => {
  const [openSheet, setOpenSheet] = useState(false)
  const { status } = useSession()

  return (
    <div className="container flex h-16 items-center justify-between border-b border-gray-200 dark:border-gray-800 sm:hidden">
      <Sheet open={openSheet} onOpenChange={setOpenSheet}>
        <SheetTrigger
          className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          onClick={() => setOpenSheet(true)}
        >
          <HamburgerMenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="min-h-full">
          <SheetHeader className="min-h-full">
            <SheetTitle>
              <Link
                href="/"
                className="mb-8 flex items-center gap-2 text-lg font-medium tracking-tight transition-colors delay-100"
                onClick={() => setOpenSheet(false)}
              >
                <Image
                  src="/dark-logo.webp"
                  width={100}
                  height={100}
                  alt="Playground"
                  className="hidden h-4 w-4 rounded-full ring-2 ring-black dark:block"
                  priority
                />
                <Image
                  src="/light-logo.webp"
                  width={100}
                  height={100}
                  alt="Playground"
                  className="block h-4 w-4 rounded-full ring-2 ring-black dark:hidden "
                  priority
                />
                Trackr.
              </Link>
            </SheetTitle>
            <SheetDescription className="flex flex-1 flex-col justify-between">
              <div>
                {status === "unauthenticated" && (
                  <div className="mb-8 space-y-4">
                    <Link
                      href="/login"
                      onClick={() => setOpenSheet(false)}
                      className="inline-flex h-9 w-full items-center justify-center rounded border border-input bg-background px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/signup"
                      onClick={() => setOpenSheet(false)}
                      className="inline-flex h-9 w-full items-center justify-center rounded border border-input bg-background bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-blue-600/90 hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Get Started
                    </Link>
                  </div>
                )}
                <nav className="flex flex-col items-start gap-2 text-sm font-medium">
                  {productItems.map(({ title, href, icon, description, comingSoon }) => (
                    <>
                      {!comingSoon ? (
                        <>
                          <Link
                            className={cn(
                              `block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`
                            )}
                            href={href}
                            key="title"
                          >
                            <div className="flex items-center gap-2 text-sm font-normal leading-none">
                              <div className="inline-flex rounded-full bg-blue-600 p-1.5 text-white shadow-sm">
                                {icon}
                              </div>
                              {title}
                            </div>
                          </Link>
                          <Separator />
                        </>
                      ) : (
                        <>
                          <div
                            className={cn(
                              `block cursor-default select-none rounded-md p-2 leading-none no-underline outline-none grayscale transition-colors
 `
                            )}
                            key="title"
                          >
                            <div className="flex items-center gap-2 text-sm font-normal leading-none">
                              <span className="inline-flex rounded-full bg-blue-600 p-1.5 text-white shadow-sm">
                                {icon}
                              </span>
                              <span>{title}</span>
                              <div className="rounded-full bg-blue-600 px-2 py-0.5 text-[0.6rem] tracking-wide text-white dark:text-black">
                                COMING SOON
                              </div>
                            </div>
                          </div>
                          <Separator />
                        </>
                      )}
                    </>
                  ))}
                  {status === "authenticated" &&
                    dashboardItems.map(({ title, href, icon, description, comingSoon }) => (
                      <>
                        {!comingSoon ? (
                          <>
                            <Link
                              className={cn(
                                `block select-none rounded-md p-2 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`
                              )}
                              href={href}
                              key="title"
                            >
                              <div className="flex items-center gap-2 text-sm font-normal leading-none">
                                <div className="inline-flex rounded-full bg-blue-600 p-1.5 text-white shadow-sm">
                                  {icon}
                                </div>
                                {title}
                              </div>
                            </Link>
                            <Separator />
                          </>
                        ) : (
                          <>
                            <div
                              className={cn(
                                `block cursor-default select-none rounded-md p-2 leading-none no-underline outline-none grayscale transition-colors
 `
                              )}
                              key="title"
                            >
                              <div className="flex items-center gap-2 text-sm font-normal leading-none">
                                <span className="inline-flex rounded-full bg-blue-600 p-1.5 text-white shadow-sm">
                                  {icon}
                                </span>
                                <span>{title}</span>
                                <div className="rounded-full bg-blue-600 px-2 py-0.5 text-[0.6rem] tracking-wide text-white dark:text-black">
                                  COMING SOON
                                </div>
                              </div>
                            </div>
                            <Separator />
                          </>
                        )}
                      </>
                    ))}
                </nav>
              </div>
              {status === "authenticated" && (
                <div className="mb-8 w-full space-y-4">
                  <Button className="w-full rounded" variant={"outline"} onClick={() => signOut()}>
                    Log Out
                  </Button>
                </div>
              )}
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Logo />

      <ExternalLinks />
    </div>
  )
}
