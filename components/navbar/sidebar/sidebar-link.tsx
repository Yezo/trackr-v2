import Link from "next/link"

type Props = {
  path: string
  pathname: string
  title: string
  icon: JSX.Element
}

export const SidebarLink = ({ path, pathname, title, icon }: Props) => {
  return (
    <Link
      className={`inline-flex h-10 w-full items-center justify-start gap-2 rounded-md px-4 py-2 text-sm font-light ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 
    ${
      path === pathname
        ? "bg-accent font-medium text-accent-foreground"
        : "hover:bg-accent hover:text-accent-foreground"
    }
    `}
      href={path}
    >
      {icon}
      {title}
    </Link>
  )
}
