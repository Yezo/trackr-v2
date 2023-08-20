import Link from "next/link"
import Image from "next/image"

export const Logo = () => {
  return (
    <Link
      href="/"
      className="hidden items-center gap-2 text-lg font-medium tracking-tight transition-colors delay-100 sm:flex"
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
  )
}
