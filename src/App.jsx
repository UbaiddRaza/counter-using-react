import { useState } from "react";

function App() {

  let [num, setNum] = useState(0)

  function addCounter() {
    console.log("counter added");
    setNum(num + 1)
    console.log(num);
    
  }
  function minusCounter() {
    console.log("counter minus");
    if (num > 0) {
      setNum(num - 1)
    }
    
    console.log(num);
  }
  return (
    <>
      <h1>{num}</h1>
     
      <button onClick={addCounter}>add Counter</button>
      <button onClick={minusCounter}>minus Counter</button>
    </>
  )
}

export default App