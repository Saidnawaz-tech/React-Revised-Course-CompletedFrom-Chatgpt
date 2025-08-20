import {useRef, useState} from 'react'

export default function Timer(){
    const [count, setCount] = useState(0)
    const intervalRef = useRef(null)

    const startTimer =()=>{
        intervalRef.current = setInterval(()=>{
            setCount((c)=>c+1)
        }, 1000)
    }
    const stopTimer =()=>{
        clearInterval(intervalRef.current)
    }

    return(
        <div>
            <p>Timer: {count}</p>
            <button onClick={startTimer}>Start Timer</button>
            <button onClick={stopTimer}>Stop Timer</button>
        </div>
    )
}

// export default function FocusInput(){
//     const inputRef = useRef(null)

//     const handleFocus = () => {
//         inputRef.current.focus();
//     }
//     return(
//         <div>
//             <input ref={inputRef} type='text' placeholder='enter text...' />
//             <button onClick={handleFocus}>Focus Input</button>
//         </div>
//     )
// }