import { useState, memo } from "react";

// Child component
const Child = memo(({ name }) => {
  console.log("Child rendered");
  return <h3>Hello, {name}</h3>;
});

export default function Memo() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Child name="Ali" /> {/* Doesn't re-render when count changes */}
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
