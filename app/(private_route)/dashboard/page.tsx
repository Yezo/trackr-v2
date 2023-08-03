import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import Sidebar from "@/components/navbar/sidebar/sidebar-nav"
import { columns } from "@/components/table/table-columns"

import { DataTable } from "@/components/table/data-table"
import { getServerSession } from "next-auth/next"
import { CardComponent } from "@/components/card/card"
import { ChatBubbleIcon, ClockIcon, GlobeIcon, ScissorsIcon } from "@radix-ui/react-icons"

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
  console.log(data.fetchedJobApplications)
  const filteredPending = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Pending"
  )
  const filteredRejected = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Rejected"
  )
  const filteredInterview = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Interview"
  )

  const totalIcon = <GlobeIcon className="h-4 w-4 text-muted-foreground" />
  const pendingIcon = <ClockIcon className="h-4 w-4 text-muted-foreground" />
  const interviewIcon = <ChatBubbleIcon className="h-4 w-4 text-muted-foreground" />
  const rejectionIcon = <ScissorsIcon className="h-4 w-4 text-muted-foreground" />

  return (
    <div className="flex">
      <Sidebar session={session} />
      <section className="flex-1 px-4 py-8 md:px-16">
        <div>
          <div className=" space-y-4 pb-8">
            <h2 className="space-x-2 text-xs font-light">
              <span className="text-muted-foreground">Home</span> <span>/</span>
              <span>Dashboard</span>
            </h2>
            <h1 className="font-spectral text-3xl font-light ">Dashboard</h1>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 pb-8 ">
          <CardComponent
            title={"Applications"}
            description={"Every single one of them so far "}
            icon={totalIcon}
            currentNumber={data.fetchedJobApplications.length}
            totalNumber={data.fetchedJobApplications.length}
          />
          <CardComponent
            title={"Pending"}
            description={"Applications awaiting a response"}
            icon={pendingIcon}
            currentNumber={filteredPending.length}
            totalNumber={data.fetchedJobApplications.length}
          />
          <CardComponent
            title={"Interviewing"}
            description={"Applications within interviewing phase"}
            icon={interviewIcon}
            currentNumber={filteredInterview.length}
            totalNumber={data.fetchedJobApplications.length}
          />
          <CardComponent
            title={"Rejected"}
            description={"Companies regretting their decision"}
            icon={rejectionIcon}
            currentNumber={filteredRejected.length}
            totalNumber={data.fetchedJobApplications.length}
          />
        </div>
        <DataTable columns={columns} data={data.fetchedJobApplications} session={session} />
      </section>
    </div>
  )
}
