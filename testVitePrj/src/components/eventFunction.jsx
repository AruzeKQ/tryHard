import { useState } from "react";
export default function EventFunction() {
    const sayHello = () => {
        alert("Hello!");
    };
    return (
        <div>
            <button onClick={sayHello}>Say Hello</button>
        </div>
    );
}
