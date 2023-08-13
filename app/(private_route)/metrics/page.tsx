import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { CardComponent } from "@/components/card/card"
import { BarChartComponent } from "@/components/charts/chart-bar"
import { HomeHeader } from "@/components/layout/home-header"
import { getData } from "@/lib/utils"
import { GlobeIcon, ClockIcon, ChatBubbleIcon, ScissorsIcon } from "@radix-ui/react-icons"
import { getServerSession } from "next-auth/next"
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts"

const TESTDATA = [
  {
    name: "Page A",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]

export default async function MetricsPage() {
  const session = await getServerSession(authOptions)
  //@ts-ignore
  const data = await getData(session?.user.id)
  const totalIcon = <GlobeIcon className="h-4 w-4 text-muted-foreground" />
  const pendingIcon = <ClockIcon className="h-4 w-4 text-muted-foreground" />
  const interviewIcon = <ChatBubbleIcon className="h-4 w-4 text-muted-foreground" />
  const rejectionIcon = <ScissorsIcon className="h-4 w-4 text-muted-foreground" />

  const filteredPending = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Pending"
  )
  const filteredRejected = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Rejected"
  )
  const filteredInterview = data.fetchedJobApplications.filter(
    (item: any) => item.status === "Interview"
  )

  const totalAmountOfApplications = data.fetchedJobApplications.length
  const totalAmountOfPendingApplications = filteredPending.length
  const totalAmountOfRejectedApplications = filteredRejected.length
  const totalAmountOfInterviewingApplications = filteredInterview.length

  const data2 = [
    {
      name: "Total",
      Value: totalAmountOfApplications,
    },
    {
      name: "Pending",
      Value: totalAmountOfPendingApplications,
    },
    {
      name: "Rejected",
      Value: totalAmountOfRejectedApplications,
    },
    {
      name: "Interviewing",
      Value: totalAmountOfInterviewingApplications,
    },
  ]

  return (
    <main className="container mx-auto flex-1 space-y-8 px-4 py-8 md:px-32">
      <HomeHeader currentPage="Metrics" currentPageURL="/metrics" />

      <div className="flex flex-wrap gap-1">
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
      <div className="min-h-[500px] w-full space-y-4 rounded-xl border p-10">
        <BarChartComponent data={data2} />
      </div>
    </main>
  )
}
