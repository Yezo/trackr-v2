import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { Separator } from "@/components/ui/separator"
import { IData } from "@/types/table"
import { EyeOpenIcon } from "@radix-ui/react-icons"
import { useState } from "react"

type Props = {
  data: IData
  setDropdownOpen: (value: React.SetStateAction<boolean>) => void
  dropdownOpen: boolean
}
export const TableViewJobApplication = ({ data, dropdownOpen, setDropdownOpen }: Props) => {
  const [openDialog, setOpenDialog] = useState(false)
  return (
    <Dialog open={openDialog} onOpenChange={() => setOpenDialog(!openDialog)}>
      <DialogTrigger className="relative flex min-w-full cursor-pointer select-none items-center  gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors hover:bg-muted focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:hover:bg-[#1E293B]">
        <EyeOpenIcon /> <span>View</span>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className=" text-4xl font-medium">{data.jobTitle}</DialogTitle>
          <h3 className="text-lg font-medium">{data.company}</h3>
          <Separator />
        </DialogHeader>
        <section className="text-normal space-y-4">
          <Item category="Company" title={data.company}></Item>
          <Separator />
          <Item category="Job Title" title={data.jobTitle}></Item>
          <Separator />
          <Item category="Remote" title={data.remote}></Item>
          <Separator />
          <Item category="Status" title={data.status}></Item>
          <Separator />
          <Item category="Added On" title={data.addedOn.toString().slice(0, 10)}></Item>
          <Separator />
          {data.notes && (
            <>
              <Item category="Notes" title={data.notes}></Item>
              <Separator />
            </>
          )}
        </section>
      </DialogContent>
    </Dialog>
  )
}

const Item = ({ category, title }: { category: string; title: string }) => {
  return (
    <div className="flex items-center justify-between ">
      <div className="font-medium">{category}</div>
      <div className="font-light text-foreground/80">{title}</div>
    </div>
  )
}
