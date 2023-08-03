"use client"

import { ColumnDef } from "@tanstack/react-table"
import { CaretSortIcon } from "@radix-ui/react-icons"
import { Button } from "@/components/ui/button"
import { TableColumnHeaderItem } from "@/components/table/table-columns-header"
import { TableColumnCellItem } from "@/components/table/table-columns-cell"
import { TableColumnCellBoxItem } from "@/components/table/table-columns-cellbox"
import Link from "next/link"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string
  amount: number
  status: "pending" | "processing" | "success" | "failed"
  email: string
}

export interface IData {
  fetchedJobApplications: FetchedJobApplications[]
}
export interface FetchedJobApplications {
  _id: string
  __v: number
  company: string
  jobTitle: string
  link: string
  remote: "Remote" | "On-site" | "Hybrid"
  status: "Pending" | "Interview" | "Rejected" | "Accepted"
  notes: string
  userID: string
  createdAt: Date
  updatedAt: Date
}

export const columns: ColumnDef<FetchedJobApplications>[] = [
  {
    accessorKey: "company",
    header: ({ column }) => {
      return (
        <TableColumnHeaderItem column={column}>
          Company
          <CaretSortIcon className="h-4 w-4" />
        </TableColumnHeaderItem>
      )
    },
    cell: ({ row }) => {
      const company: string = row.original.company
      const link: string = row.original.link
      return (
        <TableColumnCellItem>
          <Link href={link}>{company}</Link>
        </TableColumnCellItem>
      )
    },
  },

  {
    accessorKey: "jobTitle",
    header: ({ column }) => {
      return (
        <TableColumnHeaderItem column={column}>
          Job Title
          <CaretSortIcon className="h-4 w-4" />
        </TableColumnHeaderItem>
      )
    },
    cell: ({ row }) => {
      const jobTitle: string = row.original.jobTitle
      return <TableColumnCellItem>{jobTitle}</TableColumnCellItem>
    },
  },

  {
    accessorKey: "link",
    header: ({ column }) => {
      return (
        <TableColumnHeaderItem column={column}>
          Link
          <CaretSortIcon className="h-4 w-4" />
        </TableColumnHeaderItem>
      )
    },
    cell: ({ row }) => {
      const link: string = row.original.link
      return <TableColumnCellItem>{link}</TableColumnCellItem>
    },
  },

  {
    accessorKey: "remote",
    header: ({ column }) => {
      return (
        <TableColumnHeaderItem column={column}>
          Remote
          <CaretSortIcon className="h-4 w-4" />
        </TableColumnHeaderItem>
      )
    },
    cell: ({ row }) => {
      const remote: string = row.original.remote
      return <TableColumnCellBoxItem>{remote}</TableColumnCellBoxItem>
    },
  },

  {
    accessorKey: "status",
    header: ({ column }) => {
      return (
        <TableColumnHeaderItem column={column}>
          Status
          <CaretSortIcon className="h-4 w-4" />
        </TableColumnHeaderItem>
      )
    },
    cell: ({ row }) => {
      const status: string = row.original.status
      return <TableColumnCellItem>{status}</TableColumnCellItem>
    },
  },

  {
    accessorKey: "notes",
    header: ({ column }) => {
      return (
        <TableColumnHeaderItem column={column}>
          Notes
          <CaretSortIcon className="h-4 w-4" />
        </TableColumnHeaderItem>
      )
    },
    cell: ({ row }) => {
      const notes: string = row.original.notes
      return <TableColumnCellItem>{notes}</TableColumnCellItem>
    },
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => {
      return (
        <TableColumnHeaderItem column={column}>
          Created
          <CaretSortIcon className="h-4 w-4" />
        </TableColumnHeaderItem>
      )
    },
    cell: ({ row }) => {
      const createdAt: Date = row.original.createdAt
      return (
        <TableColumnCellItem>
          {createdAt.toString().slice(0, 10)}
        </TableColumnCellItem>
      )
    },
  },
  {
    accessorKey: "updatedAt",
    header: ({ column }) => {
      return (
        <TableColumnHeaderItem column={column}>
          Updated
          <CaretSortIcon className="h-4 w-4" />
        </TableColumnHeaderItem>
      )
    },
    cell: ({ row }) => {
      const updatedAt: Date = row.original.updatedAt
      return (
        <TableColumnCellItem>
          {updatedAt.toString().slice(0, 10)}
        </TableColumnCellItem>
      )
    },
  },
]
