import { MOCK_USER_ID } from "../constants"
import KeyDataCardList from "../components/KeyDataCardList"
import ActivityBarChart from "../components/ActivityBarChart"
import SessionAverageLineChart from "../components/SessionAverageLineChart"
import { useAggregatedUserInfo } from "../services/useAggregatedUserInfo"

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

  return (
    <div className="flex flex-col w-full p-8">
      <WelcomeHeader username={user.userInfos.firstName} />
      <div className="w-full flex gap-8">
        <div className="flex flex-col gap-8">
          <div className="bg-light rounded h-[300px]">
            <ActivityBarChart sessions={activity.sessions} />
          </div>
          <div className="flex items-center justify-between gap-4">
            <SessionAverageLineChart sessions={sessionAverage.sessions} />
            <SessionAverageLineChart sessions={sessionAverage.sessions} />
            <SessionAverageLineChart sessions={sessionAverage.sessions} />
          </div>
        </div>
        <KeyDataCardList keyData={user.keyData} />
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