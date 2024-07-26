import { Activity } from "../types/activity"
import { Performance } from "../types/performance"
import { SessionAverage } from "../types/session-average"
import { User } from "../types/user"

export interface IDatabase {
  getUserById(userId: string): Promise<User>
  getUserActivity(userId: string): Promise<Activity>
  getUserSessionAverage(userId: string): Promise<SessionAverage>
  getUserPerformance(userId: string): Promise<Performance>
}
