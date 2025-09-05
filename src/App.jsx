import React, { useState } from "react";
import "./App.css";

function App() {
  const [btn1Color, setBtn1Color] = useState("blue");
  const [btn2Color, setBtn2Color] = useState("green");

  const handleClick1 = () => {
    setBtn1Color(btn1Color === "blue" ? "red" : "blue");
  };

  const handleClick2 = () => {
    setBtn2Color(btn2Color === "green" ? "orange" : "green");
  };

  return (
    <div className="app-container">
      <h1>Color Changing Buttons 🎨</h1>
      <div className="button-group">
        <button
          onClick={handleClick1}
          style={{ backgroundColor: btn1Color }}
        >
          Button 1
        </button>
        <button
          onClick={handleClick2}
          style={{ backgroundColor: btn2Color }}
        >
          Button 2
        </button>
      </div>
    </div>
  );
}

export default App;