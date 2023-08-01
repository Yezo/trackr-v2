import { Model, model, models } from "mongoose"
import { Document, Schema } from "mongoose"

//Model for individual Job Applications that get sent to MongoDB
interface IJobApplicationDocument extends Document {
  email: string
  name: string
  password: string
  role: "admin" | "user"
  munkie: string
}

//Shape of the object
const jobSchema = new Schema<IJobApplicationDocument, {}>({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true, trim: true },
  password: { type: String, required: true },
  role: { type: String, enum: ["admin", "user"], default: "user" },
  munkie: { type: String, required: true, trim: true },
})

// models.Cock || model("Cock",jobSchema)
// This controls what COLLECTION the following data gets sent to
const JobModel = models.Cock || model("Cock", jobSchema)
export default JobModel as Model<IJobApplicationDocument, {}>
