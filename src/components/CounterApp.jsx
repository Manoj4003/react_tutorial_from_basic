import React, { useState } from 'react'

const CounterApp = () => {
  let [count,setCount]=useState(0);
  function handleIncrease(){
    setCount((previousCount)=>{ return previousCount+1});
  }
  function handleDecrease(){
    setCount((previousCount)=>{ return previousCount-1});
  }
  function handleReset(){
    setCount(count=0)
  }
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onClick={handleIncrease}>Increase</button>
      <button onClick={handleDecrease}>Decrease</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default CounterApp;
