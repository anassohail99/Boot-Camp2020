import React from "react";
// import logo from "./logo.svg";
import "./App.css";
import Dinner from "./dinner";

function App() {
  return (
    <div className="App">
      <Dinner name="Karahi" sweetDish="Icecream" />
      <hr />
      <Dinner name="Biryani" sweetDish="Halwa" />
      <hr />
      <Dinner name="Nihari" sweetDish="Mithai" />
    </div>
  );
}

export default App;
