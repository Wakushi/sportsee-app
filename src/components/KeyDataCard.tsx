import { KeyData } from "../types/user"

export default function KeyDataCard({
  value,
  keyData,
}: {
  value: number
  keyData: KeyData
}) {
  const metric = keyData === KeyData.CALORIES ? "kCal" : "g"

  const cardDesigns = {
    Calories: {
      icon: "energy",
      colorClass: "bg-light-red",
    },
    Proteines: {
      icon: "chicken",
      colorClass: "bg-light-blue",
    },
    Glucides: {
      icon: "apple",
      colorClass: "bg-light-yellow",
    },
    Lipides: {
      icon: "cheeseburger",
      colorClass: "bg-light-pink",
    },
  }

  const { icon, colorClass } = cardDesigns[keyData]

  return (
    <article className="flex items-center p-8 gap-6 bg-light rounded">
      <div className={`p-5 rounded ${colorClass}`}>
        <img
          className="min-h-[20px] min-w-[20px]"
          src={`/images/icons/${icon}.svg`}
          alt={`${keyData} icon`}
        />
      </div>
      <div className="flex flex-col">
        <span>
          {value}
          {metric}
        </span>
        <span>{keyData}</span>
      </div>
    </article>
  )
}
