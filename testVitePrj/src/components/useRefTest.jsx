import { useRef, useState } from 'react';

function RefTest() {
    const countRef = useRef(0)
    const [render, setRender] = useState(0)

    const countHandle = () => {
        return countRef.current++;
    }

    console.log(countRef);

    const renderHandle = () => {
        return setRender(countRef.current)
    }
    return (
        <div>
            <h1>NumberCurrent: {render}</h1>
            <button onClick={renderHandle}>ClickMe!</button>
        </div>
    )
}

export default RefTest;