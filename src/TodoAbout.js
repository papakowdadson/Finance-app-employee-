import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const TodoAbout = () => {
    const { id } = useParams();
    // deleting a state
    const [deleteTodo,setdeleteTodo]=useState()

    const deleteHandler = (id) =>{
        setdeleteTodo(data.filter((data)=>data.id !== id))
    }

    const [TodoAbout, setTodoAbout]=useState();

    useEffect(() =>{
        axios.get(`https://dummy.restapiexample.com/api/v1/employees/${id}`)
            .then((res) => {
                const resTodo = res.data;
                setTodoAbout({ resTodo });
            }); 
    },[id])
    console.log(TodoAbout);
    const {status,data} = TodoAbout;

    return ( 
        <div className="employeeAbout">
            <h2>Employee details</h2>
            <div className="employeeAboutId">
                <h3>{status}</h3>
                <h5>{data.employee_name}</h5>
                <h5>{data.employee_salary}</h5>
                <h5>{data.employee_age}</h5>
                {/* <button onClick={'${deleteHandler(id)}'}>Delete</button> */}
            </div>
        </div>
     );
}
 
export default TodoAbout ;