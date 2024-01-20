import { useState } from "react";
import "./App.scss";

export default function App() {
  const [value, setValue] = useState(0);

  function valueDecrement() {
    setValue(value - 1);
  }

  function valueIncrement() {
    setValue(value + 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{value}</h1>
        <button className="minus" onClick={valueDecrement}>
          - Минус
        </button>
        <button className="plus" onClick={valueIncrement}>
          Плюс +
        </button>
      </div>
    </div>
  );
}
