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
