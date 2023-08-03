type Props = {
  children: React.ReactNode
}
export const TableColumnCellItem = ({ children }: Props) => {
  return <div className="px-4">{children}</div>
}
