import React, { useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { FaAngleUp } from "react-icons/fa6";

const quiz = [
  { question: "What is the capital of Nepal?", answer: "Kathmandu" },
  { question: "What is 2 + 2?", answer: "4" },
  { question: "Who wrote 'Hamlet'?", answer: "William Shakespeare" },
  {
    question: "What is the boiling point of water in Celsius?",
    answer: "100°C",
  },
  { question: "Which planet is known as the Red Planet?", answer: "Mars" },
];

function Questionanswer() {
  const [selectIndex, setSelectIndex] = useState(null); //0
  function handlerIndex(d) {
    setSelectIndex(d);
  }
  console.log(selectIndex);
  return (
    <div>
      {quiz.map((item, index) => {
        return (
          <div className="box">
            <div className="question" onClick={() => handlerIndex(index)}>
              <h1>{index + 1}.</h1>
              <h1>{item.question}</h1>
              {selectIndex === index ? <FaAngleUp /> : <FaAngleDown />}
            </div>
            {selectIndex === index ? <h2>{item.answer}</h2> : null}
          </div>
        );
      })}
    </div>
  );
}

export default Questionanswer;
