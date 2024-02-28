import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const addOne = () => {
        setCount(count + 1);
    }

    const addThree = () => {
        setCount(currentCount => currentCount + 1);
        setCount(currentCount => currentCount + 1);
        setCount(currentCount => currentCount + 1);
    }

    return(
        <div>
            <h2>Count: {count}</h2>
            <button onClick={addOne}>+1</button>
            <button onClick={addThree}>+3</button>

        </div>
    )
}

export default Counter;