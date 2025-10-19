import React, { useState } from "react";

const CounterApp = () => {
  const [count, setCount] = useState(0);

  const increase = () => setCount(prev => prev + 1);
  const decrease = () => setCount(prev => (prev > 0 ? prev - 1 : 0));
  const reset = () => setCount(0);

  const buttonStyle = {
    margin: "5px",
    padding: "10px 20px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#007bff",
    color: "white",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={increase} style={buttonStyle}>Increase</button>
      <button onClick={decrease} style={buttonStyle}>Decrease</button>
      <button onClick={reset} style={{ ...buttonStyle, backgroundColor: "#dc3545" }}>Reset</button>
    </div>
  );
};

export default CounterApp;
