import React from 'react';

const Employee = (props) => {
    const {firstName,sirName,age} = props;
    return( 
        <div>
            <p>your name is: {firstName} {sirName}, you are: {age} years old
            </p>
        </div>
    );

};
export default Employee;