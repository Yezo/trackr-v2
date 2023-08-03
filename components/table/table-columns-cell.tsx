type Props = {
  children: React.ReactNode;
};
export const TableColumnCellItem = ({ children }: Props) => {
  return <span className="px-4 ">{children}</span>;
};
