import React, { useEffect, useState } from 'react'

function Use() {
    let [count, setCount] = useState(0);
    useEffect(() => {
        console.log("value changed");
        return () => {
            console.log("code cleaned");
        };
    }, [count]);
  
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}


export default Use;