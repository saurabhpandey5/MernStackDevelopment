import React, { useState } from 'react'

function Count() {
    const [count,setcount]=useState(0);

  return (
    <div>
      <h1>Count</h1>
      <button onClick={
        ()=>setcount(count+1)
        }>Count {count}
      </button>
    </div>
  )
}
export default Count;

