"use client"

import { BarChartComponent } from "@/components/charts/chart-bar"
import { PieChartComponent } from "@/components/charts/chart-pie"
import { SankeyChartComponent } from "@/components/charts/chart-sankey"
import { ChartToggle } from "@/components/charts/chart-toggle"
import { ChartDataType } from "@/types/chart"
import { useState } from "react"

export const ChartContainer = ({ data }: ChartDataType) => {
  //States
  const [currentChart, setCurrentChart] = useState("bar")

  return (
    <div className="max-h-[592px] min-h-[450px] w-full space-y-4 rounded-xl border p-10 shadow-sm">
      <div className="flex items-center px-[25px]">
        {currentChart.toLowerCase() === "bar" && <Title>Bar Chart</Title>}
        {currentChart.toLowerCase() === "pie" && <Title>Pie Chart</Title>}
        {currentChart.toLowerCase() === "sankey" && <Title>Sankey Chart</Title>}
        <ChartToggle setCurrentChart={setCurrentChart} />
      </div>

      <section>
        {currentChart.toLowerCase() === "bar" && <BarChartComponent data={data} />}
        {currentChart.toLowerCase() === "pie" && <PieChartComponent data={data} />}
        {currentChart.toLowerCase() === "sankey" && <SankeyChartComponent data={data} />}
      </section>
    </div>
  )
}

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className="hidden font-spectral text-3xl font-light sm:block">{children}</h2>
}
