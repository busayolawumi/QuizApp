import React, { useState } from 'react'
import { moneyList } from './scripts/moneyList'

const App = () => { 
  const [questNumber, setQuestNumber] = useState(1)
  return (
    <div className='app'>
      <div className="main">Main</div>
      <div className="pyramid">
        <ul className='moneyList'>
          {moneyList.map(({ questNum, questPrice }) => (
            <li className={questNumber === questNum ? "listItem active" : "listItem"}>
              <span className='questNum'>{questNum}</span>
              <span className='questPrice'>{questPrice}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default App