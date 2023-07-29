import { FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

type Props = {
  children: React.ReactNode
  errorPosition: "top" | "bottom"
  title: string
  widthFull?: boolean
}

export default function FormFieldItem({ children, errorPosition, title, widthFull }: Props) {
  return (
    <FormItem className={`${widthFull === true && "basis-1/2"}`}>
      <div className="flex gap-2 items-center min-h-[16px] pb-1">
        <FormLabel className="text-foreground">{title}</FormLabel>
        {errorPosition === "top" && <FormMessage className="dark:text-red-600 text-xs" />}
      </div>
      <FormControl>{children}</FormControl>
      {errorPosition === "bottom" && <FormMessage className="dark:text-red-600 text-xs" />}
    </FormItem>
  )
}
