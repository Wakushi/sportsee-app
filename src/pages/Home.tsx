import { useEffect, useState } from "react"
import { AggregatedUserInfo } from "../types/user"
import { MOCK_USER_ID } from "../constants"
import UserService from "../services/user-service"
import KeyDataCardList from "../components/KeyDataCardList"
import ActivityBarChart from "../components/BarChart"

export default function HomePage() {
  const [aggregatedUserInfo, setAggregatedUserInfo] =
    useState<AggregatedUserInfo>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    UserService.getAggregatedUserInfo(MOCK_USER_ID)
      .then((aggregatedData: AggregatedUserInfo) => {
        setAggregatedUserInfo(aggregatedData)
      })
      .catch((error: Error) => {
        setError(error.message)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="text-2xl text-center">Chargement...</span>
      </div>
    )
  }

  if (error || !aggregatedUserInfo) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="text-2xl text-center text-red-500">{error}</span>
      </div>
    )
  }

  const { user, activity, sessionAverage, performance } = aggregatedUserInfo

  return (
    <div className="flex flex-col w-full justify-between p-8">
      <WelcomeHeader username={user.userInfos.firstName} />
      <div className="w-full flex gap-8">
        <div className="flex flex-col gap-8">
          <section className="bg-light rounded">
            <ActivityBarChart sessions={activity.sessions} />
          </section>
          <section className="bg-light rounded">
            <ActivityBarChart sessions={activity.sessions} />
          </section>
        </div>
        <KeyDataCardList keyData={user.keyData} />
      </div>
    </div>
  )
}

function WelcomeHeader({ username }: { username: string }) {
  return (
    <div>
      <h2 className="text-5xl mb-10">
        Bonjour <span className="text-brand">{username}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}
