export type Performance = {
  userId: number
  data: PerformanceData[]
}

export const PerformanceKindDictionary = {
  1: "Cardio",
  2: "Énergie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
} as const

export type PerformanceKind = keyof typeof PerformanceKindDictionary

export type PerformanceData = {
  value: number
  kind: PerformanceKind
}
