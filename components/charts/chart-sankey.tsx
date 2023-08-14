"use client"

import { SankeyNode, SankeyTooltip } from "@/components/charts/chart-utils"
import { ChartDataType } from "@/types/chart"
import { useTheme } from "next-themes"
import { Tooltip, ResponsiveContainer, Sankey } from "recharts"

export const SankeyChartComponent = ({ data }: ChartDataType) => {
  //States
  const { theme } = useTheme()

  //Data
  const data0 = {
    nodes: [
      {
        name: "Total Applications",
      },
      {
        name: "Pending",
      },
      {
        name: "Interviews",
      },
      {
        name: "Rejected",
      },
      {
        name: "Accepted",
      },
    ],
    links: [
      {
        source: 0,
        target: 1,
        value: data[0].value,
      },
      {
        source: 0,
        target: 2,
        value: data[2].value,
      },
      {
        source: 0,
        target: 3,
        value: data[1].value,
      },
      {
        source: 0,
        target: 4,
        value: data[3].value,
      },
    ],
  }

  return (
    <div style={{ width: "100%", height: 480 }}>
      <ResponsiveContainer>
        <Sankey
          width={960}
          height={500}
          margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
          data={data0}
          nodeWidth={10}
          nodePadding={60}
          linkCurvature={0.61}
          iterations={64}
          link={{ stroke: "#50808E" }}
          node={<SankeyNode containerWidth={960} theme={theme} />}
        >
          <defs>
            <linearGradient id={"linkGradient"}>
              <stop offset="0%" stopColor="rgba(0, 136, 254, 0.5)" />
              <stop offset="100%" stopColor="rgba(0, 197, 159, 0.3)" />
            </linearGradient>
          </defs>
          <Tooltip
            cursor={{ opacity: 0.1 }}
            //@ts-ignore because Recharts autopasses props for us
            content={<SankeyTooltip />}
          />
        </Sankey>
      </ResponsiveContainer>
    </div>
  )
}
