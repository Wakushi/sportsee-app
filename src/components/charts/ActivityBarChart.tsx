import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { ActivitySession } from "../../types/activity"

export default function ActivityBarChart({
  sessions,
}: {
  sessions: ActivitySession[]
}) {
  const formattedSessions = sessions.map((session, i) => {
    session.day = (i + 1).toString()
    return session
  })

  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart
        data={formattedSessions}
        margin={{ top: 20, bottom: 20 }}
        barCategoryGap={50}
      >
        <CartesianGrid strokeDasharray="2 3" />
        <XAxis dataKey="day" />
        <Tooltip content={<CustomTooltip />} />
        <Legend
          align="right"
          verticalAlign="top"
          iconType="circle"
          height={40}
        />
        <Bar dataKey="kilogram" fill="#282D30" radius={[10, 10, 0, 0]} />
        <Bar dataKey="calories" fill="#E60000" radius={[10, 10, 0, 0]} />
        <YAxis />
      </BarChart>
    </ResponsiveContainer>
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
