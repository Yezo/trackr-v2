"use client"

import { ModeToggle } from "@/components/theme-toggle"
import { LinkButton } from "@/components/ui/link-button"
import {
  ChevronDownIcon,
  GitHubLogoIcon,
  ExitIcon,
  PersonIcon,
  GearIcon,
  HeartIcon,
  MoonIcon,
  SunIcon,
  FileIcon,
  PieChartIcon,
  BackpackIcon,
  CommitIcon,
  AvatarIcon,
} from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { useTheme } from "next-themes"
import { useSession, signOut } from "next-auth/react"
import Link from "next/link"

export const ExternalLinks = () => {
  //States
  const { data, status } = useSession()
  const { theme, setTheme } = useTheme()

  if (status === "loading") {
    return <></>
  }

  return (
    <nav className="flex items-center gap-2">
      {status === "authenticated" && (
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 text-sm font-semibold capitalize tracking-tight">
              <div className="rounded-full ">
                <AvatarIcon className="h-6 w-6" />
              </div>
              {/* {data?.user?.name}  */}
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[165px]" alignOffset={0}>
              <DropdownMenuLabel className="flex items-center gap-2  text-sm font-semibold capitalize tracking-tight">
                <Link href="/user/profile" className="rounded-full">
                  <AvatarIcon className="h-8 w-8" />
                </Link>
                {data?.user?.name}
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link href="/profile" className="flex min-w-full items-center">
                    <PersonIcon className="mr-2 " />
                    <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link href="/dashboard" className="flex min-w-full items-center">
                    <BackpackIcon className="mr-2" />
                    <span>Dashboard</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <PieChartIcon className="mr-2 " />
                  <span>Metrics</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <CommitIcon className="mr-2 " />
                  <span>Timeline</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <FileIcon className="mr-2 " />
                  <span>Notes</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem>
                <Link
                  href="https://github.com/Yezo/trackr-v2"
                  target="_blank"
                  className="flex items-center"
                >
                  <PersonIcon className="mr-2 " />
                  <span>GitHub</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="https://kvo.vercel.app/" target="_blank" className="flex items-center">
                  <HeartIcon className="mr-2 " />
                  <span>Developer</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    {theme === "light" && <SunIcon className="mr-2 " />}
                    {theme === "dark" && <MoonIcon className="mr-2 " />}
                    <span>Theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        <SunIcon className="mr-2 " />
                        <span>Light</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        <MoonIcon className="mr-2 " />
                        <span>Dark</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem>
                  <GearIcon className="mr-2 " />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => signOut()}>
                <ExitIcon className="mr-2 " /> <span>Log out</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
      {status === "unauthenticated" && (
        <>
          <LinkButton variant="outline" size="icon" href="/" className="hidden md:inline-flex">
            <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
          </LinkButton>

          <ModeToggle />
          <LinkButton variant="outline" href="/login">
            Log In
          </LinkButton>

          <LinkButton href="/signup">Sign Up</LinkButton>
        </>
      )}
    </nav>
  )
}
