import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CircularProgress } from "@mui/material";
const TodoAbout = () => {
    const { id } = useParams();
    // deleting a state
    const [deleteTodo, setdeleteTodo] = useState()

    const deleteHandler = (id) => {
        setdeleteTodo(deleteTodo.filter((data) => data.id !== id))
    }

    const [TodoAbout, setTodoAbout] = useState();

    useEffect(() => {
        console.log('run')
        axios.get(`https://dummy.restapiexample.com/api/v1/employee/${id}`)
            .then((res) => {
                const resTodo = res.data.data;
                setTodoAbout(resTodo);
            });
    }, [id])

    // const {employee_age,employee_name,employee_salary } = TodoAbout;
    console.log(`todo:${JSON.stringify(TodoAbout)}`)

    return (
        <>
            {TodoAbout ?
                (<div className="employeeAbout">
                    <h2>Employee details</h2>
                    <div className="employeeAboutId">
                        item
                        <h5>{TodoAbout.employee_name}</h5>
                        <h5>{TodoAbout.employee_salary}</h5>
                        <h5>{TodoAbout.employee_age}</h5>
                        <button onClick={() => { deleteHandler() }}>Delete</button>
                    </div>
                </div>) : (<CircularProgress />)
            }
        </>

    );
}

export default TodoAbout;