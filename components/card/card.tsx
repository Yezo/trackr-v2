import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

type Props = {
  title: string
  description: string
  icon: JSX.Element
  children?: React.ReactNode
  currentNumber?: number
  totalNumber?: number
}
export const CardComponent = ({
  title,
  description,
  children,
  icon,
  currentNumber,
  totalNumber,
}: Props) => {
  return (
    <Card className="h-[185px] w-[169px] shadow-sm sm:w-[175px] md:w-[250px] lg:h-[165px] lg:w-[325px]">
      <CardHeader>
        <CardTitle className="flex items-center justify-between text-xl font-normal tracking-normal">
          {title}
          {icon}
        </CardTitle>
        <CardDescription className="text-xs tracking-tight">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex gap-1 font-inter text-3xl font-semibold">
        <span>{currentNumber}</span>
        <span className="mt-1 text-xs text-muted-foreground">/</span>
        <span className="mt-1 text-xs text-muted-foreground">{totalNumber}</span>
      </CardContent>
    </Card>
  )
}
