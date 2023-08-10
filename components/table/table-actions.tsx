"use client"
import { EditJobForm } from "@/components/forms/edit-job"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuGroup,
} from "@/components/ui/dropdown-menu"

import { useRef, useState, useTransition } from "react"
import { useRouter } from "next/navigation"
import { DotsHorizontalIcon, EyeOpenIcon, TrashIcon } from "@radix-ui/react-icons"
import { TableViewJobApplication } from "@/components/table/table-view-app"
import { IData } from "@/types/table"

type Props = {
  data: IData
}

export default function TableActions({ data }: Props) {
  //States
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [hasOpenDialog, setHasOpenDialog] = useState(false)
  const [isPending, startTransition] = useTransition()
  const dropdownTriggerRef = useRef(null)
  const focusRef = useRef(null)
  const router = useRouter()

  //
  const handleDeleteJob = async (jobID: string) => {
    try {
      let res = await fetch(`/api/job/${jobID}`, {
        method: "DELETE",
      })
      if (res.status === 200) {
        startTransition(() => {
          // Refresh the current route and fetch new data from the server without
          // losing client-side browser or React state.
          router.refresh()
        })
        setDropdownOpen(false)
      } else {
        throw "There was an error during deletion."
      }
    } catch (error) {
      console.log(error)
    }
  }
  const { jobID } = data

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <button
          className="min-w-fit rounded-xl px-4 py-1 transition-colors hover:bg-background"
          ref={dropdownTriggerRef}
        >
          <DotsHorizontalIcon />
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="DropdownMenuContent"
        sideOffset={5}
        hidden={hasOpenDialog}
        onCloseAutoFocus={(event) => {
          if (focusRef.current) {
            //@ts-ignore
            focusRef.current.focus()
            focusRef.current = null
            event.preventDefault()
          }
        }}
      >
        <DropdownMenuGroup>
          <DropdownMenuLabel className="font-medium">Actions</DropdownMenuLabel>
          <DropdownMenuSeparator />

          <TableViewJobApplication
            setDropdownOpen={setDropdownOpen}
            data={data}
            dropdownOpen={dropdownOpen}
          />

          <EditJobForm setDropdownOpen={setDropdownOpen} data={data} dropdownOpen={dropdownOpen} />
        </DropdownMenuGroup>

        <DropdownMenuSeparator />

        <button
          onClick={() => handleDeleteJob(jobID)}
          className="relative flex min-w-full cursor-pointer select-none items-center gap-2  rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-destructive/90 hover:text-white focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-red-700 "
        >
          <TrashIcon /> <span>Delete</span>
        </button>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
