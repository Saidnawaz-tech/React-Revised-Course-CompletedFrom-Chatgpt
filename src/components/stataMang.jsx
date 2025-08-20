import { useState } from "react"

function Hello({count, onIncrement}){
    return(
        <div>
            <p>Count : {count}</p>
            <button onClick={onIncrement}>Increment</button>
        </div>
    )
}
export default function Counter(){
    const [count, setCount] = useState(0)
    const handleInc = () => setCount(count+1)
    return(
        <div>
            <h1>This is counter: </h1>
            <Hello count={count} onIncrement={handleInc} />
        </div>
    )
}
