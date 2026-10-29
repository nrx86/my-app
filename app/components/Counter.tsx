"use client"

import { count } from 'console'
import React, { useState } from 'react'

export default function Counter() {
const [count,setCount]= useState(0);

function HandleIncrease(){
    setCount(count+1);
}

function HandleDecrease(){
    setCount(count-1);
}

function HandleReset(){
    setCount(0);
}


  return (
    <div>
        
        <h1>Counter: {count}</h1>
<button onClick={HandleIncrease}>Increase</button>
<button onClick={HandleDecrease}>Decrease</button>
<button onClick={HandleReset}>Reset</button>

    </div>
  )
}
