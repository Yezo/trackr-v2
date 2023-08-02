"use client"
import { AddJobForm } from "@/components/forms/add-job"
import { Session } from "next-auth"

export interface IData {
  fetchedJobApplications: FetchedJobApplications[]
}

export interface FetchedJobApplications {
  _id: string
  __v: number
  company: string
  jobTitle: string
  link: string
  remote: "Remote" | "On-site" | "Hybrid"
  status: "Pending" | "Interview" | "Rejected" | "Accepted"
  notes: string
  userID: string
}

type Props = {
  session: Session | null
  data: IData
}
export const JobDataTable = ({ session, data }: Props) => {
  console.log(data)

  return (
    <div>
      {/* {JSON.stringify(data)} */}
      {data.fetchedJobApplications.map((item) => (
        <div className="p-1 bg-slate-600 rounded-md grid place-items-center">{item.company}</div>
      ))}
      <AddJobForm session={session} />
      {/* {session && session.user && session?.user.id} */}
      {/* <button onClick={displayUsers}>data</button> */}
    </div>
  )
}
