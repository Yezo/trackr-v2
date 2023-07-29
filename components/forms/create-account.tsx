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
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"

import { useState } from "react"
import FormFieldItem from "@/components/forms/formfield-item"

const formSchema = z
  .object({
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
    confirmPassword: z
      .string()
      .min(1, {
        message: "Password is required.",
      })
      .min(8, {
        message: "Password must have more than 8 characters.",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match.",
    path: ["confirmPassword"],
  })

export default function CreateAccountForm() {
  const { toast } = useToast()
  const [open, setOpen] = useState(false)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
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
      duration: 4000,
    })
    setOpen(false)
    form.reset()
    form.clearErrors()
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2">
        Sign Up
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Sign Up</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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

            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormFieldItem title="Confirm Password" errorPosition="bottom">
                  <Input
                    placeholder="********"
                    type="password"
                    className="placeholder:text-xs"
                    {...field}
                  />
                </FormFieldItem>
              )}
            />
            <Button type="submit" className="min-w-full">
              Create Account
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
