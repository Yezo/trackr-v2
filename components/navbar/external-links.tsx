import { ModeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function ExternalLinks() {
  return (
    <nav className="flex items-center gap-2">
      <Link
        href="/"
        className="hidden sm:inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 w-9"
      >
        <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem]" />
      </Link>

      <ModeToggle />

      <Button variant="secondary">Log In</Button>
      <Button>Sign Up</Button>
    </nav>
  )
}
