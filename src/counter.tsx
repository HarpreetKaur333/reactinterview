import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) {
      //prevent counter shoudl not be below zero
      setCount(count - 1);
    }
  };

  return (
    <>
      <h5>Counter= {count}</h5>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={() => setCount(0)}>Reset value</button>
      {/* reset the initial state value */}
    </>
  );
}

export default Counter;
