import React, {useState} from "react";
import { useEffect } from "react/cjs/react.production.min";

const Counter = () => {
    const [count, setCount]= useState(2);
    const handleIncrement = () =>{
        setCount(count + 1);
    };
    const handleDecrement = () =>{
        setCount(count - 1);
    };

    //useEffect (() =>{

    //},[]); 
    return(
        <React.Fragment>
            <p>
                this is a money counter: {count};
            </p>
            <button onClick ={handleIncrement}>increment</button>
            <button onClick ={handleDecrement}>decrement</button>
        </React.Fragment>
    );
};
export default Counter;