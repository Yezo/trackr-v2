import Link from "next/link"

type Props = {
  children: React.ReactNode
}

export default function Logo({ children }: Props) {
  return (
    <Link href="/" className="text-lg font-semibold tracking-tighter transition-colors delay-100">
      {children}
    </Link>
  )
}
