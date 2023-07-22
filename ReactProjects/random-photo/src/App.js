import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Sidebar from "./Component/SideNavBar/Sidebar";
// import Home from "./Pages/Home/Home"
import About from "././Pages/About/About";
import Contact from "././Pages/Contact/Contact";
import CardList from "./Component/Cards/CardList";
import CardDropContext from "./Pages/Contact/CardDropContext";
// import Header from "./Component/Header/Header";
// import Card from "./Component/Cards/Card";
// import Count from "./Component/Count";
// import Hookarray from "./Component/Hookarray";
// import Hookobject from "./Component/Hookobject";
// import Home from './Component/Home/Home'
function App() {
  return (
    
    <CardDropContext>
      {/* <CardDropContext> */}
      {/* <Count />
      <Hookobject/>
      <Hookarray/> */}
      {/* <Card/> */}
      {/* <CardList/> */}
      {/* <Sidebar/> */}
      (
      <Router>
        <div className="app">
          <Sidebar />
          {/* <Header/> */}
          <div className="content">
            <Switch>
              <Route path="/cardlist" exact component={CardList} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
            </Switch>
          </div>
        </div>
      </Router>
      );
      {/* </CardDropContext> */}
    </CardDropContext>
  );
}

export default App;


// import React, { useState } from 'react';
// import './App.css';

// const Card = ({ title, date }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleStartClick = () => {
//     setIsOpen(true);
//   };

//   return (
//     <div className="card">
//       <h1>{title}</h1>
//       <p>{date}</p>
//       <button onClick={handleStartClick}>Start</button>
//       {isOpen && <div>
//         <PopupCard title={title} date={date} />
//         <PopupCard title={title} date={date} />
//         <PopupCard title={title} date={date} />
//        </div>
//       }
//     </div>
//   );
// };

// const PopupCard = ({ title, date }) => {
//   const handleJoinClick = () => {
//     // Handle join button click event
//   };

//   return (
//     <div className="popup-card">
//       <h2>{title}</h2>
//       <p>{date}</p>
//       <button onClick={handleJoinClick}>Join</button>
//     </div>
//   );
// };

// const App = () => {
//   const cardTitle = "Title";
//   const currentDate = new Date().toLocaleDateString();

//   return (
//     <div className="app">
//       <Card title={cardTitle} date={currentDate} />

//     </div>
//   );
// };

// export default App;

