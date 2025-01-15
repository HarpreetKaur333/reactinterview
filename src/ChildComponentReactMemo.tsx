import React from "react";

// Use React.memo to prevent unnecessary re-renders
const ChildComponent = React.memo(({ value }) => {
  console.log("Child component rendered"); // This will log only when 'value' changes
  return <p>Value: {value}</p>;
});

export default ChildComponent;
