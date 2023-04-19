import { useEffect, useState } from 'react';
import '../styles/trivia.css'

export default function Trivia({ data, setTimer, questNumber, setQuestNumber }) {

  const [question, setQuestion] = useState(null);
  const [ansPick, setAnsPick] = useState(null);
  const [className, setClassName] = useState("answer");

  //Sets the question to be selected from the array to be change after data and questnumber changes
  useEffect(() => {
    setQuestion(data[questNumber-1])
  }, [data, questNumber]);

  //making the setTimeout function easily reusable
  const delay = (duration, callback) => {
    setTimeout(() => {
      callback()
    }, duration)
  }

  //changes the classes of the answers to set color to the appropriate if correct or not
  const handleClick = (a) => {
    setAnsPick(a);
    setClassName("answer active");
    delay(1500, () => setClassName( a.correct ? "answer correct" : "answer wrong"));
    delay(4500, () => {
      if(a.correct) {
        setQuestNumber((prev) => prev + 1)
        setAnsPick(null)
      }else{
        setTimer(true)
      }
    })
  }
  
  return (
    <div className="trivia">
        <div className="question">{question?.question}</div>
        <div className="answers">
            {question?.answers.map((a) => (
              <div key={Math.random()} className={ansPick === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>
            ))}
        </div>
    </div>
  )
}
