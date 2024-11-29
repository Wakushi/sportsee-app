import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts"
import { CHART_SIZE } from "../../constants"

export default function ProgressBarAlt({ score }: { score: number }) {
  const data = [{ name: "score", value: score }]

  const circleSize = 240

  return (
    <div className="bg-light rounded">
      <ResponsiveContainer
        className="flex items-center justify-center"
        width={CHART_SIZE}
        height={CHART_SIZE}
      >
        <div className="relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white h-[195px] w-[195px] rounded-full"></div>
          <RadialBarChart
            width={circleSize}
            height={circleSize}
            cx={circleSize / 2}
            cy={circleSize / 2}
            innerRadius={100}
            outerRadius={100}
            barSize={13}
            data={data}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis
              type="number"
              domain={[0, 1]}
              angleAxisId={0}
              tick={false}
            />
            <RadialBar
              dataKey="value"
              cornerRadius={circleSize / 2}
              fill="#FF0101"
            />
          </RadialBarChart>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col text-center justify-center">
            <span className="font-bold text-2xl">{score * 100}%</span>
            <span className="text-[#74798C] w-[90%]">de votre objectif</span>
          </div>
        </div>
      </ResponsiveContainer>
    </div>
  )
}
