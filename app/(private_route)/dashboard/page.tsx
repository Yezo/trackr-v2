import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Sidebar from "@/components/navbar/sidebar/sidebar-nav"
import { columns } from "@/components/table/table-columns"

import { DataTable } from "@/components/table/data-table"
import { getServerSession } from "next-auth/next"

async function getData(id: string | undefined) {
  try {
    // const fetchedUsers = await fetch(`${process.env.LIVE_URL}/api/job/${id}`, {
    const fetchedUsers = await fetch(`${process.env.LOCAL_URL}/api/job/${id}`, {
      cache: "no-store",
    }).then((res) => res.json())

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
      <Sidebar session={session} />
      <section className="flex-1">
        <div>
          <div className="bg-slate-500 px-10 py-10">
            <h2>Home / Dashboard</h2>
            <h1 className="font-spectral font-light ">Dashboard</h1>
          </div>
        </div>
        <DataTable
          columns={columns}
          data={data.fetchedJobApplications}
          session={session}
        />
      </section>
    </div>
  )
}
