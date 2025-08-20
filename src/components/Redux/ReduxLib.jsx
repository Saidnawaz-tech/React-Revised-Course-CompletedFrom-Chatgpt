// use redux component
import {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {increment, decrement, incrementByAmount} from './slice'

export default function MyRedux(){
    const count = useSelector((state)=> state.counter.value)
    const dispatch = useDispatch();
    const [inputValue, setInputValue] = useState(0)

    return(
        <div>
            <h1>Redux Counter</h1>
            <h2>{count}</h2>
            <button onClick={()=>dispatch(increment())}>Incr</button>
            <button onClick={()=>dispatch(decrement())}>Decr</button>

            <div>
                <input type="number" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />
                <button onClick={()=>dispatch(incrementByAmount({inputValue}))}>IncrByAmount</button>
            </div>
        </div>
    )
}



