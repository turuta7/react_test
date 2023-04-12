import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = (col = 1) => {
        setCount(count + col)
       }
      
       const decrement = (col = 1) => {
        setCount(count - col)
       }
    
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>increment()}>Increment</button>
            <button onClick={()=>decrement()}>Decrement</button>
        </div>
    )
}

export default Counter