export type Performance = {
  userId: number
  data: PerformanceData[]
}

export const PerformanceKind = {
  1: "cardio",
  2: "energy",
  3: "endurance",
  4: "strength",
  5: "speed",
  6: "intensity",
}

export type PerformanceData = {
  value: number
  kind: keyof typeof PerformanceKind
}
