export type Activity = {
  userId: number
  sessions: ActivitySession[]
}

export type ActivitySession = {
  day: string
  kilogram: number
  calories: number
}
