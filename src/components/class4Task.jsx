export default class4task;
import {useState} from 'react'

function class4task(){
    const [isloggedIn, setIsloggedIn] = useState(true)
    const fruits = ['Banana', 'Guava', 'Apricot']
    return(
        <div className='container'>
            <div className='login'>
                <h1>Login Status</h1>
                {isloggedIn ? <h2>Welcome back</h2> : <h2>Please log in</h2>}
                <button onClick={()=>setIsloggedIn(!isloggedIn)}>Toggle</button>
            </div>
            <div className='cart'>
                <h1>Shopping List:</h1>
                    {fruits.length === 0 ? (<p>No item is Cart</p>) : (
                        <ul>
                            {fruits.map((fruit, index)=>(
                                <li key={index}>{fruit}</li>
                            ))}
                        </ul>
                    )}
            </div>
        </div>
    )
}