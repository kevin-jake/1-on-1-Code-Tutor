import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LogoutBtn from "./LogoutBtn";

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
        <button onClick={() => setCount((count) => count + 1)}>
          {/* <button
        onClick={() => {
          setCount(count + 1);
          console.log(count);
          // const nextCount = count + 1;
          // setCount(nextCount);
          // console.log(nextCount)
        }}
      > */}
          count is {count}
        </button>
      </div>
      {/* <LogoutBtn /> */}
    </>
  );
}

export default App;
