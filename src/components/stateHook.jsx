import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0); 
  function eventHandler(){
    setCount(count+1);
    alert('1 incr')
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={eventHandler}>Click Me</button>
    </div>
  );
}