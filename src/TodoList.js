
import React from "react"; 
import {Link} from "react-router-dom"
const TodoList = ( props ) => {
       const {Todo} = props; 
        const {status,data} = Todo;
        // let history = useHistory();
        return(   
            <Link to="/About/${data.id}" >
                <div key={data.id} >
                    <h5>{data.employee_name}</h5>
                    <h5>{`is employed with :${data.employee_salary} salary`}</h5>
                    {/* <button onClick={#}>Detail</button> */}
                </div>
            </Link>

         );
            
};
 
export default TodoList;