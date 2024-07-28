import {useState} from "react";


function App() {
  
  const [count, setCounter] = useState(0);
  const [num, setNum] = useState(1);

  const increase = () => {
    setCounter(count + num);
  }

  const decrease = () => {
    setCounter(count - num);

  }

  const clear = () => {
    setCounter(0);
  }

  const changeNum = (e) => {
    setNum(Number(e.target.value));
  }

  return (
    <div className="counter-container">
      <h1>Counter Application</h1>

      <h2>Counter: {count} </h2>

      <div className="buttons-container">
        <button onClick={increase} className="button increment-button">Increment(+)</button>
        <input value={num} onChange={changeNum}/>
        <button onClick={decrease} className="button decrement-button">Decrement(-)</button>
        <button onClick={clear} className="button reset-button">Reset</button>
      </div>
    </div>
  )
}

export default App
