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
import { fetchHandler, validatePerformance } from "./helper"

export class Database implements IDatabase {
  private static _instance: Database

  private constructor() {}

  public static getInstance(): Database {
    if (!Database._instance) {
      Database._instance = new Database()
    }
    return Database._instance
  }

  async getUserById(userId: string): Promise<User> {
    return fetchHandler(`${USER_BASE_ENDPOINT}/${userId}`, "User")
  }

  async getUserActivity(userId: string): Promise<Activity> {
    return fetchHandler(
      `${USER_BASE_ENDPOINT}/${userId}${ACTIVITY_ENDPOINT}`,
      "User activity"
    )
  }

  async getUserSessionAverage(userId: string): Promise<SessionAverage> {
    return fetchHandler(
      `${USER_BASE_ENDPOINT}/${userId}${SESSION_AVERAGE_ENDPOINT}`,
      "User session average"
    )
  }

  async getUserPerformance(userId: string): Promise<Performance> {
    const response = await fetchHandler(
      `${USER_BASE_ENDPOINT}/${userId}${PERFORMANCE_ENDPOINT}`,
      "User performance"
    )

    return validatePerformance(response)
  }
}
