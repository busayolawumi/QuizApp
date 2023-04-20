import { useEffect, useState } from "react";
import wrong from '../assets/wrong.mp3'
import useSound from 'use-sound'

export default function Timer({ setStop, questNumber }) {
    const [timer, setTimer] = useState(30)
    const [wrongAns] = useSound(wrong)

    useEffect(() => {
        if(timer === 0){
            setStop(true)
            wrongAns()
        }
        
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1)
      }, 1000);
      return () => clearInterval(interval)
    }, [setStop, timer])  

    useEffect(() => {
        setTimer(30)
    }, [questNumber])
  return timer
}
