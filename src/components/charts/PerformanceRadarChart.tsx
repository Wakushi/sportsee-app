import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  Radar,
  ResponsiveContainer,
} from "recharts"
import {
  PerformanceData,
  PerformanceKindDictionary,
} from "../../types/performance"
import { CHART_SIZE } from "../../constants"

export default function PerformanceRadarChart({
  performanceData,
}: {
  performanceData: PerformanceData[]
}) {
  const formattedPerformanceData = performanceData.map((data) => {
    return {
      ...data,
      kind: PerformanceKindDictionary[data.kind],
    }
  })

  return (
    <div className="bg-dark rounded">
      <ResponsiveContainer width={CHART_SIZE} height={CHART_SIZE}>
        <RadarChart
          data={formattedPerformanceData}
          margin={{
            right: 50,
            left: 50,
          }}
        >
          <PolarGrid />
          <PolarAngleAxis
            dataKey="kind"
            tick={{
              fill: "white",
              fontSize: 14,
              fontWeight: 500,
            }}
          />
          <Radar
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}
