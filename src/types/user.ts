import { Activity } from "./activity"
import { Performance } from "./performance"
import { SessionAverage } from "./session-average"

export type User = {
  id: number
  userInfos: UserInfos
  score?: number
  todayScore?: number
  keyData: UserKeyData
}

export type UserInfos = {
  firstName: string
  lastName: string
  age: number
}

export type UserKeyData = {
  calorieCount: number
  proteinCount: number
  carbohydrateCount: number
  lipidCount: number
}

export enum KeyData {
  CALORIES = "Calories",
  PROTEIN = "Proteines",
  CARBOHYDRATE = "Glucides",
  LIPID = "Lipides",
}

export type AggregatedUserInfo = {
  user: User
  activity: Activity
  sessionAverage: SessionAverage
  performance: Performance
}
