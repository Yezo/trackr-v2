import { EnvelopeOpenIcon } from "@radix-ui/react-icons"
import { AddJobForm } from "@/components/forms/add-job"
import { HomeHeader } from "@/components/layout/home-header"
import { Separator } from "@/components/ui/separator"

import { MainContainer } from "@/components/layout/main"

import { authOptions } from "@/app/api/auth/[...nextauth]/route"
import { getServerSession } from "next-auth/next"
import { getData } from "@/lib/utils"
import { EditUsername } from "@/components/forms/edit-username"

export default async function SettingsPage() {
  const session = await getServerSession(authOptions)
  const data = session && session.user && (await getData(session?.user.id))

  return (
    <MainContainer>
      <HomeHeader currentPage="Settings" currentPageURL="/settings" />

      {data.fetchedJobApplications.length >= 1 ? (
        <>
          <div className="flex min-h-[730px] w-full flex-col justify-between space-y-4 rounded-xl border p-10">
            <div className="space-y-0.5">
              <h2 className="text-2xl font-medium tracking-tight">Settings</h2>
              <p className="text-muted-foreground">Manage your account settings.</p>
              <Separator />
              <EditUsername session={session} />
            </div>
          </div>
        </>
      ) : (
        <div className="grid min-h-[730px] w-full place-items-center rounded-xl border p-4">
          <div className="flex flex-col items-center justify-center gap-3">
            <EnvelopeOpenIcon className="h-5 w-5" />
            <p className="max-w-[230px] text-center text-sm">
              It appears you haven't uploaded any applications yet.
            </p>
            <AddJobForm session={session} />
          </div>
        </div>
      )}
    </MainContainer>
  )
}
