import {
  ACTIVITY_ENDPOINT,
  PERFORMANCE_ENDPOINT,
  SESSION_AVERAGE_ENDPOINT,
  USER_BASE_ENDPOINT,
} from "../constants"
import { Activity } from "../types/activity"
import { Performance } from "../types/performance"
import { SessionAverage } from "../types/session-average"
import { AggregatedUserInfo, User } from "../types/user"

export default class UserService {
  static async getUserById(userId: string) {
    try {
      const response = await fetch(`${USER_BASE_ENDPOINT}/${userId}`)
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User not found (404)")
        } else if (response.status === 500) {
          throw new Error("Internal Server Error (500)")
        } else {
          throw new Error(`Unexpected error: ${response.statusText}`)
        }
      }
      const { data } = await response.json()
      return data
    } catch (error) {
      console.error("Error fetching user:", error)
      throw error
    }
  }

  static async getUserActivity(userId: string) {
    try {
      const response = await fetch(
        `${USER_BASE_ENDPOINT}/${userId}${ACTIVITY_ENDPOINT}`
      )
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User activity not found (404)")
        } else if (response.status === 500) {
          throw new Error("Internal Server Error (500)")
        } else {
          throw new Error(`Unexpected error: ${response.statusText}`)
        }
      }
      const { data } = await response.json()
      return data
    } catch (error) {
      console.error("Error fetching user activity:", error)
      throw error
    }
  }

  static async getUserSessionAverage(userId: string) {
    try {
      const response = await fetch(
        `${USER_BASE_ENDPOINT}/${userId}${SESSION_AVERAGE_ENDPOINT}`
      )
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User average session not found (404)")
        } else if (response.status === 500) {
          throw new Error("Internal Server Error (500)")
        } else {
          throw new Error(`Unexpected error: ${response.statusText}`)
        }
      }
      const { data } = await response.json()
      return data
    } catch (error) {
      console.error("Error fetching user session average:", error)
      throw error
    }
  }

  static async getUserPerformance(userId: string) {
    try {
      const response = await fetch(
        `${USER_BASE_ENDPOINT}/${userId}${PERFORMANCE_ENDPOINT}`
      )
      if (!response.ok) {
        if (response.status === 404) {
          throw new Error("User performance not found (404)")
        } else if (response.status === 500) {
          throw new Error("Internal Server Error (500)")
        } else {
          throw new Error(`Unexpected error: ${response.statusText}`)
        }
      }
      const { data } = await response.json()
      return data
    } catch (error) {
      console.error("Error fetching user performance:", error)
      throw error
    }
  }

  static async getAggregatedUserInfo(
    userId: string
  ): Promise<AggregatedUserInfo> {
    return Promise.all([
      UserService.getUserById(userId),
      UserService.getUserActivity(userId),
      UserService.getUserSessionAverage(userId),
      UserService.getUserPerformance(userId),
    ]).then((values) => {
      return {
        user: values[0],
        activity: values[1],
        sessionAverage: values[2],
        performance: values[3],
      }
    })
  }
}
