export type Performance = {
  userId: number
  data: PerformanceData[]
}

export const PerformanceKind = {
  1: "Cardio",
  2: "Énergie",
  3: "Endurance",
  4: "Force",
  5: "Vitesse",
  6: "Intensité",
}

export type PerformanceData = {
  value: number
  kind: keyof typeof PerformanceKind
}
