import startDB from "@/lib/db"
import JobModel from "@/models/jobModel"
import { NextResponse } from "next/server"

export async function GET(req: any, res: any) {
  try {
    await startDB()

    if (req.method === "POST") {
      const createdUser = await JobModel.create(req.body)
      return NextResponse.json({ createdUser })
    } else if (req.method === "GET") {
      const fetchedUsers = await JobModel.find().lean()
      return NextResponse.json({ fetchedUsers })
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`)
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
