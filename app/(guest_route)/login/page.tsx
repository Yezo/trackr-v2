import { SignInForm } from "@/components/forms/sign-in"
import Image from "next/image"

export default function SignInPage() {
  return (
    <div className="flex min-h-[calc(100vh-64px)]">
      <section className="hidden md:flex flex-1 m-4 rounded-xl relative">
        <Image
          src="/statue.webp"
          fill
          className="object-cover rounded-xl lg:object-right-top"
          alt="Picture of greek statue"
          quality={100}
          priority
          sizes="(min-width: 808px) 50vw, 100vw"
        ></Image>
      </section>
      <section className="flex-1 ">
        <div className="flex items-center justify-center min-h-full px-12 sm:px-40 md:px-12 2xl:px-60 lg:px-20 xl:px-44">
          <SignInForm />
        </div>
      </section>
    </div>
  )
}
