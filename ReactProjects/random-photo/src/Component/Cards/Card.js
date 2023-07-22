import React , {useContext, useEffect, useState} from "react";
import "./style.css";
// import Contact from "../../Pages/Contact/Contact";

import MyContext from '../../Pages/Contact/MyContext'
const Card = ({ title, name }) => {

  const {stateValue, handleToggle} = useContext(MyContext);
  console.log(stateValue)
  
  return (
    
    <>
    <div className="card">
        <h3>{title}</h3>
        <p>{name}</p>
        <button onClick={handleToggle}
        className="card-button">Start</button>
      </div>
      
  </>
  );
};

export default Card;
