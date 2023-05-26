import React, { useState } from 'react'

const Hookarray = () => {

    const [items, setItems]=useState([]);

    const addItem=()=>{
        setItems([...items,{
            id:items.length,
            value: Math.floor(Math.random()*10+1)
        }])
    }
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {   items.map(res =>(
            <li>{res.id}:{res.value}</li>
        ))
        }
      </ul>
    </div>
  )
}

export default Hookarray
