import { ClockDigitItem } from "./ClockDigit";

const ClockDigits = () => {
  const spawn = () => {
    let digits = [];
    for (let digit = 1; digit <= 12; digit += 1) {
      digits = [...digits, <ClockDigitItem key={digit} digit={digit} />];
    }

    return digits;
  };

  return <div>{spawn()}</div>;
};

export { ClockDigits };
