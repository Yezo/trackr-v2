import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Table } from "@tanstack/react-table"
import { MixerVerticalIcon } from "@radix-ui/react-icons"

interface DataTableHeaderBar<TData> {
  table: Table<TData>
}

export default function DataTableColumnVisibility<TData>({ table }: DataTableHeaderBar<TData>) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto flex items-center gap-2 text-xs font-medium">
          <MixerVerticalIcon /> Toggle Columns
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-36">
        <DropdownMenuLabel className="font-medium">Categories</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize "
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {column.id.toLowerCase() === "company" && "Company"}
                {column.id.toLowerCase() === "jobtitle" && "Job Title"}
                {column.id.toLowerCase() === "link" && "Link"}
                {column.id.toLowerCase() === "remote" && "Remote"}
                {column.id.toLowerCase() === "status" && "Status"}
                {column.id.toLowerCase() === "notes" && "Notes"}
                {column.id.toLowerCase() === "createdat" && "Added On"}
                {column.id.toLowerCase() === "updatedat" && "Updated On"}
              </DropdownMenuCheckboxItem>
            )
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
