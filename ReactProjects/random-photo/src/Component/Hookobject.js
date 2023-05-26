import React, { useState } from 'react'

const Hookobject = () => {
    const [name,setName]=useState({firstName:'',secondName:''});
  return (
    <div>
      <input type='text' 
            value={name.firstName} 
            onChange={(e)=>setName({...name,firstName:e.target.value})}>
           
        </input>
        <br></br>
        <input type='text' value={name.secondName} 
            onChange={(e)=>setName({...name,secondName:e.target.value})}>
           
        </input>
        <h2>{JSON.stringify(name)}</h2>
    </div>
  )
}

export default Hookobject
