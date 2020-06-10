import React from "react";

function Dinner({ name, sweetDish }) {
  return (
    <div>
      <h1>We are serving {name}</h1>
      <h1>We will be serving {sweetDish} sweet dish</h1>
    </div>
  );
}

export default Dinner;
