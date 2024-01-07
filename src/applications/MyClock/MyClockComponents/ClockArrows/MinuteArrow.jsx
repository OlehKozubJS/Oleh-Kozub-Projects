import { MinuteArrowStyle } from "./ClockArrowsStyles";

const MinuteArrow = ({ minutes }) => {
  return (
    <div
      className={MinuteArrowStyle}
      style={{ transform: `rotate(${minutes * 6}deg)` }}
    ></div>
  );
};

export { MinuteArrow };
