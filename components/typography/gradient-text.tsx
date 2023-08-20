export const GradientText = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {" "}
      <span className="relative animate-text bg-gradient-to-r from-blue-600  via-sky-500  to-cyan-600 bg-clip-text font-medium text-transparent">
        {children}
      </span>{" "}
    </>
  )
}
