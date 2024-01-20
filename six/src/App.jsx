import { useState } from "react";
import "./App.scss";

export default function App() {
  const [visible, setVisible] = useState(false);

  function visibleOpen() {
    setVisible(true);
  }

  function visibleClose() {
    setVisible(false);
  }

  return (
    <div className="App">
      {visible ? (
        <div className="overlay">
          <div className="modal">
            <svg
              onClick={visibleClose}
              height="200"
              viewBox="0 0 200 200"
              width="200"
            >
              <title />
              <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
            </svg>
            <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
          </div>
        </div>
      ) : (
        <button onClick={visibleOpen} className="open-modal-btn">
          ✨ Открыть окно
        </button>
      )}
    </div>
  );
}
