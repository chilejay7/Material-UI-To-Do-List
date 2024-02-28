import { useState, useEffect } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    const myEffect = () => {
        console.log('My Effect was called')
    };

    useEffect(myEffect, [count]);

    const increment = () => {
        setCount(c => c+1);
    };

    const handleChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>+1</button>
            <p>Name: {name}</p>
            <input type="text" value={name} onChange={handleChange} />
        </div>
    )
}