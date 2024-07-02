import {
  ACTIVITY_ENDPOINT,
  PERFORMANCE_ENDPOINT,
  SESSION_AVERAGE_ENDPOINT,
  USER_BASE_ENDPOINT,
} from "../constants"

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
          throw new Error("User performancde not found (404)")
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
}
