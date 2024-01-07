import { HourArrowStyle } from "./ClockArrowsStyles";

const HourArrow = ({ hours }) => {
  return (
    <div
      className={HourArrowStyle}
      style={{ transform: `rotate(${hours * 30}deg)` }}
    ></div>
  );
};

export { HourArrow };
