import {
  ACTIVITY_ENDPOINT,
  PERFORMANCE_ENDPOINT,
  SESSION_AVERAGE_ENDPOINT,
  USER_BASE_ENDPOINT,
} from "../constants"
import { Activity } from "../types/activity"
import { Performance } from "../types/performance"
import { SessionAverage } from "../types/session-average"
import { User } from "../types/user"
import { IDatabase } from "./database.interface"
import {
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
} from "../data/data"

export class Database implements IDatabase {
  private static _instance: Database

  private constructor() {}

  public static getInstance(): Database {
    if (!Database._instance) {
      Database._instance = new Database()
    }
    return Database._instance
  }

  async getUserById(userId: string) {
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

  async getUserActivity(userId: string) {
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

  async getUserSessionAverage(userId: string) {
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

  async getUserPerformance(userId: string) {
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
}

export class MockDatabase implements IDatabase {
  private static _instance: MockDatabase

  private SIMULATED_DELAY = 1000

  private constructor() {}

  public static getInstance(): MockDatabase {
    if (!MockDatabase._instance) {
      MockDatabase._instance = new MockDatabase()
    }
    return MockDatabase._instance
  }

  async getUserById(userId: string): Promise<User> {
    return new Promise(async (resolve, reject) => {
      setTimeout(() => {
        const user = USER_MAIN_DATA.find((u) => u.id === +userId)
        if (user) {
          resolve(user)
        } else {
          reject(new Error("User not found"))
        }
      }, this.SIMULATED_DELAY)
    })
  }

  async getUserActivity(userId: string): Promise<Activity> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userActivity = USER_ACTIVITY.find((u) => u.userId === +userId)
        if (userActivity) {
          resolve(userActivity)
        } else {
          reject(new Error("User activity not found"))
        }
      }, this.SIMULATED_DELAY)
    })
  }

  async getUserSessionAverage(userId: string): Promise<SessionAverage> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userSessionAverage = USER_AVERAGE_SESSIONS.find(
          (u) => u.userId === +userId
        )
        if (userSessionAverage) {
          resolve(userSessionAverage)
        } else {
          reject(new Error("User not found"))
        }
      }, this.SIMULATED_DELAY)
    })
  }

  async getUserPerformance(userId: string): Promise<Performance> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const userPerformance = USER_PERFORMANCE.find(
          (u) => u.userId === +userId
        )
        if (userPerformance) {
          resolve(userPerformance as Performance)
        } else {
          reject(new Error("User not found"))
        }
      }, this.SIMULATED_DELAY)
    })
  }
}
