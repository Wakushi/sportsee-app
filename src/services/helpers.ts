import { User } from "../types/user"

function getFullName(user: User): string {
  const { firstName, lastName } = user.userInfos
  return `${firstName} ${lastName}`
}

export { getFullName }
