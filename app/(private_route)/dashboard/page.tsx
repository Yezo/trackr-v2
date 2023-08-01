import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Sidebar from "@/components/navbar/sidebar/sidebar-nav"
import { JobDataTable } from "@/components/table/data-table"
import { getServerSession } from "next-auth/next"

async function getData(id: string | undefined) {
  try {
    const fetchedUsers = await fetch(`http://localhost:3000/api/job/${id}`, {
      cache: "no-store",
    }).then((res) => res.json())
    console.log(fetchedUsers)
    return fetchedUsers
  } catch (error) {
    console.log(error)
  }
}

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  //@ts-ignore
  const data = await getData(session?.user.id)
  return (
    <div className="flex">
      {/* {JSON.stringify(data)} */}
      <Sidebar session={session} />
      <JobDataTable session={session} data={data} />
    </div>
  )
}
