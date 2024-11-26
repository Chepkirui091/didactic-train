"use client"

import React, {useState} from 'react'

const Counter: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    return (
        <div className="increment flex flex-col gap-2 ">
            <h1>Count:<span className="border p-2 bg-gray-500"> {count}</span></h1>
            <div className="flex gap-10 ">
                <button className="border p-2 w-10 h-10 bg-amber-200 rounded-full" onClick={() => setCount(count + 1)}>+</button>
                <button className="border p-2 w-10 h-10 bg-amber-200 rounded-full" onClick={() => setCount(count - 1)}>-</button>
            </div>
        </div>
    )
}

export default Counter