import React, { useState } from 'react'
import Trivia from './Trivia'
import { moneyList } from '../scripts/moneyList'
import { data } from '../scripts/questions'

const Hero = () => { 
  const [questNumber, setQuestNumber] = useState(1)
  const [timer, setTimer] = useState(false)
  return (
    <div className='app'>
      <div className="main">
        <div className="top">
          <div className="timer">30</div>
        </div>
        <div className="bottom"><Trivia data={data} setTimer={setTimer} questNumber={questNumber} setQuestNumber={setQuestNumber} /></div>
      </div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyList.map(({ questNum, questPrice }) => (
            <li className={questNumber === questNum ? "listItem active" : "listItem"} key={questNum}>
              <span className='questNum'>{questNum}</span>
              <span className='questPrice'>{questPrice}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Hero