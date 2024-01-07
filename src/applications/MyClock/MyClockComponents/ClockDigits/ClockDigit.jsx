import { ClockDigitsStyle, ClockDigitStyle } from "./ClockDigitsStyles";

const ClockDigit = ({ digit }) => {
  return (
    <div
      className={ClockDigitsStyle}
      style={{ transform: `rotate(${30 * digit}deg)` }}
    >
      <div
        className={ClockDigitStyle}
        style={{ transform: `rotate(${-30 * digit}deg)` }}
      >
        {digit}
      </div>
    </div>
  );
};

export { ClockDigit };
