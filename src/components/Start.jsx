import { useRef } from "react"

export default function Start({ setUsername }) {

    const inputRef = useRef();

    //sets username to the entered value and only sets if the imput is not left empty
    const handleClick = () => {
        inputRef.current.value && setUsername(inputRef.current.value)
    }  

return (
    <div className="start">
        <form className="startForm">
            <input className="startInput" type="text" placeholder="Enter your name" ref={inputRef} />
            <button className="startButton" onClick={handleClick}>Start</button>  
        </form>
    </div>
  )
}
