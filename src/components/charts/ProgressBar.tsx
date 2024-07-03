import { CircularProgressbar, buildStyles } from "react-circular-progressbar"
import "react-circular-progressbar/dist/styles.css"
import { CHART_SIZE } from "../../constants"

export default function ProgressBar({ score }: { score: number }) {
  return (
    <div
      className="relative bg-light rounded p-4"
      style={{
        width: CHART_SIZE,
      }}
    >
      <CircularProgressbar
        value={score}
        text={`${score * 100}%`}
        maxValue={1}
        background={true}
        styles={buildStyles({
          rotation: 0.5,
          strokeLinecap: "round",
          textSize: "16px",
          pathTransitionDuration: 0.5,
          pathColor: "#FF0101",
          textColor: "#000",
          trailColor: "#fff",
          backgroundColor: "#fff",
        })}
      />
      <span className="absolute text-center progress-message">
        {" "}
        de votre <br /> objectif
      </span>
    </div>
  )
}
