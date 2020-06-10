import React from "react";
import { useState } from "react";

const Room = () => {
  const [islit, setLit] = useState(false);
  let [age, setAge] = useState(45);

  //   const islit = state[0];
  //   const setLit = state[1];

  function toggleLight() {
    setLit(!islit);
  }
  const increaseAge = () => {
    setAge(++age);
  };
  return (
    <div>
      <button onClick={toggleLight}>Light</button>
      <button onClick={increaseAge}>Age</button>
      <h1>This is room is {islit ? "Lit" : "Dark"} </h1>
      <h1>Age : {age}</h1>
    </div>
  );
};

export default Room;
