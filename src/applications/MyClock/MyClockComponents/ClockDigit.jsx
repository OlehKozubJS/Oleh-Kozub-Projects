import { ClockDigitContainer, ClockDigit } from "../MyClockCSS";

const ClockDigitItem = ({ digit }) => {
  return (
    <div
      className={ClockDigitContainer}
      style={{ transform: `rotate(${30 * digit}deg)` }}
    >
      <div
        className={ClockDigit}
        style={{ transform: `rotate(${-30 * digit}deg)` }}
      >
        {digit}
      </div>
    </div>
  );
};

export { ClockDigitItem };
