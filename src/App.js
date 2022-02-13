import React from 'react';
import Counter from './Counter';
import './App.css';
import Employee from './Employee';

const employeeInfo=[
  {firstName:"peace",
  sirName :"da",
  age:12},
  {firstName :"peac",
  sirName :"dn",
  age:13},
  {firstName :"pea",
  sirName :"an",
  age:14},
  {firstName :"Pe",
  sirName :"Dane",
  age :15},
];

function App(){
    return(
      
          <div Class="App" >
            <header Class="App-header">
                  <p>
                    welcome to my counter
                  </p>
                  <Counter/>
                  <h2>User datails</h2>
                  {employeeInfo.map((employee) => {
                    const {firstName,sirName,age} = employee;
                    return(
                      <Employee firstName={firstName} sirName={sirName} age={age} />
                    );
                  })}
        
            </header>  
          </div>
    ); 
};

export default App;
