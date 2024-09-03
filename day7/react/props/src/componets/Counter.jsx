import { useState, useEffect } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };
  useEffect(() => {
    console.log("Componet Mounted");
  }, []);
  useEffect(() => {
    console.log("Count Updated", count);
  }, [count]);
  useEffect(() => {
    console.log("Input Mounted", input);
  }, [input]);
  return (
    <div >
      <h3>Counter Componet : {count}</h3>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type="text" onChange={(e) => setInput(e.target.value)}></input>
    </div>
  );
};
