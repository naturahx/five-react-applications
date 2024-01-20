import { useState } from "react";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>0</h1>
        <button className="minus">- Минус</button>
        <button className="plus">Плюс +</button>
      </div>
    </div>
  );
}
