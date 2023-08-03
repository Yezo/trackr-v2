import { Model, model, models } from "mongoose";
import { Document, Schema } from "mongoose";

//Model for individual Job Applications that get sent to MongoDB
interface IJobApplicationDocument extends Document {
  jobTitle: string;
  company: string;
  link: string;
  remote: "Remote" | "On-site" | "Hybrid";
  status: "Pending" | "Interview" | "Rejected" | "Accepted";
  notes: string;
  userID: string;
  createdAt: Date;
  updatedAt: Date;
}

//Shape of the object
const jobSchema = new Schema<IJobApplicationDocument, {}>(
  {
    jobTitle: { type: String, required: true, trim: true },
    company: { type: String, required: true, trim: true },
    link: { type: String, required: true, trim: true },
    remote: {
      type: String,
      enum: ["Remote", "On-site", "Hybrid"],
      default: "Remote",
      required: true,
    },
    status: {
      type: String,
      enum: ["Pending", "Interview", "Rejected", "Accepted"],
      default: "Pending",
      required: true,
    },
    notes: { type: String, trim: true },
    userID: { type: String, required: true, trim: true },
  },
  { timestamps: true }
);

// models.Cock || model("Cock",jobSchema)
// This controls what COLLECTION the following data gets sent to
const JobModel = models.Time || model("Time", jobSchema);
export default JobModel as Model<IJobApplicationDocument, {}>;
