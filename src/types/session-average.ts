export type SessionAverage = {
  userId: number
  sessions: Session[]
}

export type Session = {
  day: number
  sessionLength: number
}
