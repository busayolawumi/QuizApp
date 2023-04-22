import React, { useEffect, useRef, useState } from 'react'
import ReactConfetti from 'react-confetti';

const Win = ({ earned, username }) => {

    const [height, setHeight] = useState(null);
    const [width, setWidth] = useState(null);
    const confetiRef = useRef(null);

    useEffect(() => {
        setHeight(confetiRef.current.clientHeight);
        setWidth(confetiRef.current.clientWidth);
      }, []);

  return (
    <div className="finishPage" ref={confetiRef}>
        <h1 className='finishText'>🎊🎊🎊 <br />
         Congratulations {username}, you are now a millionaire. <br />
         You've won the grand sum of: {earned}</h1>
        <ReactConfetti numberOfPieces={150} width={width} height={height} />
    </div>
  )
}

export default Win