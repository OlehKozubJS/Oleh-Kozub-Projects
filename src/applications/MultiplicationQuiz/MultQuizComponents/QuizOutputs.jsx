import { Outputs, Output } from "../MultQuizCSS";

const QuizOutputs = ({ task, time, answer, points }) => {
  return (
    <div className={Outputs}>
      <div className={Output}>{task}</div>
      <div className={Output}>{time}</div>
      <div className={Output}>{answer}</div>
      <div className={Output}>{points}</div>
    </div>
  );
};

export { QuizOutputs };
