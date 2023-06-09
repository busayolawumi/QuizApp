import { useEffect, useState } from 'react';
import '../styles/trivia.css'
import useSound from 'use-sound';
import play from '../assets/play.mp3'
import correct from '../assets/correct.mp3'
import wrong from '../assets/wrong.mp3'
import win from '../assets/win.mp3'

export default function Trivia({ data, setStop, questNumber, setQuestNumber, setFinish }) {

  const [question, setQuestion] = useState(null);
  const [ansPick, setAnsPick] = useState(null);
  const [className, setClassName] = useState("answer");
  const [letsPlay] = useSound(play)
  const [correctAns] = useSound(correct)
  const [wrongAns] = useSound(wrong)
  const [winSound] = useSound(win)

  //Plays the starting sounds as soon as the page loads or refreshes
  useEffect(() => {
    letsPlay();
  }, [letsPlay])

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

    //checks if question is correct or not and plays the appropriate sound at a delayed time exactly the same with how long it takes for the blinking animation to complete
    if(a.correct){
      delay(3000, () => correctAns())
    }else{
      delay(3000, () => wrongAns())
    }
    
    delay(4500, () => {
      //If answer is correct, increase questNumber by 1 to change to next question and clear selection
      if(a.correct) {
        delay(1000, () => {
          setQuestNumber((prev) => prev + 1)
          setAnsPick(null)
        })
      //if answer is wrong, setStop to false to display the amount earned after
      }else{
          setStop(true)
      }
    })

    //sets finish to true so it triggers the display of the winners page only after the user has answered all questions correctly, plays the win sound at the same time the page is displayed
    delay(5500, () => {
      if(questNumber === 15 && a.correct){
        setFinish(true);
        winSound()
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
