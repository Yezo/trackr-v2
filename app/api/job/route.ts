import startDB from "@/lib/db"
import JobModel from "@/models/jobModel"
import { NextResponse } from "next/server"

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export async function GET(req: any, res: any) {
  try {
    console.log("CONNECTING TO MONGO")
    await startDB()
    console.log("CONNECTED TO MONGO")

    if (req.method === "POST") {
      console.log("CREATING DOCUMENT")
      const createdUser = await JobModel.create(req.body)
      console.log("CREATED DOCUMENT")
      return NextResponse.json({ createdUser })
    } else if (req.method === "GET") {
      console.log("FETCHING DOCUMENTS")
      const fetchedUsers = await JobModel.find().lean()
      console.log("FETCHED DOCUMENTS")
      return NextResponse.json({ fetchedUsers })
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`)
    }
  } catch (error) {
    console.log(error)
    return NextResponse.json({ error })
  }
}
