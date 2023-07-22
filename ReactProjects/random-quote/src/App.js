import './App.css';
import Navbar from './Component/Navabar';
import Quotes from './Component/Quotes';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Login/> */}
        <Navbar/>
        <Quotes/>
      </header>
    </div>
  );
}

export default App;
