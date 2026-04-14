import { useState } from "react";

export default function RenderFunction() {
    const listItems = ["Item 1", "Item 2", "Item 3"];
    return (
        <div>
            <h2>List of Items:</h2>
            <ul>
                {listItems.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    )
}