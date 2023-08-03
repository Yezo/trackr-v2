type Props = {
  children: React.ReactNode
}
export const TableColumnCellBoxItem = ({ children }: Props) => {
  if (children === "Remote") {
    return (
      <span className="rounded-sm bg-red-500 px-4 py-1 text-xs uppercase tracking-widest">
        {children}
      </span>
    )
  }
  if (children === "Hybrid") {
    return (
      <span className="rounded-sm bg-blue-500 px-4 py-1 text-xs uppercase tracking-widest">
        {children}
      </span>
    )
  }
  if (children === "On-site") {
    return (
      <span className="rounded-sm bg-purple-500 px-4 py-1 text-xs uppercase tracking-widest">
        {children}
      </span>
    )
  }
  return <span className="px-4 ">{children}</span>
}
