import startDB from "@/lib/db"
import JobModel from "@/models/jobModel"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  //ID of session user
  const id = params.id

  try {
    await startDB()

    if (req.method === "GET") {
      //Fetch job applications where the userID matches the sessionID
      const fetchedJobApplications = await JobModel.find({ userID: id })
      return NextResponse.json({ fetchedJobApplications })
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`)
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}
