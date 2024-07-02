import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ActivitySession } from "../types/activity"

export default function ActivityBarChart({
  sessions,
}: {
  sessions: ActivitySession[]
}) {
  return (
    <BarChart
      width={830}
      height={280}
      data={sessions}
      margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
      barCategoryGap={60}
    >
      <CartesianGrid strokeDasharray="2 3" />
      <XAxis dataKey="day" />
      <Tooltip content={<CustomTooltip />} />
      <Legend align="right" verticalAlign="top" iconType="circle" height={40} />
      <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
      <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
      <YAxis />
    </BarChart>
  )
}

const CustomTooltip = ({
  active,
  payload,
}: {
  active?: any
  payload?: any
  label?: any
}) => {
  if (active && payload && payload.length) {
    const kilograms = payload[0].value
    const calories = payload[1].value
    return (
      <div className="bg-brand-light flex flex-col items-center justify-center gap-4 py-4 px-2 text-white">
        <span>{kilograms}kg</span>
        <span>{calories}Kcal</span>
      </div>
    )
  }

  return null
}
