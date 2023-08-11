import Link from "next/link"

type Props = {
  currentPage: string
  currentPageURL: string
}
export const HomeHeader = ({ currentPage, currentPageURL }: Props) => {
  return (
    <div className="space-y-4 ">
      <h2 className="space-x-2 text-xs font-light">
        <Link href="/" className="text-muted-foreground">
          Home
        </Link>
        <span>/</span>
        <Link href={currentPageURL}>{currentPage}</Link>
      </h2>

      <h1 className="mt-4 font-spectral text-3xl font-light">{currentPage}</h1>
    </div>
  )
}
