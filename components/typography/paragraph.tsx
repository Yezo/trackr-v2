export const Paragraph = ({
  children,
  position,
  size,
}: {
  children: React.ReactNode
  position?: string
  size?: string
}) => {
  return (
    <p
      className={` tracking-tight text-muted-foreground ${
        position === "center" ? "text-center" : ""
      } ${size === "sm" ? "text-sm" : ""} `}
    >
      {children}
    </p>
  )
}
