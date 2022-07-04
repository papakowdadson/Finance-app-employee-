import axios from "axios"
import React,{useState,useEffect} from "react";
import TodoList from "./TodoList";
import CircularProgress from "@mui/material/CircularProgress";
const Todo = () => {
    const [Todo, setTodo] =useState();

    const deleteHandler = (id) => {
        setTodo(Todo.filter(todo => todo.id !== id));
    }

    useEffect(()=>{
        // input the link to the todo api when you have data
         axios.get('https://dummy.restapiexample.com/api/v1/employees')
            .then((res) => {
                const resTodo = res.data.data;
                setTodo(resTodo);
            }).catch((err) => {
                console.log(err);
            });        
    },[]);
    console.log(Todo);
    return(
        <>
        {Todo ? (Todo.map((todo) =>
           
            <TodoList todo={todo} key={todo.id} deleteTodo={deleteHandler}/>
            

        )):(<CircularProgress/>
        )
        }
        

        </>   
    );
}

export default Todo;