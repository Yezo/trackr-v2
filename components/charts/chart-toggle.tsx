import { Button } from "@/components/ui/button"
import { MixerVerticalIcon } from "@radix-ui/react-icons"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu"
import { SetStateAction } from "react"

type Props = {
  setCurrentChart: React.Dispatch<SetStateAction<string>>
}

export const ChartToggle = ({ setCurrentChart }: Props) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="ml-auto flex items-center gap-2 text-xs font-medium">
          <MixerVerticalIcon />
          <span>Chart Types</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="center" className="w-36">
        <DropdownMenuLabel className="font-medium">Chart Types</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => setCurrentChart("bar")}>Bar Chart</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCurrentChart("pie")}>Pie Chart</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setCurrentChart("sankey")} className="hidden xl:block">
          Sankey Chart
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
