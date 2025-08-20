import {useReducer} from 'react'

// function counterReducer(state, action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 };
//     case "decrement":
//       return { count: state.count - 1 };
//     case "reset":
//       return { count: 0 };
//     default:
//       return state;
//   }
// }

// export default function usingReducer(){
//     const [state, dispatch] = useReducer(counterReducer, {count: 0})

//     return(
//         <div>
//             <h1>Count: {state.count}</h1>
//             <button onClick={()=>dispatch({type: 'increment'})}>+</button>
//             <button onClick={()=>dispatch({type: 'decrement'})}>-</button>
//             <button onClick={()=>dispatch({type: 'reset'})}>Reset</button>
//         </div>
//     )
// }


// Form handling with useReducer

function reducer(state, action){
  switch (action.type){
    case 'increment':
      return {count: state.count + 5}
    case 'decrement':
      return {count: state.count - 5}
    case 'reset':
      return {count: 0}
    default:
      return state
  }
}
function Counter(){
  const [state, dispatch] = useReducer(reducer, {count: 0})

  return(
    <div>
      <p>count : {state.count}</p>
      <button onClick={()=> dispatch({type: 'increment'})}>+</button>
      <button onClick={()=> dispatch({type: 'decrement'})}>-</button>
      <button onClick={()=> dispatch({type: 'reset'})}>Reset</button>
    </div>
  )

}
export default Counter;
