
const Create = () =>{


return(
    <div className="CreateWrapper">
        <div className="Create">
            <h3>Create new employee</h3>
            <div className="Input-group">
                <label for='employee_name' >Enter your name:</label>
                <input of='employee_name' type='text' placeholder='please enter your name' required />
            </div>
            <div className="Input-group">
                <label for="employee_age">Enter employee age:</label>
                <input of='employee_age' type="text" placeholder='please enter your age' required/>
            </div>
            <div className="Input-group">
                <label for="employee_salary">Enter employee Salary:</label>
                <input of='employee_salary' type="text" placeholder='please enter your salary' required/>
            </div>
            <button type='submit'>Submit</button>
            
        </div>
    </div>
)

};

export default Create