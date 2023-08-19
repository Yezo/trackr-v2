"use client"
import { FormFieldItem } from "@/components/forms/formfield-item"
import { Form, FormField } from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { UpdateIcon } from "@radix-ui/react-icons"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { Session } from "next-auth"
import { useSession } from "next-auth/react"
import { useState, useTransition } from "react"
import { useForm } from "react-hook-form"
import { useRouter } from "next/navigation"

//Zod Schema for sign in form
const formSchema = z.object({
  name: z.string().min(1, {
    message: "Name is required.",
  }),
})

export const EditUsername = ({ session }: { session: Session | null }) => {
  const { update } = useSession()
  const [isPending, startTransition] = useTransition()
  const [submissionCompleted, setSubmissionCompleted] = useState<boolean>(false)
  const [submissionError, setSubmissionError] = useState<boolean>(false)

  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
    },
  })

  //Function that fires when form is submited
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    //Submission
    const res = await fetch(`/api/auth/users/${session?.user?.id}`, {
      method: "PUT",
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then(() => update({ name: values.name }))
    console.log(res)

    //If there's no error, then reset the form and clear all form errors for the next time
    if (res?.user) {
      form.reset()
      form.clearErrors()
      setSubmissionCompleted(true)
      startTransition(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh()
      })
    }
    //If there's an error, then display the error alert
    if (!res?.user) {
      setSubmissionError(true)
    }
  }

  return (
    <div className="space-y-2 pt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormFieldItem title="Name" errorPosition="bottom">
                <>
                  <Input
                    placeholder={`${session && session.user && session?.user.name}`}
                    className="placeholder:text-xs placeholder:capitalize"
                    {...field}
                  />
                  <p className="text-sm text-muted-foreground">This is your new display name.</p>
                </>
              </FormFieldItem>
            )}
          />

          {form.formState.isSubmitting ? (
            <Button type="submit" className="flex  max-w-fit items-center gap-2" disabled>
              <UpdateIcon className="h-[1rem] w-[1rem] animate-spin" /> Update profile
            </Button>
          ) : (
            <Button type="submit" className=" max-w-fit">
              Update profile
            </Button>
          )}
          {submissionCompleted && "Completed!"}
          {submissionError && "Error!"}
        </form>
      </Form>
    </div>
  )
}
