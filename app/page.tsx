import { AddJobForm } from "@/components/forms/add-job"
import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"

export default async function Home() {
  const session = await getServerSession(authOptions)

  return (
    <div className="container py-5 grid place-items-center gap-4">
      {/* <SignInForm />
      <CreateAccountForm /> */}
      {/* <AddJobForm session={session} /> */}
      {/* <div className="min-w-full bg-red-500 min-h-screen p-4 space-y-2">
        <div className="h-12 min-w-full bg-foreground"></div>
        <div className="h-12 min-w-full bg-background"></div>
        <div className="h-12 min-w-full bg-muted"></div>
        <div className="h-12 min-w-full bg-muted-foreground"></div>
        <div className="h-12 min-w-full bg-primary"></div>
        <div className="h-12 min-w-full bg-primary-foreground"></div>
        <div className="h-12 min-w-full bg-secondary"></div>
        <div className="h-12 min-w-full bg-secondary-foreground"></div>
      </div> */}
    </div>
  )
}
