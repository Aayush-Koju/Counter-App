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
    setNum(e.target.value);
  }

  return (
    <>
      counter: {count}

      <button onClick={increase}>Increment(+)</button>
      <input type="number" value={num} onChange={changeNum}/>
      <button onClick={decrease}>Decrement(-)</button>
      <button onClick={clear}>Reset</button>
    </>
  )
}

export default App
