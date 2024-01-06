import { useState, useEffect } from "react";
import {
  Container,
  KeyboardButtons,
  KeyboardButton,
  Outputs,
  Output,
} from "./MultQuizCSS";

const MultiplicationQuiz = () => {
  const [task, setTask] = useState("");
  const [time, setTime] = useState(10);
  const [answer, setAnswer] = useState(0);
  const [points, setPoints] = useState(0);
  const [result, setResult] = useState(0);

  const randomNumbers = (minNumber, maxNumber) => {
    return minNumber + Math.floor(Math.random() * (maxNumber + 1 - minNumber));
  };

  const getTask = () => {
    setAnswer(0);
    setTime(10);

    const number1 = randomNumbers(1, 10);
    const number2 = randomNumbers(1, 10);

    setResult(number1 * number2);
    setTask(number1 + " * " + number2);
  };

  const setNumber = (event) => {
    const digit = Number(event.target.dataset.value);
    const newAnswer = answer * 10 + digit;
    if (newAnswer <= 100) {
      setAnswer(newAnswer);
    }
  };

  const cancel = () => {
    setAnswer(Math.floor(answer / 10));
  };

  const enter = () => {
    if (result === answer) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }
    getTask();
  };

  useEffect(() => {
    const timer = () => {
      if (time === 1) {
        enter();
      } else {
        setTime(time - 1);
      }
    };

    const timerSetInterval = setInterval(timer, 1000);

    return () => {
      clearInterval(timerSetInterval);
    };
  }, [time]);

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div className={Container}>
      <div className={Outputs}>
        <div className={Output}>{task}</div>
        <div className={Output}>{time}</div>
        <div className={Output}>{answer}</div>
        <div className={Output}>{points}</div>
      </div>

      <div className={KeyboardButtons}>
        <button className={KeyboardButton} onClick={setNumber} data-value={1}>
          1
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={2}>
          2
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={3}>
          3
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={4}>
          4
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={5}>
          5
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={6}>
          6
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={7}>
          7
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={8}>
          8
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={9}>
          9
        </button>
        <button className={KeyboardButton} onClick={cancel}>
          C
        </button>
        <button className={KeyboardButton} onClick={setNumber} data-value={0}>
          0
        </button>
        <button className={KeyboardButton} onClick={enter}>
          E
        </button>
      </div>
    </div>
  );
};

export { MultiplicationQuiz };
