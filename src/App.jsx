import React, {useState} from "react";


function App() {
  
  const [count, setCounter] = useState(0);

  const increase = () => {
    setCounter(count + 1);
  }

  const decrease = () => {
    setCounter(count - 1);
  }

  return (
    <>
      <div>
        counter: {count}
      </div> 
      <button onClick={increase}>Increment(+)</button>
      <button onClick={decrease}>Decrement(-)</button>
      <button>Reset</button>
    </>
  )
}

export default App
