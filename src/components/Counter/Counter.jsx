import React, {useState} from 'react';

const Counter = () => {
    const [count, setCount] = useState(0)

    function incriment() {
        setCount(() => count + 1)
        console.log('likes: ', count);
    }
    function dicriment() {
        setCount(() => count - 1)
        console.log('likes: ', count);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={incriment}>+</button>
            <button onClick={dicriment}>-</button>
        </div>
    );
};

export default Counter;