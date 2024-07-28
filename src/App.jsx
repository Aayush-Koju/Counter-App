import {useState} from "react";


function App() {
  
  const [count, setCounter] = useState(0);

  const increase = () => {
    setCounter(count + 1);
  }

  const decrease = () => {
    setCounter(count - 1);
  }

  const clear = () => {
    setCounter(0);
  }

  return (
    <>
      <div>
        counter: {count}
      </div> 
      <button onClick={increase}>Increment(+)</button>
      <button onClick={decrease}>Decrement(-)</button>
      <button onClick={clear}>Reset</button>
    </>
  )
}

export default App
