import { useState, useEffect } from "react";
import css from "./MultQuiz.module.css";

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
    const digit = event.target.dataset.value;
    if (answer < 100) {
      setAnswer(answer * 10 + digit);
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
      if (time === 0) {
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

  return (
    <div className={css.Container}>
      <div className={css.Outputs}>
        <div className={css.Output}>{task}</div>
        <div className={css.Output}>{time}</div>
        <div className={css.Output}>{answer}</div>
        <div className={css.Output}>{points}</div>
      </div>

      <div className={css.KeyboardButtons}>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={1}
        >
          1
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={2}
        >
          2
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={3}
        >
          3
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={4}
        >
          4
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={5}
        >
          5
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={6}
        >
          6
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={7}
        >
          7
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={8}
        >
          8
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={9}
        >
          9
        </button>
        <button className={css.KeyboardButton} onClick={cancel}>
          C
        </button>
        <button
          className={css.KeyboardButton}
          onClick={setNumber}
          data-value={0}
        >
          0
        </button>
        <button className={css.KeyboardButton} onClick={enter}>
          E
        </button>
      </div>
    </div>
  );
};

export { MultiplicationQuiz };
