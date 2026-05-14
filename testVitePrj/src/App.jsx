<<<<<<< HEAD
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
=======
import RefTest from './components/useRefTest'

export default function App() {
    return (
        <>
            <RefTest />
        </>
>>>>>>> 550b866d30b74b96d08c9ceda73ba3a9ab8a4fad
    )

}