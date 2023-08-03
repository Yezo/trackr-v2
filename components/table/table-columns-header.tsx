import { FetchedJobApplications } from "@/components/table/table-columns"
import { Column } from "@tanstack/react-table"

type Props = {
  children: React.ReactNode
  column: Column<FetchedJobApplications, unknown>
}
export const TableColumnHeaderItem = ({ children, column }: Props) => {
  return (
    <div
      className="flex min-w-full cursor-pointer items-center gap-2 rounded px-4 py-2 transition-colors hover:bg-primary/5 hover:text-secondary-foreground"
      onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
    >
      {children}
    </div>
  )
}
