import React, { useState } from "react";

// const a ='a';
// const b= 1;
// const c = true; // True

const Practice2 = () => {
  const [count, setCount] = useState(0);
  // count = 0
  // count = 2
  // setCount(2)
  const [userInput, setUserInput] = useState("");

  const handleClickButton = (e) => {
    // console.log(e);
    setCount(count + 1);
  };

  const handleChange = (e) => {
    // console.log(e);
    // setCount(Number(e.target.value));
    setUserInput(e.target.value);
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setCount(Number(e.target.value));
    }
  };

  return (
    <div>
      Practice2
      <div>count : {count}</div>
      <button onClick={handleClickButton}>+</button>
      <button>-</button>
      <input
        value={userInput}
        onChange={handleChange}
        onKeyDown={handleEnter}
      ></input>
      userInput : {userInput}
    </div>
  );
};

export default Practice2;
