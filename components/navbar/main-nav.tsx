"use client"

import { ExternalLinks } from "@/components/navbar/external-links"
import { Logo } from "@/components/typography/Logo"
import { cn } from "@/lib/utils"
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react"
import {
  BackpackIcon,
  CommitIcon,
  HomeIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  PieChartIcon,
  QuestionMarkIcon,
  RocketIcon,
  SketchLogoIcon,
} from "@radix-ui/react-icons"

import { useSession } from "next-auth/react"

const productItems = [
  {
    title: "Home",
    href: "/",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: (
      <span>
        <HomeIcon />
      </span>
    ),
  },
  {
    title: "Discover",
    href: "/",
    description: "For sighted users to preview content available behind a link.",
    icon: (
      <span>
        <ImageIcon />
      </span>
    ),
  },
  {
    title: "Our nission",
    href: "/",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    icon: (
      <span>
        <RocketIcon />
      </span>
    ),
  },
]

const dashboardItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
    icon: (
      <span>
        <BackpackIcon />
      </span>
    ),
  },
  {
    title: "User Profile",
    href: "/profile",
    description: "For sighted users to preview content available behind a link.",
    icon: (
      <span>
        <PersonIcon />
      </span>
    ),
  },
  {
    title: "Metrics",
    href: "/dashboard",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    icon: (
      <span>
        <PieChartIcon />
      </span>
    ),
    comingSoon: true,
  },
  {
    title: "History",
    href: "/dashboard",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quisquam illum id adipisci quis temporibus.",
    icon: (
      <span>
        <CommitIcon />
      </span>
    ),
    comingSoon: true,
  },
  {
    title: "Find Jobs",
    href: "/dashboard",
    description:
      "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    icon: (
      <span>
        <MagnifyingGlassIcon />
      </span>
    ),
    comingSoon: true,
  },
  {
    title: "Random Feature",
    href: "/dashboard",
    description:
      "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    icon: (
      <span>
        <QuestionMarkIcon />
      </span>
    ),
    comingSoon: true,
  },
]

export const MainNav = () => {
  const { status } = useSession()

  return (
    <div className="hidden h-16 border-b sm:block ">
      <div className="container min-h-full items-center justify-between sm:flex">
        <div className="flex items-center gap-6">
          <Logo />

          <nav className="flex items-center space-x-6 text-sm font-medium">
            <NavigationMenu className="font-normal">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-normal tracking-normal">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="/"
                          >
                            <SketchLogoIcon className="h-10 w-10" />
                            <div className="mb-2 mt-4 text-lg font-medium">Trackr.</div>
                            <p className="text-xs leading-tight text-muted-foreground">
                              No more spreadsheets, manage job applications with Trackr instead.
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      {productItems.map(({ title, href, icon, description }) => (
                        <LinkItem
                          title={title}
                          href={href}
                          icon={icon}
                          description={description}
                          key={title}
                        ></LinkItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                {status === "authenticated" && (
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="text-sm font-normal tracking-normal">
                      Dashboard
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                        {dashboardItems.map(({ title, href, icon, description, comingSoon }) => (
                          <LinkItem
                            title={title}
                            href={href}
                            icon={icon}
                            description={description}
                            key={title}
                            comingSoon={comingSoon}
                          ></LinkItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                )}

                <NavigationMenuItem>
                  <Link href="/docs" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={`${navigationMenuTriggerStyle()} text-sm font-normal tracking-normal `}
                    >
                      Company
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>

        <ExternalLinks />
      </div>
    </div>
  )
}

const LinkItem = ({
  title,
  description,
  href,
  icon,
  comingSoon,
}: {
  title: string
  description: string
  href: string
  icon: React.JSX.Element
  comingSoon?: boolean
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        {!comingSoon ? (
          <Link
            className={cn(
              `block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground`
            )}
            href={href}
          >
            <div className="flex items-center gap-2 text-sm font-normal leading-none">
              <div className="inline-flex rounded-full bg-blue-600 p-1.5 text-white shadow-sm">
                {icon}
              </div>
              {title}
            </div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
          </Link>
        ) : (
          <div
            className={cn(
              `block cursor-default select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none grayscale transition-colors
         `
            )}
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
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
          </div>
        )}
      </NavigationMenuLink>
    </li>
  )
}
