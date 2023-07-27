import { ModeToggle } from "@/components/theme-toggle"
import Logo from "@/components/typography/Logo"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { HamburgerMenuIcon, GitHubLogoIcon, PlusIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function MobileNav() {
  return (
    <div className="md:hidden h-14 flex items-center container justify-between border-b dark:border-gray-800 border-gray-200">
      <div className="flex items-center gap-2">
        <Sheet>
          <SheetTrigger>
            <Button size="icon" variant="outline">
              <HamburgerMenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle>Are you sure absolutely sure?</SheetTitle>
              <SheetDescription>
                This action cannot be undone. This will permanently delete your account and remove
                your data from our servers.
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
        <Button size="icon" variant="outline">
          <PlusIcon className="h-[1.2rem] w-[1.2rem]" />
        </Button>
      </div>

      <Logo>Trackr.</Logo>

      <nav className="flex items-center gap-2">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
        >
          <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
        </Link>

        <ModeToggle />
      </nav>
    </div>
  )
}
