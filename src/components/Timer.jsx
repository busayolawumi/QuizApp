import { useEffect, useState } from "react";
import wrong from '../assets/wrong.mp3'
import useSound from 'use-sound'

export default function Timer({ setStop, questNumber }) {
    const [timer, setTimer] = useState(30)
    const [wrongAns] = useSound(wrong)

    //sets stop to true when the timer hits 0 and then plays the "wrong" sound at the exact same time
    useEffect(() => {
        if(timer === 0){
            setStop(true)
            wrongAns()
        }
      //makes timer reduce by 1 every one second  
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000);
      //cleanup function so that the timer does not glitch
      return () => clearInterval(interval)
    }, [setStop, timer])  

    //sets the timer back to 30 when the question changes
    useEffect(() => {
        setTimer(30)
    }, [questNumber])
  return timer
}
