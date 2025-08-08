"use client";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import Counter from "./Counter";

const ProgressBar = ({
  value = 89,
  color = "#002FF5",
  extraCls = "one",
  trailColor = "transparent",
  counterValue = 89,
  counterEnd = "%",
}) => {
  return (
    <div
      className={`circle-progress ${extraCls}`}
      style={{ width: 120, height: 120 }}
    >
      <CircularProgressbar
        width={120}
        value={value}
        strokeWidth={1}
        styles={buildStyles({
          pathColor: color,
          trailColor: trailColor,
        })}
        className="circle-progressbar-1"
      />
      <span className="counting">
        <Counter end={counterValue} />
        <span>{counterEnd}</span>
      </span>
    </div>
  );
};
export default ProgressBar;

export const ProgressBar2 = ({
  value = 80,
  color = "white",
  extraCls = "one",
  trailColor = "rgba(255, 255, 255, .2)",
}) => {
  return (
    <div className={`${extraCls}`} style={{ width: 80, height: 65 }}>
      <CircularProgressbar
        width={65}
        value={value}
        strokeWidth={8}
        styles={buildStyles({
          pathColor: color,
          trailColor: trailColor,
          strokeLinecap: "round",
        })}
        className="circle-progressbar-2"
      />
    </div>
  );
};

export const ProgressBar3 = ({
  value = 89,
  color = "#FC5546",
  extraCls = "two",
  trailColor = "transparent",
  counterValue = 89,
  counterEnd = "%",
}) => {
  return (
    <div
      className={`circle-progress circle-progress-two ${extraCls}`}
      style={{ width: 120, height: 120 }}
    >
      <CircularProgressbar
        width={120}
        value={value}
        strokeWidth={5}
        styles={buildStyles({
          pathColor: color,
          trailColor: trailColor,
          strokeLinecap: "round",
        })}
        className="circle-progressbar-1"
      />
      <span className="counting">
        <Counter end={value} />
        <span>{counterEnd}</span>
      </span>
    </div>
  );
};
