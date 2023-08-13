import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { Sidebar } from "@/components/navbar/sidebar/sidebar-nav"
import { getServerSession } from "next-auth/next"
import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { AddJobForm } from "@/components/forms/add-job"
import { HomeHeader } from "@/components/layout/home-header"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { getData } from "@/lib/utils"

export default async function ProfilePage() {
  const session = await getServerSession(authOptions)

  //@ts-ignore
  const data = await getData(session?.user.id)

  return (
    <div className="flex">
      <Sidebar session={session} />
      <section className="container mx-auto flex-1 space-y-8 px-4 py-8 md:px-32">
        <HomeHeader currentPage="Profile" currentPageURL="/profile" />

        {data.fetchedJobApplications.length >= 1 ? (
          <>
            <div className="min-h-[730px] w-full space-y-4 rounded-xl border p-10">
              <div className="space-y-0.5">
                <h2 className="text-2xl font-medium tracking-tight">Settings</h2>
                <p className="text-muted-foreground">Manage your account settings.</p>
              </div>
              <Separator />
              <div className="space-y-2">
                <div className="tracking-tight">Username</div>
                <Input />
                <p className="text-sm text-muted-foreground">
                  This is your public display name. You can only change this once every 30 days.
                </p>
              </div>
              <Button>Update profile</Button>
            </div>
          </>
        ) : (
          <div className="grid min-h-[730px] w-full place-items-center rounded-xl border p-4">
            <div className="flex flex-col items-center justify-center gap-2">
              <EnvelopeOpenIcon className="h-5 w-5" />
              <p className="max-w-[230px] text-center text-sm">
                It appears you haven't uploaded any applications yet.
              </p>
              <AddJobForm session={session} />
            </div>
          </div>
        )}
      </section>
    </div>
  )
}
