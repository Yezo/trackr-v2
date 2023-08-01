import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"

type Props = {}

export default async function ProfilePage({}: Props) {
  const session = await getServerSession(authOptions)
  console.log(session)
  return <div>{JSON.stringify(session)}</div>
}
