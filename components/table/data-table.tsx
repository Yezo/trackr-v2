"use client"
import { AddJobForm } from "@/components/forms/add-job"
import { Session } from "next-auth"

export interface IData {
  fetchedUsers: FetchedUser[]
}

export interface FetchedUser {
  _id: string
  email: string
  name: string
  password: string
  role: "user" | "admin"
  munkie: string
  __v: number
}

type Props = {
  session: Session | null
  data: IData
}
export const JobDataTable = ({ session, data }: Props) => {
  console.log(data)

  return (
    <div>
      {JSON.stringify(data)}
      {data.fetchedUsers.map((item) => (
        <div>{item.email}</div>
      ))}
      <AddJobForm session={session} />
      {/* {session && session.user && session?.user.id} */}
      {/* <button onClick={displayUsers}>data</button> */}
    </div>
  )
}
