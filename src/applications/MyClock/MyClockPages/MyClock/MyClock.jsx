import { useState, useEffect } from "react";
import {
  ClockMarkings,
  ClockDigits,
  HourArrow,
  MinuteArrow,
  SecondArrow,
  DateTimeDisplay,
} from "../../MyClockComponents";
import { ClockFace, ArrowAxisCover } from "./MyClockStyles";

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
      <HourArrow hours={hours} />
      <MinuteArrow minutes={minutes} />
      <SecondArrow seconds={seconds} />
      <DateTimeDisplay time={time} date={date} />
      <div className={ArrowAxisCover}></div>
    </div>
  );
};

export { MyClock };
