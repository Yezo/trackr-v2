import {
  LockIconSVG,
  MoonIconSVG,
  BackpackIconSVG,
  CursorIconSVG,
  MetricsIconSVG,
  ImagesIconSVG,
} from "@/lib/svg"

export const FeatureData = [
  {
    title: "Account Authentication",
    description:
      "It takes no more than 10 seconds to create your account today and unlock the full potential of Trackr's powerful features.",
    size: "sm",
    icon: <LockIconSVG />,
  },
  {
    title: "Your personal collection",
    description:
      "Manage your job applications effortlessly. Your dashboard is now your ultimate hub for tracking every application.",
    size: "sm",
    icon: <BackpackIconSVG />,
  },
  {
    title: "Ease of use",
    description:
      "With just one click, you can swiftly add, edit, and remove your applications – it's a fast and intuitive experience.",
    size: "sm",
    icon: <CursorIconSVG />,
  },
  {
    title: "Metrics and stats",
    description:
      "Curious about your application count, pending status, or number of rejections? We've got the answers.",
    size: "sm",
    icon: <MetricsIconSVG />,
  },
  {
    title: "Modern experience",
    description:
      "Leave spreadsheets in the past; with Trackr, step into a modern, streamlined interface that helps progress you toward your desired career.",
    size: "sm",
    icon: <ImagesIconSVG />,
  },
  {
    title: "Dark Mode",
    description:
      "Escape the glare of white, lifeless screens. Embrace a dashboard that matches your style, alive with themes that inspire.",
    size: "sm",
    icon: <MoonIconSVG />,
  },
]
