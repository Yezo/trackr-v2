import startDB from "@/lib/db"
import JobModel from "@/models/jobModel"
import { NextResponse } from "next/server"

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export async function GET(req: Request, { params }: { params: { id: string } }) {
  const id = params.id
  // return NextResponse.json(id)
  try {
    await startDB()

    if (req.method === "GET") {
      const fetchedUsers = await JobModel.find({ munkie: id })
      return NextResponse.json({ fetchedUsers })
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`)
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}
