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
            <DropdownMenuTrigger className="flex gap-2 items-center font-semibold tracking-tight capitalize text-sm">
              <div className="rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-user-circle-2"
                >
                  <path d="M18 20a6 6 0 0 0-12 0" />
                  <circle cx="12" cy="10" r="4" />
                  <circle cx="12" cy="12" r="10" />
                </svg>
              </div>
              {/* {data?.user?.name}  */}
              <ChevronDownIcon />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[165px]" alignOffset={0}>
              <DropdownMenuLabel className="flex gap-2 items-center  font-semibold tracking-tight capitalize text-sm">
                <Link href="/user/profile" className="rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user-circle-2"
                  >
                    <path d="M18 20a6 6 0 0 0-12 0" />
                    <circle cx="12" cy="10" r="4" />
                    <circle cx="12" cy="12" r="10" />
                  </svg>
                </Link>
                {data?.user?.name}
              </DropdownMenuLabel>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <PersonIcon className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <BackpackIcon className="mr-2 h-4 w-4" />
                  <span>Overview</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <PieChartIcon className="mr-2 h-4 w-4" />
                  <span>Metrics</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <CommitIcon className="mr-2 h-4 w-4" />
                  <span>Timeline</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                  <FileIcon className="mr-2 h-4 w-4" />
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
                  <PersonIcon className="mr-2 h-4 w-4" />
                  <span>GitHub</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="https://kvo.vercel.app/" target="_blank" className="flex items-center">
                  <HeartIcon className="mr-2 h-4 w-4" />
                  <span>Developer</span>
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              <DropdownMenuGroup>
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger>
                    {theme === "light" && <SunIcon className="mr-2 h-4 w-4" />}
                    {theme === "dark" && <MoonIcon className="mr-2 h-4 w-4" />}
                    <span>Theme</span>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      <DropdownMenuItem onClick={() => setTheme("light")}>
                        <SunIcon className="mr-2 h-4 w-4" />
                        <span>Light</span>
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => setTheme("dark")}>
                        <MoonIcon className="mr-2 h-4 w-4" />
                        <span>Dark</span>
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>

                <DropdownMenuItem>
                  <GearIcon className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>

              <DropdownMenuSeparator />

              <DropdownMenuItem onClick={() => signOut()}>
                <ExitIcon className="mr-2 h-4 w-4" /> <span>Log out</span>
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
