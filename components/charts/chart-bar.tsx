"use client"

import { BarChartTooltip, chartColors } from "@/components/charts/chart-utils"
import { ChartDataType } from "@/types/chart"
import {
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar,
  ResponsiveContainer,
  Cell,
} from "recharts"

export const BarChartComponent = ({ data }: ChartDataType) => {
  return (
    <div style={{ width: "100%", height: 480 }}>
      <ResponsiveContainer>
        <BarChart
          width={1030}
          height={480}
          data={data}
          className="font-inter text-sm font-medium tracking-tight"
          margin={{
            top: 10,
            right: 10,
            left: 10,
            bottom: 10,
          }}
          barCategoryGap={"25%"}
        >
          <CartesianGrid strokeDasharray="3 3 " vertical={false} />
          <XAxis
            dataKey="name"
            className="font-medium text-foreground"
            label={{ value: "Application Type", position: "insideBottom" }}
            height={60}
            tickLine={false}
          />
          <YAxis
            label={{ value: "Amount", angle: -90, position: "insideLeft" }}
            height={30}
            tickLine={false}
            tickCount={data.length + 1}
          />
          <Tooltip
            cursor={{ opacity: 0.1 }}
            //@ts-ignore because Recharts autopasses props for us
            content={<BarChartTooltip />}
          />
          {/* <Legend verticalAlign="top" height={36} /> */}
          <Bar dataKey="value" fill="#8884d8" name="Amount" animationDuration={1250}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={chartColors[index % 20]} stroke="#494949" />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
