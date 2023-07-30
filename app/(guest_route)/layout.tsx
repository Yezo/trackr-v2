import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

type Props = {
  children: React.ReactNode
}
export default async function Component({ children }: Props) {
  const session = await getServerSession(authOptions)
  //If the user isn't logged in, then redirect to profile/dashboard
  if (session) redirect("/profile")
  return <>{children}</>
}
