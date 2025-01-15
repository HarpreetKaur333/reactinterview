import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./store"; // Import RootState type

const ReduxCounter: React.FC = () => {
  const count = useSelector((state: RootState) => state.count); // Access the count state
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
    </div>
  );
};

export default ReduxCounter;
