import { AddJobForm } from "@/components/forms/add-job"
import { CreateAccountForm } from "@/components/forms/create-account"
import { SignInForm } from "@/components/forms/sign-in"

export default function Home() {
  return (
    <div className="container py-5 grid place-items-center gap-4">
      <SignInForm />
      <CreateAccountForm />
      <AddJobForm />
    </div>
  )
}
