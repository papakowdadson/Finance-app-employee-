import React from "react";


const Counter = () => {
    const [count, setCount] = React.useState(0);
    const inc= () => {
        setCount(count+1);
        console.log('count:', count);
    } ;
    const dec= () => {
        setCount(count-1);
        console.log('count:', count);
    };
    return(
        <React.Fragment>
            <p>the count is {count} </p> 
            <button  onClick={inc}>Increment</button>
            <button  onClick={dec} >Decrement</button>
        </React.Fragment>
    );
}

export default Counter;