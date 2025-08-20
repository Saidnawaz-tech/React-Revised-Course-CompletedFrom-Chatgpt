import { useState } from "react";

function Live1({ text }) {
  return (
    <div>
      <p>Live 1: {text}</p>
    </div>
  );
}
function Live2({ text }) {
  return (
    <div>
      <p>Live 2: {text}</p>
    </div>
  );
}
export default function King() {
  const [text, setText] = useState("");
  return (
    <div>
      <p>You typed: {text}</p>
      <input
        type="text"
        value={text}
        placeholder="Enter Name..."
        onChange={(e) => setText(e.target.value)}
      />
      <Live1 text={text} />
      <Live2 text={text} />
    </div>
  );
}
