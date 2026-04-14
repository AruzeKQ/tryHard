import { useState } from "react";

    export default function ArrayTestFunction() {
        const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);
        const [value, setValue] = useState('');
        const addNumber = () => {
            setNumbers([...numbers, Number(value)]);
            setValue('')
        };
        return (
            <div>
                <h1>CurrentArray: {numbers.join(', ')}</h1>
                <input 
                type="text" 
                value={value} 
                placeholder="Enter a number"
                onChange={(e) => setValue(e.target.value)}
                 />
                <button onClick={addNumber}>Add Number</button>
                <button onClick={() => setNumbers([])}>Reset</button>
            </div>
        );
    }