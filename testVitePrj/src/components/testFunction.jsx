import { useState } from 'react'
export default function TestFunction() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count => count + 1)}>Increase</button>
            <button onClick={() => setCount(count => count - 1)}>Decrease</button>
            <button onClick={() => setCount(0)}>Reset</button>
            <p>Current count is: {count % 2 == 0 ? 'Chan' : 'Le'}</p>
        </div>
    )
}