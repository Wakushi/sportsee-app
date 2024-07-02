import { KeyData, UserKeyData } from "../types/user"
import KeyDataCard from "./KeyDataCard"

export default function KeyDataCardList({ keyData }: { keyData: UserKeyData }) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData
  return (
    <section className="flex flex-col gap-10">
      <KeyDataCard value={calorieCount} keyData={KeyData.CALORIES} />
      <KeyDataCard value={proteinCount} keyData={KeyData.PROTEIN} />
      <KeyDataCard value={carbohydrateCount} keyData={KeyData.CARBOHYDRATE} />
      <KeyDataCard value={lipidCount} keyData={KeyData.LIPID} />
    </section>
  )
}
