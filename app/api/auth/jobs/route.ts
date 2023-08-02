import startDB from "@/lib/db"
import JobModel from "@/models/jobModel"
import { NextResponse } from "next/server"

interface NewUserRequest {
  userID: string
  company: string
  jobTitle: string
  link: string
  remote: string
  status: string
  notes: string
}

export interface NewUserResponse {
  id: string
  userID: string
  company: string
  jobTitle: string
  link: string
  remote: string
  status: string
  notes: string
}
type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest
  await startDB()
  const user = await JobModel.create({ ...body })

  return NextResponse.json({
    user: {
      userID: user.userID,
      id: user.company,
      company: user.company,
      jobTitle: user.jobTitle,
      link: user.link,
      remote: user.remote,
      status: user.status,
      notes: user.notes,
    },
  })
}
