import React, { useState } from 'react'

function Count() {
  
  const [count,setcount]=useState(0);

  return (
    <div>
      Count : {count}
      <button onClick={()=>setcount(count+1)}>Increment</button>
      <button onClick={()=>setcount(count-1)}>Decrement</button>
      <button onClick={()=>setcount(0)}>Zero</button>
    </div>
  )
}
export default Count;

