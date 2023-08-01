import startDB from "@/lib/db"
import JobModel from "@/models/jobModel"
import { NextResponse } from "next/server"

interface NewUserRequest {
  name: string
  email: string
  password: string
  munkie: string
}

export interface NewUserResponse {
  id: string
  name: string
  email: string
  role: string
  munkie: string
}
type NewResponse = NextResponse<{ user?: NewUserResponse; error?: string }>

export const POST = async (req: Request): Promise<NewResponse> => {
  const body = (await req.json()) as NewUserRequest
  await startDB()
  const user = await JobModel.create({ ...body })

  return NextResponse.json({
    user: {
      munkie: user.munkie,
      id: user.name,
      email: user.email,
      name: user.name,
      role: user.role,
    },
  })
}
