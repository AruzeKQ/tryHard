import { useState } from "react"
export default function App() {
    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <div>
            <input value={name} onChange={handleChange} type="text" />
            <p>Name is: {name}</p>
        </div>
    )

}