type Props = {
  children: React.ReactNode
}
export const TableColumnCellBoxItem = ({ children }: Props) => {
  const classes =
    "ml-4 min-w-[90px] max-w-fit rounded-full py-0.5 text-center text-[0.65rem] uppercase tracking-widest text-white ring-2 ring-black/[] shadow-sm"
  if (children === "Remote") {
    return <div className={`${classes} bg-gray-600`}>{children}</div>
  }
  if (children === "Hybrid") {
    return <div className={`${classes} bg-stone-600`}>{children}</div>
  }
  if (children === "On-site") {
    return <div className={`${classes} bg-slate-600`}>{children}</div>
  }
  if (children === "Accepted") {
    return <div className={`${classes} bg-green-700`}>{children}</div>
  }
  if (children === "Pending") {
    return <div className={`${classes} bg-blue-600`}>{children}</div>
  }
  if (children === "Rejected") {
    return <div className={`${classes} bg-red-600`}>{children}</div>
  }
  if (children === "Interview") {
    return <div className={`${classes} bg-amber-600`}>{children}</div>
  }
  return <div className="px-4 ">{children}</div>
}
