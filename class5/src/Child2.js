import React, { useReducer } from "react";
import counterReducer from "./CounterReducer";

const Child2 = () => {
  let [state, dispatch] = useReducer(counterReducer, 1);
  console.log(state);
  return (
    <div>
      <h1>This is Second child (Reducers)</h1>
      <h3>Value of reducer state is :{state}</h3>
      <button onClick={() => dispatch("Increament")}>Increament value in reducer</button>
    </div>
  );
};

export default Child2;
