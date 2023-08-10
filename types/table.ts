export interface IData {
  userID: string
  jobID: string
  company: string
  jobTitle: string
  link: string
  remote: "Remote" | "On-site" | "Hybrid"
  status: "Pending" | "Interview" | "Rejected" | "Accepted"
  notes: string
  addedOn: Date
}
