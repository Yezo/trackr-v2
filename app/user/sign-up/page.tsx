import { CreateAccountForm } from "@/components/forms/create-account"
import Image from "next/image"

export default function SignUpPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)] bg-slate-100">
      <section className="flex-1 bg-slate-100">
        <div className="flex items-center justify-center min-h-full px-12 sm:px-40 md:px-12 2xl:px-60 lg:px-20 xl:px-44">
          <CreateAccountForm />
        </div>
      </section>
      <section className="hidden md:flex flex-1 m-4 rounded-xl relative">
        <Image
          src="/door.webp"
          fill
          className="object-cover rounded-xl object-right-top"
          alt="Picture of greek statue"
          quality={100}
          priority
        ></Image>
      </section>
    </div>
  )
}
