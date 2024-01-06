import { KeyboardButtons, KeyboardButton } from "../MultQuizCSS";

const QuizButtons = ({ onAnswerInput, onEnter, answer }) => {
  const setNumber = (event) => {
    const digit = Number(event.target.dataset.value);
    const newAnswer = answer * 10 + digit;
    onAnswerInput(newAnswer);
  };

  const cancel = () => {
    const newAnswer = Math.floor(answer / 10);
    onAnswerInput(newAnswer);
  };

  const handleEnter = () => {
    onEnter();
  };

  return (
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
      <button className={KeyboardButton} onClick={handleEnter}>
        E
      </button>
    </div>
  );
};

export { QuizButtons };
