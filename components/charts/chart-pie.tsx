import { PieTooltip, chartColors } from "@/components/charts/chart-utils"
import { ChartDataType } from "@/types/chart"
import { PieChart, Pie, ResponsiveContainer, Cell, Tooltip, Legend } from "recharts"

export const PieChartComponent = ({ data }: ChartDataType) => {
  return (
    <div style={{ width: "100%", height: 480 }}>
      <ResponsiveContainer>
        <PieChart width={1030} height={480}>
          <Pie
            data={data}
            dataKey="value"
            innerRadius={50}
            outerRadius={90}
            fill="#82ca9d"
            label
            labelLine={false}
            stroke="#494949"
            animationDuration={2000}
            animationBegin={150}
            animationEasing={"ease"}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
            ))}
          </Pie>
          <Tooltip
            cursor={{ opacity: 0.1 }}
            //@ts-ignore because Recharts autopasses props for us
            content={<PieTooltip />}
          />
          <Legend layout={"vertical"} verticalAlign={"top"} align={"center"} className="text-xs" />
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
