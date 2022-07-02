import React from "react";
import Todo from "./Todo.js";
import Counter from "./Counter";

const Home = () => {
    return ( 
        <div>
         
             <div className='content'>
                <p>
                welcome to my counter
                </p>
                {/* <Counter/> */}
            </div>
            <Todo/>
        </div>  
    );
}
 
export default Home;