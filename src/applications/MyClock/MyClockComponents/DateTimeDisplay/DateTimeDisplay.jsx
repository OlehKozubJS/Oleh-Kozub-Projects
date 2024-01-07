import { DateTimeDisplayStyle } from "./DateTimeDisplayStyles";

const DateTimeDisplay = ({ time, date }) => {
  return (
    <div className={DateTimeDisplayStyle}>
      <div>{time}</div>
      <div>{date}</div>
    </div>
  );
};

export { DateTimeDisplay };
