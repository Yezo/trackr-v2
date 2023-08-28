"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Form, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Separator } from "@/components/ui/separator"
import { LinkButton } from "@/components/ui/link-button"
import {
  ExclamationTriangleIcon,
  EyeOpenIcon,
  EyeNoneIcon,
  UpdateIcon,
} from "@radix-ui/react-icons"
import { FormFieldItem } from "@/components/forms/formfield-item"

import { useState } from "react"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

//Zod Schema for sign in form
const formSchema = z.object({
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email("Email is invalid."),
  password: z.string().min(8, {
    message: "Password must have more than 8 characters.",
  }),
})

export const SignInForm = () => {
  //States
  const [emailInUseError, setEmailInUseError] = useState(false)
  const [passwordVisiblity, setPasswordVisiblity] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  //Function that fires when form is submited
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //Sets the email in use error back to false
    setEmailInUseError(false)

    const { email, password } = values

    //Submission
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    })

    //If there's no error, then reset the form and clear all form errors for the next time
    if (res?.error === null) {
      form.reset()
      form.clearErrors()
      router.push("/dashboard")
    }
    //If there's an error, then display the error alert
    if (res?.error) {
      setEmailInUseError(true)
    }
  }
  return (
    <div className="min-w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4 pb-6">
            <h1 className="font-spectral text-3xl font-light leading-none tracking-tight ">
              Welcome back,
            </h1>
            <p className="font-spectral text-sm font-light leading-none tracking-tight text-muted-foreground">
              Log in with your account details below.
            </p>
          </div>
          {emailInUseError && (
            <p className="flex min-w-full items-center justify-center gap-2 rounded-md bg-red-600 py-2 text-xs text-white">
              <ExclamationTriangleIcon className="h-[1rem] w-[1rem]" />
              <span className="uppercase tracking-wider ">Wrong email or password.</span>
            </p>
          )}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormFieldItem title="Email" errorPosition="bottom">
                <Input
                  placeholder="name@email.com"
                  type="email"
                  className="tracking-tight placeholder:text-xs"
                  {...field}
                />
              </FormFieldItem>
            )}
          />

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormFieldItem title="Password" errorPosition="bottom">
                <div className="flex items-center">
                  <Input
                    placeholder="********"
                    type={passwordVisiblity ? "text" : "password"}
                    className="tracking-tight placeholder:text-xs"
                    {...field}
                  />
                  {passwordVisiblity ? (
                    <EyeNoneIcon
                      className="-m-8 cursor-pointer text-muted-foreground"
                      onClick={() => setPasswordVisiblity(!passwordVisiblity)}
                    />
                  ) : (
                    <EyeOpenIcon
                      className="-m-8 cursor-pointer text-muted-foreground"
                      onClick={() => setPasswordVisiblity(!passwordVisiblity)}
                    />
                  )}
                </div>
              </FormFieldItem>
            )}
          />

          {form.formState.isSubmitting ? (
            <Button type="submit" className="flex min-w-full items-center gap-2" disabled>
              <UpdateIcon className="h-[1rem] w-[1rem] animate-spin" /> Sign In
            </Button>
          ) : (
            <Button type="submit" className="min-w-full">
              Sign In
            </Button>
          )}

          <Separator />

          <span className="flex flex-col items-center justify-center font-spectral text-sm tracking-tight text-muted-foreground sm:flex-row">
            Don't have an account?
            <LinkButton variant="link" href="/signup">
              Sign up
            </LinkButton>
          </span>
        </form>
      </Form>
    </div>
  )
}
