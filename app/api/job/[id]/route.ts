import startDB from "@/lib/db"
import JobModel from "@/models/jobModel"
import mongoose from "mongoose"
import { NextResponse } from "next/server"

export async function GET(req: Request, { params }: { params: { id: string } }) {
  //ID of session user
  const id = params.id

  try {
    //Start the DB connection
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

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  //ID of session user
  const id = params.id

  try {
    //Start the DB connection
    await startDB()

    if (req.method === "PUT") {
      //Check if the ID exists or not
      if (!id) {
        return { error: "ID not found" }
      }
      const body = await req.json()
      const updated = await JobModel.findByIdAndUpdate(id, body, { new: true })
      return NextResponse.json({ updated })
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`)
    }
  } catch (error) {
    return NextResponse.json({ error })
  }
}

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  //ID of session user
  const id = params.id

  //https://codevoweb.com/setup-and-use-mongodb-in-nextjs-13-app-directory/
  function stringToObjectId(id: string): mongoose.Types.ObjectId | null {
    if (mongoose.Types.ObjectId.isValid(id)) {
      return new mongoose.Types.ObjectId(id)
    } else {
      return null
    }
  }

  try {
    //Start the DB connection
    await startDB()

    if (req.method === "DELETE") {
      //Parse id back to an ObjectId for Mongo
      const parsedId = stringToObjectId(id)

      //Validate ID
      if (!parsedId) {
        return { error: "ID not found" }
      }

      //Find and remove based on the job ID
      const removed = await JobModel.findByIdAndDelete(parsedId).exec()

      return NextResponse.json("Deletion successful.")
    } else {
      throw new Error(`Unsupported HTTP method: ${req.method}`)
    }
  } catch (error) {
    return NextResponse.json("There was an error")
  }
}
