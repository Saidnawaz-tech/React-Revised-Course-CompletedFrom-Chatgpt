import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  function eventHandler(value) {
    if (value === "increment") {
      setCount(count + 1);
    } else if (value === "decrement") {
      setCount(count - 1);
    }
  }
  return (
    <div className="container">
      <div className="counterApp">
        <p>Current Score: {count}</p>
        <button onClick={() => eventHandler("increment")}>Increment</button>
        <button onClick={() => eventHandler("decrement")}>Decrement</button>
      </div>
      <div className="Displaytext">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <p>Hello, {text}</p>
      </div>
    </div>
  );
}

export default Counter;