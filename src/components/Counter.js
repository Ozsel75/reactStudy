import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(5);

    const increase = () => {
        setCount(count+1);
    };

    const reset = () => {
        setCount(0);
    };

    return(
        <div>Counter
            <h1>{count}</h1>
            <button onClick={()=> setCount(count-1)}>Decrease</button>
            <button onClick={increase}>Increase</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Counter;