import { Separator } from "@/components/ui/separator"
import { Layer, Rectangle } from "recharts"

export const chartColors = ["#c9c2a9", "#A3C9A8", "#84B59F", "#69A297", "#50808E"]

export const handleBG = (value: string) => {
  //Just tailwind things
  const pendingColor = "bg-[#C9C2A9]"
  const rejectedColor = "bg-[#A3C9A8]"
  const interviewingColor = "bg-[#84B59F]"
  const acceptedColor = "bg-[#69A297]"
  const totalColor = "bg-[#50808E]"
  const defaultColor = "bg-[#8884d8]"

  if (value.toLowerCase().trim() === "pending") {
    return pendingColor
  }
  if (value.toLowerCase().trim() === "rejected") {
    return rejectedColor
  }
  if (value.toLowerCase().trim() === "interviewing") {
    return interviewingColor
  }
  if (value.toLowerCase().trim() === "accepted") {
    return acceptedColor
  }
  if (value.toLowerCase().trim() === "total") {
    return totalColor
  }
  return defaultColor
}

export const BarChartTooltip = ({
  active,
  payload,
  label,
}: {
  active: any
  payload: any
  label: any
}) => {
  if (active && payload && payload.length) {
    return (
      <div className="space-y-2 rounded-lg bg-primary-foreground p-4 text-primary shadow-md ring-1 ring-black/[0.2]">
        <div className=" text-center text-xs uppercase tracking-wide">Applications</div>

        <Separator />

        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 ${handleBG(label)}`} />
          <span className="">{`${label} Applications:`}</span>
          <span className="font-bold">{payload[0].value}</span>
        </div>
      </div>
    )
  }

  return null
}

export const PieTooltip = ({ active, payload }: { active: any; payload: any; label: any }) => {
  if (active) {
    return (
      <div className="space-y-2 rounded-lg bg-primary-foreground p-4 font-inter text-sm font-medium tracking-tight text-primary shadow-md ring-1 ring-black/[0.2]">
        <div className=" text-center text-xs uppercase tracking-wide">Applications</div>

        <Separator />

        <div className="flex items-center gap-2">
          <div className={`h-2 w-2 ${handleBG(payload[0].name)}`} />
          <span className="">{`${payload[0].name} Applications:`}</span>
          <span className="font-bold">{payload[0].value}</span>
        </div>
      </div>
    )
  }
  return null
}

export const SankeyTooltip = ({ active, payload }: { active: any; payload: any; label: any }) => {
  if (active) {
    return (
      <div className="space-y-2 rounded-lg bg-primary-foreground p-4 font-inter text-sm font-medium tracking-tight text-primary shadow-md ring-1 ring-black/[0.2]">
        <div className=" text-center text-xs uppercase tracking-wide">Applications</div>

        <Separator />

        <div className="flex items-center gap-2">
          <div className="h-2 w-2 bg-[#8884d8]" />
          <span className="">{`${payload[0].name.slice(21, 500)} Applications:`}</span>
          <span className="font-bold">{payload[0].value}</span>
        </div>
      </div>
    )
  }
  return null
}

export const SankeyNode = ({
  x,
  y,
  width,
  height,
  index,
  payload,
  containerWidth,
  theme,
}: {
  x?: any
  y?: any
  width?: any
  height?: any
  index?: any
  payload?: any
  containerWidth: any
  theme?: string
}) => {
  const isOut = x + width + 6 > containerWidth

  return (
    <Layer key={`CustomNode${index}`}>
      <Rectangle
        x={x}
        y={y}
        width={width}
        height={height}
        fill={`${theme === "light" ? "#1E293B" : "#7D8189"}`}
        fillOpacity="1"
      />

      <text
        textAnchor={isOut ? "end" : "start"}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2}
        fontSize="14"
        fill={theme === "dark" ? "white" : "black"}
        stroke="#ff"
      >
        {payload.name}
      </text>

      <text
        textAnchor={isOut ? "end" : "start"}
        x={isOut ? x - 6 : x + width + 6}
        y={y + height / 2 + 13}
        fontSize="12"
        stroke="#fff"
        strokeOpacity="0.5"
        fill={theme === "dark" ? "white" : "black"}
        className="text-white"
      >
        {payload.value}
      </text>
    </Layer>
  )
}
