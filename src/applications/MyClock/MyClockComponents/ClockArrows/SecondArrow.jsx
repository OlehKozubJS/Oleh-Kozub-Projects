import { SecondArrowStyle } from "./ClockArrowsStyles";

const SecondArrow = ({ seconds }) => {
  return (
    <div
      className={SecondArrowStyle}
      style={{ transform: `rotate(${seconds * 6}deg)` }}
    ></div>
  );
};

export { SecondArrow };
