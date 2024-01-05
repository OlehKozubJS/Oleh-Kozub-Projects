import css from "./MyClock.module.css";

const ClockFace = css.ClockFace;
const DateTimeData = css.DateTimeData;
const Arrow = css.Arrow;
const SecArrow = `${Arrow} ${css.SecArrow}`;
const MinArrow = `${Arrow} ${css.MinArrow}`;
const HourArrow = `${Arrow} ${css.HourArrow}`;
const ArrowAxisCover = css.ArrowAxisCover;
const ClockDigitContainer = css.ClockDigitContainer;
const ClockDigit = css.ClockDigit;
const ClockMarkingContainer = css.ClockMarkingContainer;
const ClockMarking = css.ClockMarking;

export {
  ClockFace,
  DateTimeData,
  SecArrow,
  MinArrow,
  HourArrow,
  ArrowAxisCover,
  ClockDigitContainer,
  ClockDigit,
  ClockMarkingContainer,
  ClockMarking,
};
