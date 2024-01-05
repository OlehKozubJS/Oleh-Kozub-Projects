import { useState, useEffect } from "react";
import { ClockMarkings } from "./ClockMarkings";
import { ClockDigits } from "./ClockDigits";
import {
  ClockFace,
  DateTimeData,
  SecArrow,
  MinArrow,
  HourArrow,
  ArrowAxisCover,
} from "../MyClockCSS";

const MyClock = () => {
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  useEffect(() => {
    const addZero = (digit) => {
      return (digit < 10 ? "0" : "") + digit;
    };

    const timeChange = () => {
      const date = new Date();
      const currentHours = date.getHours();
      const currentMinutes = date.getMinutes();
      const currentSeconds = date.getSeconds();
      setHours(currentHours % 12);
      setMinutes(currentMinutes);
      setSeconds(currentSeconds);
      setTime(
        `${addZero(currentHours)}:${addZero(currentMinutes)}:${addZero(
          currentSeconds
        )}`
      );
      setDate(date.toDateString());
    };

    const timeChangeAnimation = setInterval(timeChange, 1000);

    return () => {
      clearInterval(timeChangeAnimation);
    };
  }, []);

  return (
    <div className={ClockFace}>
      <ClockMarkings />
      <ClockDigits />
      <div className={DateTimeData}>
        <div>{time}</div>
        <div>{date}</div>
      </div>
      <div
        className={HourArrow}
        style={{ transform: `rotate(${hours * 30}deg)` }}
      ></div>
      <div
        className={MinArrow}
        style={{ transform: `rotate(${minutes * 6}deg)` }}
      ></div>
      <div
        className={SecArrow}
        style={{ transform: `rotate(${seconds * 6}deg)` }}
      ></div>
      <div className={ArrowAxisCover}></div>
    </div>
  );
};

export { MyClock };
