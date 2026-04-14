import { useState } from "react";

export default function ToggleFunction() {
    const [isLiked, setIsLiked] = useState(false);
    const toggleLike = () => {
        setIsLiked(!isLiked);
    };  
    return (
        <div>
            <input type={isLiked ? "text" : "password"} placeholder="Enter text" />
            <button onClick={toggleLike}>{isLiked ? 'Unlike' : 'Like'}</button>
            <p>{isLiked ? 'You liked this!' : 'You have not liked this yet.'}</p>
        </div>
    );
}