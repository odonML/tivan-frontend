import React from "react";
import { BiCog } from "react-icons/bi";
import "./App.css";

function App() {
  const help = function () {
    console.log("hola");
  };
  help();
  return (
    <div className="App">
      <header className="App-header">
        <BiCog size={150} className="App-logo" />
        <h1 className="text-3xl font-bold">
          <span className="text-pink-500">Tivan</span> en proceso!
        </h1>
      </header>
    </div>
  );
}

export default App;
