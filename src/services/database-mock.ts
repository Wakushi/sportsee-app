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
import { CustomHttpError } from "../types/errors"
import { validatePerformance } from "./helper"

async function mockFetchHandler<T>(
  dataSource: Array<T & { id?: number; userId?: number }>,
  userId: string,
  errorContext: string
): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const item = dataSource.find(
        (item) => (item.id ?? item.userId) === +userId
      )

      if (item) {
        resolve(item)
      } else {
        throw new CustomHttpError(`${errorContext} not found`, 404)
      }
    }, 1000)
  })
}

export class MockDatabase implements IDatabase {
  private static _instance: MockDatabase

  private constructor() {}

  public static getInstance(): MockDatabase {
    if (!MockDatabase._instance) {
      MockDatabase._instance = new MockDatabase()
    }
    return MockDatabase._instance
  }

  async getUserById(userId: string): Promise<User> {
    return mockFetchHandler(USER_MAIN_DATA, userId, "User")
  }

  async getUserActivity(userId: string): Promise<Activity> {
    return mockFetchHandler(USER_ACTIVITY, userId, "User activity")
  }

  async getUserSessionAverage(userId: string): Promise<SessionAverage> {
    return mockFetchHandler(
      USER_AVERAGE_SESSIONS,
      userId,
      "User session average"
    )
  }

  async getUserPerformance(userId: string): Promise<Performance> {
    const performance = await mockFetchHandler(
      USER_PERFORMANCE,
      userId,
      "User performance"
    )
    return validatePerformance(performance)
  }
}
