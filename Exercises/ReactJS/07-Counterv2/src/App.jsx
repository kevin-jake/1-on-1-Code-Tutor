import React from "react";
import {
  ChevronUp,
  ChevronsUp,
  ChevronDown,
  ChevronsDown,
  RotateCcw,
  Hash,
} from "react-feather";

function App() {
  const [count, setCount] = React.useState(0);

  const increase = (isIncreaseBy10) => {
    let inc = 0;
    if (isIncreaseBy10) {
      inc = count + 10;
      setCount(inc);
    } else {
      inc = count + 1;
      setCount(inc);
    }
  };

  const reset = () => {
    setCount(0);
  };

  const random = () => {
    setCount(Math.round(Math.random() * 100));
  };

  const decrease = (isDecreaseBy10) => {
    let dec = 0;
    if (isDecreaseBy10) {
      dec = count + 10;
      setCount(dec);
    } else {
      dec = count + 1;
      setCount(dec);
    }
  };

  // ALTERNATE SOLUTION:
  // const clamp = (val, min = 0, max = 1) => {
  //   if (min > max) {
  //     [min, max] = [max, min];
  //   }

  //   return Math.max(min, Math.min(max, val));
  // };

  // function Counter({ initialVal = 0 }) {
  //   const [
  //     count,
  //     setCount,
  //   ] = React.useState(initialVal);

  return (
    <div className="wrapper">
      <p>
        <span>Current value:</span>
        <span className="count">{count}</span>
      </p>
      <div className="button-row">
        <button onClick={() => increase(false)}>
          <ChevronUp />
          <span className="visually-hidden">Increase slightly</span>
        </button>
        <button onClick={() => increase(true)}>
          <ChevronsUp />
          <span className="visually-hidden">Increase a lot</span>
        </button>
        <button onClick={reset}>
          <RotateCcw />
          <span className="visually-hidden">Reset</span>
        </button>
        <button onClick={random}>
          <Hash />
          <span className="visually-hidden">Set to random value</span>
        </button>
        <button onClick={() => decrease(true)}>
          <ChevronsDown />
          <span className="visually-hidden">Decrease a lot</span>
        </button>
        <button onClick={() => decrease(false)}>
          <ChevronDown />
          <span className="visually-hidden">Decrease slightly</span>
        </button>
      </div>
    </div>
  );
}

export default App;
