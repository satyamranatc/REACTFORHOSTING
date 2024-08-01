import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <h2>Count: {count}</h2>
        <button onClick={() => setCount((count) => count + 1)}>
          Increment Count
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
          Decrement count
        </button>
        <p>Welcome In React Hope You Like This</p>
      </div>
      <p className="read-the-docs">Hi I Am Satyam Rana</p>
    </>
  );
}

export default App;
