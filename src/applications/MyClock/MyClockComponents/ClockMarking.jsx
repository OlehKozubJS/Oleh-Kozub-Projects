import { ClockMarkingContainer, ClockMarking } from "../MyClockCSS";

const ClockMarkingItem = ({ marking }) => {
  return (
    <div
      className={ClockMarkingContainer}
      style={{ transform: `rotate(${6 * marking}deg)` }}
    >
      <div className={ClockMarking}></div>
    </div>
  );
};

export { ClockMarkingItem };
