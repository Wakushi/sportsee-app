import { useEffect, useState } from "react"
import { AggregatedUserInfo } from "../types/user"
import {
  getUserActivity,
  getUserById,
  getUserPerformance,
  getUserSessionAverage,
} from "./user-service"

export function useAggregatedUserInfo(userId: string) {
  const [data, setData] = useState<AggregatedUserInfo>()
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error>()

  useEffect(() => {
    if (!userId) return

    setLoading(true)

    async function aggregatedUserInfo(userId: string) {
      try {
        const [user, activity, sessionAverage, performance] = await Promise.all(
          [
            getUserById(userId),
            getUserActivity(userId),
            getUserSessionAverage(userId),
            getUserPerformance(userId),
          ]
        )
        setData({ user, activity, sessionAverage, performance })
      } catch (error: any) {
        setError(error)
      } finally {
        setLoading(false)
      }
    }

    aggregatedUserInfo(userId)
  }, [userId])

  return { data, loading, error }
}
