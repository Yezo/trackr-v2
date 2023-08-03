import { FetchedJobApplications } from "@/components/table/table-columns"
import { Column } from "@tanstack/react-table"

type Props = {
  children: React.ReactNode
  column: Column<FetchedJobApplications, unknown>
}
export const TableColumnHeaderItem = ({ children, column }: Props) => {
  return (
    <span
      className="flex items-center gap-2 cursor-pointer hover:bg-primary/5 py-2 px-4 min-w-full transition-colors hover:text-secondary-foreground my-1 rounded"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {children}
    </span>
  )
}
