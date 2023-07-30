"use client"

import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { Button } from "@/components/ui/button"

import { Form, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/components/ui/dialog"
import { FormFieldItem } from "@/components/forms/formfield-item"
import { ExclamationTriangleIcon, UpdateIcon } from "@radix-ui/react-icons"

import { useForm } from "react-hook-form"
import { useState } from "react"

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
  const [open, setOpen] = useState(false)
  const [emailInUseError, setEmailInUseError] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  })

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setEmailInUseError(false)

    const res = await fetch("api/auth/users", {
      method: "POST",
      body: JSON.stringify(values),
    }).then((res) => res.json())
    console.log(res)
    if (res.user) {
      setOpen(false)
      form.reset()
      form.clearErrors()
    }
    if (res.error) {
      setEmailInUseError(true)
    }
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex items-center justify-center rounded-full text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
        Sign Up
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <DialogDescription>
          {emailInUseError && (
            <Button
              variant="destructive"
              className="min-w-full text-xs flex gap-2 items-center justify-center"
            >
              <ExclamationTriangleIcon className="h-[1rem] w-[1rem]" />
              <span>This email is already in use.</span>
            </Button>
          )}
        </DialogDescription>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  <Input
                    placeholder="********"
                    type="password"
                    className="placeholder:text-xs"
                    {...field}
                  />
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
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
