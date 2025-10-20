import React, { useState } from "react";

const AdvancedCounter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  const increase = () => setCount(count + step);
  const decrease = () => setCount(count - step);
  const reset = () => {
    setCount(0);
    setStep(1);
  };

  const handleStepChange = (e) => setStep(Number(e.target.value));

  const getStatus = () => {
    if (count > 0) return "Positive";
    if (count < 0) return "Negative";
    return "Zero";
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Advanced Counter</h1>
      <h2>Count: {count}</h2>
      <h3>Status: {getStatus()}</h3>

      <div style={{ marginBottom: "10px" }}>
        <label>
          Step Value:
          <input
            type="number"
            value={step}
            onChange={handleStepChange}
            style={{ width: "60px", marginLeft: "10px" }}
          />
        </label>
      </div>

      <button onClick={increase} style={{ margin: "5px" }}>
        ➕ Increase
      </button>
      <button onClick={decrease} style={{ margin: "5px" }}>
        ➖ Decrease
      </button>
      <button onClick={reset} style={{ margin: "5px" }}>
        🔄 Reset
      </button>
    </div>
  );
};

export default AdvancedCounter;
