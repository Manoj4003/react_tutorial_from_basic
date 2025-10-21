import React from "react";

const Eventhandling = () => {
  function changeContent1() {
    console.log("Welcome to React JS");
  }
  function changeContent2() {
    console.log("changeContent2");
  }
  return (
    <div>
      <button className="btn1" onClick={changeContent1}>
        {" "}
        Click Me
      </button>
      <button className="btn2" onClick={changeContent2}>
        {" "}
        Click Me
      </button>
    </div>
  );
};

export default Eventhandling;
