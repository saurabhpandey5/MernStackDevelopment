import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setcounter] = useState(5);
  // let counter =5;
  const addValue = () => {
    setcounter(counter + 1);
  };

  const removeValue = () => {
    if (counter <= 0) {
      setcounter(0);
    } else {
      setcounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value : {counter}</button>
      <br></br>
      <button onClick={removeValue}>Remove Value : {counter}</button>
    </>
  );
}

export default App;
