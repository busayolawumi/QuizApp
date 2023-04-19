import { useEffect, useState } from 'react';
import '../styles/trivia.css'

export default function Trivia({ data, setTimer, questNumber, setQuestNumber }) {

  const [question, setQuestion] = useState(null);
  const [ansPick, setAnsPick] = useState(null);
  const [className, setClassName] = useState("answer");

  useEffect(() => {
    setQuestion(data[questNumber-1])
  }, [data, questNumber]);

  const handleClick = (a) => {
    setAnsPick(a);
    setClassName("answer active");
    setTimer(() => {
        console.log('sth');
    }, 3000)
  }
  
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a) => (
              <div className={ansPick === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
            ))}
        </div>
    </div>
  )
}
