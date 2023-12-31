import { Input } from "@/components/ui/input"
import { Table } from "@tanstack/react-table"

interface DataTableHeaderBar<TData> {
  table: Table<TData>
}

export default function DataTableInputFilter<TData>({ table }: DataTableHeaderBar<TData>) {
  return (
    <div className="hidden min-w-[15rem] items-center px-2 py-4 sm:flex">
      <Input
        placeholder="Filter companies..."
        value={(table.getColumn("company")?.getFilterValue() as string) ?? ""}
        onChange={(event) => table.getColumn("company")?.setFilterValue(event.target.value)}
        className="max-w-sm rounded-full px-4 text-xs"
      />
    </div>
  )
}
