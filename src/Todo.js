import axios from "axios"
import React,{useState,useEffect} from "react";
import TodoList from "./TodoList";
import CircularProgress from "@mui/material/CircularProgress";
const Todo = () => {
    const [Todo, setTodo] =useState();

    useEffect(()=>{
        // input the link to the todo api when you have data
         axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then((res) => {
                const resTodo = res.data;
                setTodo({ resTodo });
            }).catch((err) => {
                console.log(err);
            });        
    },[]);
    console.log(Todo);
    return(
        <>
        {Todo ? (Todo.slice(0, 5).map((todo) =>{
           
            <TodoList Todo={todo} />
            

        })):(<CircularProgress/>
        )
        }
        

        </>   
    );
}

export default Todo;