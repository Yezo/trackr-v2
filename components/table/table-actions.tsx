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

type Props = {
  userID: string
  jobID: string
}

export default function TableActions({ userID, jobID }: Props) {
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
      } else {
        throw "There was an error during deletion."
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenuTrigger asChild>
        <button className="Button violet" ref={dropdownTriggerRef}>
          Actions
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
          <DropdownMenuLabel className="DropdownMenuLabel">Items with dialog</DropdownMenuLabel>

          <EditJobForm userID={userID} setDropdownOpen={setDropdownOpen} jobID={jobID} />
          <button onClick={() => handleDeleteJob(jobID)}>delete</button>
        </DropdownMenuGroup>

        <DropdownMenuSeparator className="DropdownMenuSeparator" />

        <DropdownMenuGroup>
          <DropdownMenuLabel className="DropdownMenuLabel">Regular items</DropdownMenuLabel>
          <DropdownMenuItem className="DropdownMenuItem">Duplicate</DropdownMenuItem>
          <DropdownMenuItem className="DropdownMenuItem">Copy</DropdownMenuItem>
          <DropdownMenuItem className="DropdownMenuItem">Save</DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
