import {
  Line,
  LineChart,
  Rectangle,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import { Session } from "../../types/session-average"
import { CHART_SIZE } from "../../constants"

export default function SessionAverageLineChart({
  sessions,
}: {
  sessions: Session[]
}) {
  type FormattedSession = {
    day: string
    sessionLength: number
  }

  const formattedSessions: FormattedSession[] = sessions.map(
    ({ day, sessionLength }) => {
      const weekDay = new Date(new Date().setDate(day)).toLocaleDateString(
        "fr-FR",
        {
          weekday: "short",
        }
      )
      return {
        day: weekDay.charAt(0).toUpperCase(),
        sessionLength: sessionLength,
      }
    }
  )

  return (
    <div className="relative bg-brand rounded flex-1">
      <h3 className="text-white opacity-60 absolute z-[9] top-2 left-2 xl:top-8 xl:left-8">
        Durée moyenne des <br /> sessions
      </h3>
      <ResponsiveContainer width={CHART_SIZE} height={CHART_SIZE}>
        <LineChart
          data={formattedSessions}
          margin={{ right: 10, bottom: 20, left: 10 }}
        >
          <XAxis
            className="relative z-[1]"
            dataKey="day"
            stroke="rgba(255, 255, 255, 0.6)"
            axisLine={false}
            tickLine={false}
            tick={{
              fontWeight: 500,
            }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 60"]}
            hide={true}
          />
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="rgba(255, 255, 255, 0.6)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              stroke: "rgba(255,255,255, 0.6)",
              strokeWidth: 10,
              r: 5,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
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
    const minutes = payload[0].value
    return (
      <div className="bg-white p-3">
        <span>{minutes} min</span>
      </div>
    )
  }

  return null
}

const CustomCursor = ({ points, width, height }: any) => {
  const { x, y } = points[0]
  return (
    <Rectangle
      fill="#e60001"
      stroke="#e60001"
      className="opacity-70"
      x={x}
      y={y}
      width={width}
      height={280}
    />
  )
}
