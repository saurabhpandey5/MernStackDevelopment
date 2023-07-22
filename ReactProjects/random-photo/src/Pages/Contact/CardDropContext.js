import React, {useState } from 'react'
import MyContext from './MyContext';
const CardDropContext = (props) => {
    const[stateValue, setstateValue] = useState(true);
    const handleToggle = () => {
        setstateValue((current) => !current);
        console.log("clicked handle")
      };
  return (
    <MyContext.Provider value = {{stateValue, handleToggle}}>
    {props.children}
    </MyContext.Provider>
  )
}

export default CardDropContext
