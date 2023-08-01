"use client"

import { usePathname } from "next/navigation"
import {
  ChevronDownIcon,
  GitHubLogoIcon,
  ExitIcon,
  PersonIcon,
  GearIcon,
  HomeIcon,
  HeartIcon,
  MoonIcon,
  SunIcon,
  FileIcon,
  PieChartIcon,
  BackpackIcon,
  CommitIcon,
} from "@radix-ui/react-icons"

import SidebarLink from "@/components/navbar/sidebar/sidebar-link"
import { Session } from "next-auth"
import Link from "next/link"

type Props = {
  session: Session | null
}

const servicesNavItems = {
  "/": {
    title: "Home",
    icon: <HomeIcon />,
  },
  "/dashboard": {
    title: "Dashboard",
    icon: <BackpackIcon />,
  },
  "/metrics": {
    title: "Metrics",
    icon: <PieChartIcon />,
  },
  "/timeline": {
    title: "Timeline",
    icon: <CommitIcon />,
  },
  "/notes": {
    title: "Notes",
    icon: <FileIcon />,
  },
}

const accountNavItems = {
  "/profile": {
    title: "Profile",
    icon: <PersonIcon />,
  },
  "/settings": {
    title: "Settings",
    icon: <GearIcon />,
  },
}

export default function Sidebar({ session }: Props) {
  let pathname = usePathname() || "/"
  const userName = session?.user?.name
  const userImage = session?.user?.image
  return (
    <aside className="min-h-[calc(100vh-64px)] max-w-[250px] space-y-4 divide-y divide-gray-200 border-r py-8 dark:divide-gray-700 flex flex-col justify-between">
      <div className="space-y-4">
        <Link
          href="/user/profile"
          className="flex gap-2 items-center  font-semibold tracking-tight capitalize text-sm px-7"
        >
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
          {userName}
        </Link>
        <nav className="px-3 py-2">
          <h2 className="my-2 px-4 text-lg tracking-tight">Services</h2>

          <div className="space-y-3">
            {Object.entries(servicesNavItems).map(([path, { title, icon }]) => {
              return (
                <SidebarLink
                  path={path}
                  pathname={pathname}
                  title={title}
                  icon={icon}
                  key={title}
                />
              )
            })}
          </div>
        </nav>
      </div>

      <nav className="px-3 py-2">
        <h2 className="my-2 px-4 text-lg tracking-tight  ">Account</h2>

        <div className="space-y-3">
          {Object.entries(accountNavItems).map(([path, { title, icon }]) => {
            return (
              <SidebarLink path={path} pathname={pathname} title={title} icon={icon} key={title} />
            )
          })}
        </div>
      </nav>
    </aside>
  )
}
