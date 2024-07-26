import { useEffect, useState } from "react"
import { AggregatedUserInfo } from "../types/user"
import { IDatabase } from "./database.interface"

export function useAggregatedUserInfo(userId: string, database: IDatabase) {
  const [data, setData] = useState<AggregatedUserInfo>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (!userId) return

    setLoading(true)

    async function getAggregatedUserInfo(userId: string) {
      try {
        const [user, activity, sessionAverage, performance] = await Promise.all(
          [
            database.getUserById(userId),
            database.getUserActivity(userId),
            database.getUserSessionAverage(userId),
            database.getUserPerformance(userId),
          ]
        )
        setData({ user, activity, sessionAverage, performance })
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    getAggregatedUserInfo(userId)
  }, [userId])

  return { data, loading, error }
}
