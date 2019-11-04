import React, { useState } from 'react'
export default function () {
    const [count, setCount] = useState(100); //传的是初始化数据 initialState
    return (
        <div>
            <span>{count}</span>
            <button onClick={()=> setCount(count + 1)}>+</button>
            <button onClick={() => setCount((count) => count - 1)}>-</button>
        </div>
    );
}