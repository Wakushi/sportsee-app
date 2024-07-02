import { useEffect, useState } from "react"
import UserService from "../services/user-service"
import { User } from "../types/user"
import { Activity } from "../types/activity"
import { SessionAverage } from "../types/session-average"

const MOCK_USER_ID = "18"

export default function HomePage() {
  const [user, setUser] = useState<User>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string>("")

  useEffect(() => {
    UserService.getUserById(MOCK_USER_ID)
      .then((user: User) => {
        setUser(user)
        setLoading(false)
      })
      .catch((error: Error) => {
        setError(error.message)
        setLoading(false)
      })

    UserService.getUserActivity(MOCK_USER_ID).then((activity: Activity) => {
      console.log("User activity:", activity)
    })

    UserService.getUserSessionAverage(MOCK_USER_ID).then(
      (average: SessionAverage) => {
        console.log("User average:", average)
      }
    )

    UserService.getUserPerformance(MOCK_USER_ID).then((performance) => {
      console.log("User performance:", performance)
    })
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="text-2xl text-center">Chargement...</span>
      </div>
    )
  }

  if (error || !user) {
    return (
      <div className="flex justify-center items-center w-full">
        <span className="text-2xl text-center text-red-500">{error}</span>
      </div>
    )
  }

  return (
    <div className="px-[6.70rem] py-[4.25rem]">
      <WelcomeHeader username={user.userInfos.firstName} />
      <section></section>
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
