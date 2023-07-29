"use client"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useToast } from "@/components/ui/use-toast"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

import { useState } from "react"
import { Separator } from "@/components/ui/separator"
import FormFieldItem from "@/components/forms/formfield-item"

const formSchema = z.object({
  company: z.string().min(1, {
    message: "* required.",
  }),
  title: z.string().min(1, {
    message: "* required.",
  }),
  url: z
    .string()
    .min(1, {
      message: "* required.",
    })
    .url({ message: "(Invalid URL)" }),
  remote: z.string().min(1, {
    message: "* required.",
  }),
  notes: z.string().min(0, {
    message: "* required.",
  }),
  status: z.string().min(1, {
    message: "* required.",
  }),
})

export default function AddJobForm() {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      company: "",
      title: "",
      url: "",
      remote: "Remote",
      notes: "",
      status: "Pending",
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
      duration: 5000,
    })
    setOpen(false)
    form.reset()
  }

  function onDiscard() {
    toast({
      title: "You have discarded all changes.",
      description: "gg no re",
      duration: 4000,
    })
    setOpen(false)
    form.reset()
    form.clearErrors()
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
        Add Job
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-2">Add Job Application</DialogTitle>
          <Separator />
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="flex items-center gap-5 justify-between">
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormFieldItem title="Company" errorPosition="top">
                    <Input placeholder="Company" {...field} className="placeholder:text-xs" />
                  </FormFieldItem>
                )}
              />
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormFieldItem title="Job Title" errorPosition="top">
                    <Input placeholder="Job Title" {...field} className="placeholder:text-xs" />
                  </FormFieldItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="url"
              render={({ field }) => (
                <FormFieldItem title="URL" errorPosition="top">
                  <Input placeholder="URL" {...field} className="placeholder:text-xs" />
                </FormFieldItem>
              )}
            />

            <div className="flex items-center gap-4 justify-between">
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
                <FormItem>
                  <div className="flex gap-2 items-center min-h-[16px]">
                    <FormLabel className="text-foreground">Notes</FormLabel>
                    <FormMessage className="dark:text-red-600 text-xs" />
                  </div>
                  <FormControl>
                    <Textarea
                      placeholder="Jot down notes like the company's mission and values."
                      className="resize-none placeholder:text-xs"
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className="flex gap-4 justify-end">
              <Button variant="secondary" type="button" className="basis-1/2" onClick={onDiscard}>
                Discard
              </Button>
              <Button type="submit" className="basis-1/2">
                Add
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
