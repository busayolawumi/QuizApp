import React, { useEffect, useState } from 'react'
import Trivia from './Trivia'
import { moneyList } from '../scripts/moneyList'
import { data } from '../scripts/questions'
import Timer from './Timer'
import useSound from 'use-sound'
import Start from './Start'

const Hero = () => { 
  const [username, setUsername] = useState(null)
  const [questNumber, setQuestNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState(`$ ${0}`)

  useEffect(() => {
    questNumber > 1 && setEarned(moneyList.find((m) => m.questNum === questNumber - 1).questPrice);
}, [moneyList, questNumber])

  return (
    <div className='app'>
      {username ? (
        <>
          <div className="main">
        {stop ? 
        (<h1 className='endText'>You earned: {earned}</h1>) : (
      <>
        <div className="top">
          <div className="timer"><Timer setStop={setStop} questNumber={questNumber} /></div>
        </div>
        <div className="bottom"><Trivia data={data} setStop={setStop} questNumber={questNumber} setQuestNumber={setQuestNumber} /></div>
      </>
        )}
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyList.map(({ questNum, questPrice }) => (
            <li className={questNumber === questNum ? "listItem active" : "listItem"} key={questNum}>
               <span className='questPrice'>{questPrice}</span>
            </li>
          ))}
        </ul>
      </div>
        </>
      ) : <Start setUsername={setUsername} /> }
      
    </div>
  )
}

export default Hero