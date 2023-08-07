"use client"

import { ExternalLinks } from "@/components/navbar/external-links"
import { Logo } from "@/components/typography/Logo"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import React from "react"
import {
  AvatarIcon,
  BackpackIcon,
  CommitIcon,
  HomeIcon,
  ImageIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  PieChartIcon,
  QuestionMarkCircledIcon,
  QuestionMarkIcon,
  RocketIcon,
  SketchLogoIcon,
} from "@radix-ui/react-icons"
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
  const testItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "User Profile",
      href: "/profile",
      description: "For sighted users to preview content available behind a link.",
    },
    {
      title: "Metrics",
      href: "/dashboard",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "History",
      href: "/dashboard",
      description:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi quisquam illum id adipisci quis temporibus.",
    },
    {
      title: "Find Jobs",
      href: "/dashboard",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Some Feature I Haven't Thought Of",
      href: "/dashboard",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]

  return (
    <div className="hidden h-16 border-b sm:block ">
      <div className="container min-h-full items-center justify-between sm:flex">
        <div className="flex items-center gap-6">
          <Logo />

          <nav className="flex items-center space-x-6 text-sm font-medium">
            {/* {Object.entries(navItems).map(([path, { title }]) => {
              return (
                <Link
                  href={path}
                  className={cn(
                    "font-light transition-colors hover:text-foreground/80",
                    pathname === path ? "text-foreground" : "text-foreground/60"
                  )}
                  key={path}
                >
                  {title}
                </Link>
              )
            })} */}
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
                      <TestLinkItem title="Home" description="Just click the logo" href="/">
                        <HomeIcon />
                      </TestLinkItem>

                      <TestLinkItem
                        title="Discover"
                        description="Lorem ipsum dolor sit amet consectetur."
                        href="/"
                      >
                        <ImageIcon />
                      </TestLinkItem>

                      <TestLinkItem
                        title="Our Mission"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                        href="/"
                      >
                        <RocketIcon />
                      </TestLinkItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="text-sm font-normal tracking-normal">
                    Dashboard
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                      {/* {testItems.map((component) => (
                        <ListItem
                          key={component.title}
                          title={component.title}
                          href={component.href}
                        >
                          {component.description}
                        </ListItem>
                      ))} */}
                      <TestLinkItem
                        title="Dashboard"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                        href="/dashboard"
                      >
                        <BackpackIcon />
                      </TestLinkItem>

                      <TestLinkItem
                        title="User Profile"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                        href="/profile"
                      >
                        <PersonIcon />
                      </TestLinkItem>

                      <TestLinkItem
                        title="Metrics"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                        href="/dashboard"
                      >
                        <PieChartIcon />
                      </TestLinkItem>

                      <TestLinkItem
                        title="History"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                        href="/dashboard"
                      >
                        <CommitIcon />
                      </TestLinkItem>

                      <TestLinkItem
                        title="Find Jobs"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                        href="/dashboard"
                      >
                        <MagnifyingGlassIcon />
                      </TestLinkItem>

                      <TestLinkItem
                        title="Random Feature"
                        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit."
                        href="/dashboard"
                      >
                        <QuestionMarkIcon />
                      </TestLinkItem>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

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
        {/* <AuthLinks /> */}
      </div>
    </div>
  )
}

const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(
  ({ className, title, children, ...props }, ref) => {
    return (
      <li>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className
            )}
            {...props}
          >
            <div className="text-sm font-normal leading-none">{title}</div>
            <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{children}</p>
          </a>
        </NavigationMenuLink>
      </li>
    )
  }
)
ListItem.displayName = "ListItem"

const TestLinkItem = ({
  title,
  children,
  description,
  href,
}: {
  title: string
  children: React.ReactNode
  description: string
  href: string
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          )}
          href={href}
        >
          <div className="flex items-center gap-2 text-sm font-normal leading-none">
            <div className="inline-flex rounded-full bg-blue-600 p-1.5 text-white shadow-sm">
              {children}
            </div>
            {title}
          </div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
