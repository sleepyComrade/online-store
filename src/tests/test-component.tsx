import React, { useState } from "react";

export function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <span data-testid='result'>{count}</span>
            <button onClick={() => setCount((last) => last + 1)} data-testid='inc'>+</button>
            <button onClick={() => setCount((last) => last - 1)} data-testid='dec'>-</button>
        </div>
    )
}