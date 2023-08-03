type Props = {
  children: React.ReactNode
}
export const TableColumnCellBoxItem = ({ children }: Props) => {
  if (children === "Remote") {
    return (
      <div className="ml-4 min-w-[90px] max-w-fit rounded-full bg-red-500 py-0.5 text-center text-[0.65rem] uppercase tracking-widest">
        {children}
      </div>
    )
  }
  if (children === "Hybrid") {
    return (
      <div className="ml-4 min-w-[90px] max-w-fit rounded-full bg-blue-500 py-0.5 text-center text-[0.65rem] uppercase tracking-widest">
        {children}
      </div>
    )
  }
  if (children === "On-site") {
    return (
      <div className="ml-4 min-w-[90px] max-w-fit rounded-full bg-purple-500 py-0.5 text-center text-[0.65rem] uppercase tracking-widest">
        {children}
      </div>
    )
  }
  return <div className="px-4 ">{children}</div>
}
