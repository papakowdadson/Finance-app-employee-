
import React from "react"; 
import {Link} from "react-router-dom"
const TodoList = ( props ) => {
       const {todo} = props; 
        const {id,employee_name,employee_salary} = todo;
        // let history = useHistory();
        return(   
            <Link to={`/About/${id}`}  >
                <div key={id} >
                    <h5>{employee_name}</h5>
                    <h5>{`is employed with :${employee_salary} salary`}</h5>
                    <button onClick={() =>{}}>Detail</button>
                </div>
            </Link>

         );
            
};
 
export default TodoList;