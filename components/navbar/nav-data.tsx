import {
  HomeIcon,
  ImageIcon,
  RocketIcon,
  BackpackIcon,
  PieChartIcon,
  CommitIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons"

export const productItems = [
  {
    title: "Home",
    href: "/",
    description: "The starting point of where your incredible journey with Trackr begins",
    icon: (
      <>
        <HomeIcon />
      </>
    ),
  },
  {
    title: "Blog",
    href: "/",
    description: " Dive into a collection of insightful articles, updates, and perspectives",
    icon: (
      <>
        <ImageIcon />
      </>
    ),
    comingSoon: true,
  },
  {
    title: "Our mission",
    href: "/",
    description: "Unveiling the purpose that drives us, outlining our core values and goals",
    icon: (
      <>
        <RocketIcon />
      </>
    ),
    comingSoon: true,
  },
]

export const dashboardItems = [
  {
    title: "Dashboard",
    href: "/dashboard",
    description:
      "Your central hub for accessing key insights and managing all aspects of your experience",
    icon: (
      <>
        <BackpackIcon />
      </>
    ),
  },
  {
    title: "Metrics",
    href: "/metrics",
    description: "Explore data trends and insights through informative charts and analysis",
    icon: (
      <>
        <PieChartIcon />
      </>
    ),
  },
  {
    title: "History",
    href: "/dashboard",
    description: "Trace your journey of events through an interactive chronological display",
    icon: (
      <>
        <CommitIcon />
      </>
    ),
    comingSoon: true,
  },
  {
    title: "Find Jobs",
    href: "/dashboard",
    description: "Discover exciting opportunities tailored to your preferences and skills",
    icon: (
      <>
        <MagnifyingGlassIcon />
      </>
    ),
    comingSoon: true,
  },
]
