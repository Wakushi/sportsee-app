export type User = {
  id: number
  userInfos: UserInfos
  score: number
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
