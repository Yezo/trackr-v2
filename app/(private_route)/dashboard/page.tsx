import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Sidebar } from "@/components/navbar/sidebar/sidebar-nav"
import { columns } from "@/components/table/table-columns"

import { DataTable } from "@/components/table/data-table"
import { getServerSession } from "next-auth/next"
import { CardComponent } from "@/components/card/card"
import {
  ChatBubbleIcon,
  ClockIcon,
  EnvelopeOpenIcon,
  GlobeIcon,
  ScissorsIcon,
} from "@radix-ui/react-icons"
import { AddJobForm } from "@/components/forms/add-job"
import { HomeHeader } from "@/components/layout/home-header"
import { getData } from "@/lib/utils"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)

  //@ts-ignore
  const data = await getData(session?.user.id)

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
      <section className="container mx-auto flex-1 space-y-8 px-4 py-8 md:px-32">
        <HomeHeader currentPage="Dashboard" currentPageURL="/dashboard" />

        {/* <div className="flex flex-wrap gap-1">
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
        </div> */}
        {data.fetchedJobApplications.length >= 1 ? (
          <>
            <DataTable columns={columns} data={data.fetchedJobApplications} session={session} />
          </>
        ) : (
          <div className="grid min-h-[730px] w-full place-items-center rounded-xl border p-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <EnvelopeOpenIcon className="h-5 w-5" />
              <p className="max-w-[230px] text-center text-sm">
                It appears you haven't uploaded any applications yet.
              </p>
              <AddJobForm session={session} />
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
