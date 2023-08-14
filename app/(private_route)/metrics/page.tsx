import { ChartContainer } from "@/components/charts/chart"
import { CardContainer } from "@/components/card/card-container"
import { HomeHeader } from "@/components/layout/home-header"
import { MainContainer } from "@/components/layout/main"

import { getServerSession } from "next-auth/next"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getData } from "@/lib/utils"

export default async function MetricsPage() {
  //States
  const session = await getServerSession(authOptions)
  const data = session && session.user && (await getData(session?.user.id))

  //Filtered data
  const filteredPending = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Pending"
  )
  const filteredRejected = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Rejected"
  )
  const filteredInterview = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Interview"
  )
  const filteredAccepted = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Accepted"
  )

  //Length of data
  const totalAmountOfApplications = data.fetchedJobApplications.length
  const totalAmountOfPendingApplications = filteredPending.length
  const totalAmountOfRejectedApplications = filteredRejected.length
  const totalAmountOfInterviewingApplications = filteredInterview.length
  const totalAmountOfAcceptedApplications = filteredAccepted.length

  //Data
  const arrOfApplications = [
    {
      name: "Pending",
      value: totalAmountOfPendingApplications,
    },
    {
      name: "Rejected",
      value: totalAmountOfRejectedApplications,
    },
    {
      name: "Interviewing",
      value: totalAmountOfInterviewingApplications,
    },
    {
      name: "Accepted",
      value: totalAmountOfAcceptedApplications,
    },
    {
      name: "Total",
      value: totalAmountOfApplications,
    },
  ]

  return (
    <MainContainer>
      <HomeHeader currentPage="Metrics" currentPageURL="/metrics" />

      <div className="space-y-2">
        <CardContainer data={data} />

        <ChartContainer data={arrOfApplications} />
      </div>
    </MainContainer>
  )
}
