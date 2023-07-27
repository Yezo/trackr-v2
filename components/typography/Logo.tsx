import Link from "next/link"
import Image from "next/image"

export default function Logo() {
  return (
    <Link
      href="/"
      className="text-lg font-bold tracking-tight transition-colors delay-100 sm:flex items-center gap-2 hidden"
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
  )
}
