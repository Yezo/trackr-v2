import { Logo } from "@/components/typography/Logo"
import { Paragraph } from "@/components/typography/paragraph"
import { Separator } from "@/components/ui/separator"
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer>
      <Separator />
      <div className="container mx-auto flex flex-col px-4 py-16 md:flex-row md:px-32">
        <div className="md:w-[10rem] lg:w-[25rem]">
          <div className="flex min-h-full items-center justify-between md:flex-col md:items-start">
            <div className="space-y-2">
              <Link href="/" className="flex items-center gap-2 text-lg font-medium tracking-tight">
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
              <Paragraph size="sm">
                Developed by{" "}
                <Link
                  className="font-bold text-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400/90"
                  href="https://kvo.vercel.app/"
                  target="_blank"
                >
                  KV.
                </Link>
              </Paragraph>
            </div>
            <div className="flex gap-4 text-muted-foreground">
              <Link
                href="https://github.com/Yezo/trackr-v2"
                target="_blank"
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400/90"
              >
                <GitHubLogoIcon className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/kvocodes/"
                target="_blank"
                className="transition-colors hover:text-blue-600 dark:hover:text-blue-400/90"
              >
                <LinkedInLogoIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20 min-h-full flex-1 md:mt-0">
          <div className="grid grid-cols-2 gap-12 md:grid-cols-4 md:gap-24">
            <NavList title="Product" data={ProductItems} />
            <NavList title="Resources" data={ResourceItems} />
            <NavList title="Company" data={CompanyItems} />
            <NavList title="Legal" data={LegalItems} />
          </div>
        </div>
      </div>
    </footer>
  )
}

type Items = {
  title: string
  href: string
}

const ProductItems: Items[] = [
  { title: "Features", href: "/" },
  { title: "Pricing", href: "/" },
  { title: "Getting Started", href: "/" },
  { title: "Merchandise", href: "/" },
]

const ResourceItems: Items[] = [
  { title: "Community", href: "/" },
  { title: "Contact us", href: "/" },
  { title: "Changelog", href: "/" },
  { title: "Support the site", href: "/" },
]

const CompanyItems: Items[] = [
  { title: "Blog", href: "/" },
  { title: "Careers", href: "/" },
  { title: "Our mission", href: "/" },
  { title: "Brand", href: "/" },
]

const LegalItems: Items[] = [
  { title: "Privacy Policy", href: "/" },
  { title: "Terms of Service", href: "/" },
]

const NavList = ({ title, data }: { title: string; data: Items[] }) => {
  return (
    <ul className="space-y-4 text-sm tracking-tight">
      <h3 className="text-foreground">{title}</h3>

      {data.map(({ title, href }) => (
        <li className="text-muted-foreground transition-colors hover:text-blue-600 dark:hover:text-blue-400/90">
          <Link href={href}>{title}</Link>
        </li>
      ))}
    </ul>
  )
}
