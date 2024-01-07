import { ClockMarkingsStyle, ClockMarkingStyle } from "./ClockMarkingsStyles";

const ClockMarking = ({ marking }) => {
  return (
    <div
      className={ClockMarkingsStyle}
      style={{ transform: `rotate(${6 * marking}deg)` }}
    >
      <div className={ClockMarkingStyle}></div>
    </div>
  );
};

export { ClockMarking };
