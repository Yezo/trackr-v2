import { CardComponent } from "@/components/card/card"
import { GlobeIcon, ClockIcon, ChatBubbleIcon, ScissorsIcon } from "@radix-ui/react-icons"

export const CardContainer = ({ data }: { data: any }) => {
  //Constants
  const totalIcon = <GlobeIcon className="h-4 w-4 text-muted-foreground" />
  const pendingIcon = <ClockIcon className="h-4 w-4 text-muted-foreground" />
  const interviewIcon = <ChatBubbleIcon className="h-4 w-4 text-muted-foreground" />
  const rejectionIcon = <ScissorsIcon className="h-4 w-4 text-muted-foreground" />

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

  //Length of data
  const totalAmountOfApplications = data.fetchedJobApplications.length
  const totalAmountOfPendingApplications = filteredPending.length
  const totalAmountOfRejectedApplications = filteredRejected.length
  const totalAmountOfInterviewingApplications = filteredInterview.length

  return (
    <div className="grid grid-cols-1 gap-1 sm:grid-cols-2 xl:grid-cols-4">
      <CardComponent
        title={"Applications"}
        description={"Every single one of them so far "}
        icon={totalIcon}
        currentNumber={totalAmountOfApplications}
        totalNumber={totalAmountOfApplications}
      />
      <CardComponent
        title={"Pending"}
        description={"Applications awaiting a response"}
        icon={pendingIcon}
        currentNumber={totalAmountOfPendingApplications}
        totalNumber={totalAmountOfApplications}
      />
      <CardComponent
        title={"Interviewing"}
        description={"Applications within interviewing phase"}
        icon={interviewIcon}
        currentNumber={totalAmountOfInterviewingApplications}
        totalNumber={totalAmountOfApplications}
      />
      <CardComponent
        title={"Rejected"}
        description={"Companies regretting their decision"}
        icon={rejectionIcon}
        currentNumber={totalAmountOfRejectedApplications}
        totalNumber={totalAmountOfApplications}
      />
    </div>
  )
}
