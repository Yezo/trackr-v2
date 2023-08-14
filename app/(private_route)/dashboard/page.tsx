import { MainContainer } from "@/components/layout/main"
import { columns } from "@/components/table/table-columns"
import { DataTable } from "@/components/table/data-table"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { AddJobForm } from "@/components/forms/add-job"
import { HomeHeader } from "@/components/layout/home-header"

import { getData } from "@/lib/utils"
import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"

export default async function DashboardPage() {
  const session = await getServerSession(authOptions)
  const data = session && session.user && (await getData(session?.user.id))

  return (
    <MainContainer>
      <HomeHeader currentPage="Dashboard" currentPageURL="/dashboard" />

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
    </MainContainer>
  )
}
