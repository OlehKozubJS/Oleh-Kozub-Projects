import { useState, useEffect } from "react";
import { Container } from "./MultQuizStyles";
import { QuizButtons, QuizOutputs } from "../../MultQuizComponents";

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

  const handleAnswerInput = (newAnswer) => {
    setAnswer(newAnswer);
  };

  const enter = () => {
    if (result === answer) {
      setPoints(points + 1);
    } else {
      setPoints(points - 1);
    }
    setAnswer(0);
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
  }, [points]);

  return (
    <div className={Container}>
      <QuizOutputs task={task} time={time} answer={answer} points={points} />
      <QuizButtons
        onAnswerInput={handleAnswerInput}
        onEnter={enter}
        answer={answer}
      />
    </div>
  );
};

export { MultiplicationQuiz };
