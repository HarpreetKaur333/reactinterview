import { useState } from "react";
import ChildComponent from "./ChildComponentReactMemo";

const ParentComponent = () => {
  const [count, setCount] = useState(0); // Local state for count
  const [value, setValue] = useState("Hello"); // Local state for value

  return (
    <div>
      <h1>Parent Component</h1>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
      <button onClick={() => setValue("World")}>Change Value</button>
      <p>Count: {count}</p>
      <ChildComponent value={value} /> {/* Pass the 'value' prop */}
    </div>
  );
};

export default ParentComponent;
