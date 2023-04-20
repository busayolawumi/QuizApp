import { useRef } from "react"

export default function Start({ setUsername }) {

    const inputRef = useRef();

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
