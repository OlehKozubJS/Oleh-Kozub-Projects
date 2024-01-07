import css from "./MyClock.module.css";
import { RajdhaniR } from "../../../../../fonts";

const ClockFace = `${css.ClockFace} ${RajdhaniR}`;
const DateTimeData = css.DateTimeData;
const Arrow = css.Arrow;
const SecArrow = `${Arrow} ${css.SecArrow}`;
const MinArrow = `${Arrow} ${css.MinArrow}`;
const HourArrow = `${Arrow} ${css.HourArrow}`;
const ArrowAxisCover = css.ArrowAxisCover;

export {
  ClockFace,
  DateTimeData,
  SecArrow,
  MinArrow,
  HourArrow,
  ArrowAxisCover,
};
