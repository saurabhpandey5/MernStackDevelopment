import './App.css';
import {useState} from 'react';
function App() {
  
    let yellow = 'red';
    const [bgColor, setBgColor] = useState(yellow);
    const changeColor =()=>{
        let purple = '#A020F0';
        setBgColor(purple);
    }
    return (
      <div className="App">
        <header className="App-header" style={{background: bgColor}}>
          <button onClick={changeColor}>Change Color</button>
        </header>
      </div>
    );
}

export default App;
