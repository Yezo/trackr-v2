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
  AvatarIcon,
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

  return (
    <aside className="hidden min-h-[calc(100vh-64px)] max-w-[250px] flex-col justify-between space-y-4 divide-y divide-gray-200 border-r py-8 dark:divide-gray-700 sm:flex ">
      <div className="space-y-4">
        <Link
          href="/user/profile"
          className="flex items-center gap-2  px-7 text-sm font-semibold capitalize tracking-tight"
        >
          <AvatarIcon className="h-8 w-8" />
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
