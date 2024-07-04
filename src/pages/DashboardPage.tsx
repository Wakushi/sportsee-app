import { MOCK_USER_ID } from "../constants"
import { useAggregatedUserInfo } from "../services/useAggregatedUserInfo"
import KeyDataCardList from "../components/KeyDataCardList"
import PerformanceRadarChart from "../components/charts/PerformanceRadarChart"
import ActivityBarChart from "../components/charts/ActivityBarChart"
import SessionAverageLineChart from "../components/charts/SessionAverageLineChart"
import ProgressBar from "../components/charts/ProgressBar"

export default function DashboardPage() {
  const { data, loading, error } = useAggregatedUserInfo(MOCK_USER_ID)

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="text-2xl text-center">Chargement...</span>
      </div>
    )
  }

  if (error || !data) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="text-2xl text-center text-red-500">
          {error?.message}
        </span>
      </div>
    )
  }

  const { user, activity, sessionAverage, performance } = data
  const { userInfos, score, todayScore, keyData } = user

  return (
    <div className="flex flex-col p-8 m-auto">
      <WelcomeHeader username={userInfos.firstName} />
      <div className="flex flex-col-reverse xl:flex-row gap-8">
        <div className="flex flex-col gap-8">
          <div className="bg-light rounded h-[300px]">
            <ActivityBarChart sessions={activity.sessions} />
          </div>
          <div className="flex items-center justify-between gap-4">
            <SessionAverageLineChart sessions={sessionAverage.sessions} />
            <PerformanceRadarChart performanceData={performance.data} />
            <ProgressBar score={score ? score : todayScore ?? 0} />
          </div>
        </div>
        <KeyDataCardList keyData={keyData} />
      </div>
    </div>
  )
}

function WelcomeHeader({ username }: { username: string }) {
  return (
    <div className="mb-6">
      <h2 className="text-5xl mb-10">
        Bonjour <span className="text-brand">{username}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
