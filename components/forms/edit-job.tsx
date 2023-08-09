"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Form, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { FormFieldItem } from "@/components/forms/formfield-item"
import { ExclamationTriangleIcon, UpdateIcon, PlusCircledIcon } from "@radix-ui/react-icons"

import { useForm } from "react-hook-form"
import { useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

//Zod Schema for sign in form
const formSchema = z.object({
  company: z.string().min(1, {
    message: "Company is required.",
  }),
  jobTitle: z.string().min(1, {
    message: "Job Title is required.",
  }),
  link: z
    .string()
    .min(1, {
      message: "URL is required.",
    })
    .url({ message: "(Invalid URL)" }),
  remote: z.string().min(1, {
    message: "* required.",
  }),
  status: z.string().min(1, {
    message: "* required.",
  }),
  notes: z.string().min(0, {
    message: "* required.",
  }),
  userID: z.string().min(1, {
    message: "Password is required.",
  }),
})

export const EditJobForm = ({
  userID,
  jobID,
  setDropdownOpen,
}: {
  userID: string
  jobID: string
  setDropdownOpen: (value: React.SetStateAction<boolean>) => void
}) => {
  //States
  const [submissionError, setSubmissionError] = useState(false)
  const [openDialog, setOpenDialog] = useState(false)
  const [isPending, startTransition] = useTransition()
  const router = useRouter()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      jobTitle: "",
      link: "",
      remote: "Remote",
      status: "Pending",
      notes: "",
      userID: userID,
    },
  })

  //Function that fires when form is submited
  const handleSubmit = async (values: z.infer<typeof formSchema>) => {
    //Sets the email in use error back to false
    setDropdownOpen(false)
    setSubmissionError(false)

    //Submission
    const res = await fetch(`/api/job/${jobID}`, {
      method: "PUT",
      body: JSON.stringify(values),
    }).then((res) => res.json())

    //If there's no error, then reset the form and clear all form errors for the next time
    if (res?.updated) {
      setOpenDialog(false)
      form.reset()
      form.clearErrors()
      startTransition(() => {
        // Refresh the current route and fetch new data from the server without
        // losing client-side browser or React state.
        router.refresh()
      })
    }
    //If there's an error, then display the error alert
    if (res?.error) {
      setSubmissionError(true)
    }
  }

  const handleDiscard = () => {
    //For when the user clicks the discard button
    //Then close dialog + reset form fields and errors
    setOpenDialog(false)
    form.reset()
    form.clearErrors()
  }

  const handleSoftClose = () => {
    //For when the user clicks outside
    //For when the user clicks the X button
    //Then close dialog + reset form fields and errors
    setOpenDialog(!openDialog)
    form.reset()
    form.clearErrors()
  }

  return (
    <Dialog open={openDialog} onOpenChange={handleSoftClose}>
      <DialogTrigger className="">
        <PlusCircledIcon />
        Edit Job
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Edit Your Job Application</DialogTitle>
          <Separator />
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
            {submissionError && (
              <p className="flex min-w-full items-center justify-center gap-2 rounded-md bg-red-600 py-2 text-xs text-white">
                <ExclamationTriangleIcon className="h-[1rem] w-[1rem]" />
                <span className="uppercase tracking-wider ">
                  There was an error submitting the form.
                </span>
              </p>
            )}

            <div className="flex items-center justify-between gap-4">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormFieldItem title="Company" errorPosition="bottom">
                    <Input placeholder="Company" className="placeholder:text-xs" {...field} />
                  </FormFieldItem>
                )}
              />

              <FormField
                control={form.control}
                name="jobTitle"
                render={({ field }) => (
                  <FormFieldItem title="Job Title" errorPosition="bottom">
                    <Input placeholder="Job Title" className="placeholder:text-xs" {...field} />
                  </FormFieldItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="link"
              render={({ field }) => (
                <FormFieldItem title="URL" errorPosition="bottom">
                  <Input placeholder="URL" className="placeholder:text-xs" {...field} />
                </FormFieldItem>
              )}
            />
            <div className="flex items-center justify-between gap-4">
              <FormField
                control={form.control}
                name="remote"
                render={({ field }) => (
                  <FormFieldItem title="Remote" errorPosition="top" widthFull={true}>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Remote" {...field} />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Remote">Remote</SelectItem>
                        <SelectItem value="On-site">On-site</SelectItem>
                        <SelectItem value="Hybrid">Hybrid</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormFieldItem>
                )}
              />

              <FormField
                control={form.control}
                name="status"
                render={({ field }) => (
                  <FormFieldItem title="Status" errorPosition="top" widthFull={true}>
                    <Select onValueChange={field.onChange}>
                      <SelectTrigger>
                        <SelectValue placeholder="Pending" className="placeholder:text-xs" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Pending">Pending</SelectItem>
                        <SelectItem value="Interview">Interview</SelectItem>
                        <SelectItem value="Rejected">Rejected</SelectItem>
                        <SelectItem value="Accepted">Accepted</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormFieldItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="notes"
              render={({ field }) => (
                <FormFieldItem title="Notes" errorPosition="top" widthFull={true}>
                  <Textarea
                    placeholder="Jot down notes like the company's mission and values."
                    className="resize-none placeholder:text-xs"
                    {...field}
                  />
                </FormFieldItem>
              )}
            />

            <Separator />

            <div className="flex justify-end gap-4">
              <Button
                variant="secondary"
                type="button"
                className="basis-1/2"
                onClick={handleDiscard}
              >
                Discard
              </Button>
              {form.formState.isSubmitting ? (
                <Button type="submit" className="flex basis-1/2 items-center gap-2" disabled>
                  <UpdateIcon className="h-[1rem] w-[1rem] animate-spin" /> Add
                </Button>
              ) : (
                <Button type="submit" className="flex basis-1/2 items-center gap-2">
                  Add
                </Button>
              )}
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
