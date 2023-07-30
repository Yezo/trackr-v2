"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { LinkButton } from "@/components/ui/link-button"
import { Form, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormFieldItem } from "@/components/forms/formfield-item"
import {
  ExclamationTriangleIcon,
  UpdateIcon,
  EyeOpenIcon,
  EyeNoneIcon,
} from "@radix-ui/react-icons"

import { useForm } from "react-hook-form"
import { useState } from "react"
import { useRouter } from "next/navigation"

//Zod Schema for sign in form
const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
  email: z
    .string()
    .min(1, {
      message: "Email is required.",
    })
    .email("Email is invalid."),
  password: z
    .string()
    .min(1, {
      message: "Password is required.",
    })
    .min(8, {
      message: "Password must have more than 8 characters.",
    }),
})

export const CreateAccountForm = () => {
  //States
  const [emailInUseError, setEmailInUseError] = useState(false)
  const [passwordVisiblity, setPasswordVisiblity] = useState(false)
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  //Function that fires when form is submited
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //Sets the email in use error back to false
    setEmailInUseError(false)

    //Submission
    const res = await fetch("api/auth/users", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res) => res.json())

    //If there's no error, then reset the form and clear all form errors for the next time
    if (res?.user) {
      form.reset()
      form.clearErrors()
      router.push("/")
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
            <h1 className="text-3xl font-light leading-none tracking-tight font-spectral ">
              Create your account,
            </h1>
            <p className="text-sm font-light leading-none tracking-tight font-spectral text-muted-foreground">
              Welcome to Trackr.
            </p>
          </div>
          {emailInUseError && (
            <p className="bg-red-600 py-2 text-white min-w-full text-xs flex gap-2 items-center justify-center rounded-md">
              <ExclamationTriangleIcon className="h-[1rem] w-[1rem]" />
              <span className="uppercase tracking-wider ">This email is already in use.</span>
            </p>
          )}
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormFieldItem title="Name" errorPosition="bottom">
                <Input placeholder="Name" className="placeholder:text-xs" {...field} />
              </FormFieldItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormFieldItem title="Email" errorPosition="bottom">
                <Input
                  placeholder="name@email.com"
                  type="email"
                  className="placeholder:text-xs"
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
                    className="placeholder:text-xs"
                    {...field}
                  />
                  {passwordVisiblity ? (
                    <EyeNoneIcon
                      className="-m-8 text-muted-foreground cursor-pointer"
                      onClick={() => setPasswordVisiblity(!passwordVisiblity)}
                    />
                  ) : (
                    <EyeOpenIcon
                      className="-m-8 text-muted-foreground cursor-pointer"
                      onClick={() => setPasswordVisiblity(!passwordVisiblity)}
                    />
                  )}
                </div>
              </FormFieldItem>
            )}
          />

          {form.formState.isSubmitting ? (
            <Button type="submit" className="min-w-full flex items-center gap-2" disabled>
              <UpdateIcon className="h-[1rem] w-[1rem] animate-spin" /> Create Account
            </Button>
          ) : (
            <Button type="submit" className="min-w-full">
              Create Account
            </Button>
          )}

          <Separator />

          <span className="flex flex-col sm:flex-row items-center justify-center text-sm text-muted-foreground font-spectral tracking-tight">
            Already have an account?
            <LinkButton variant="link" href="/login">
              Log in
            </LinkButton>
          </span>
        </form>
      </Form>
    </div>
  )
}
