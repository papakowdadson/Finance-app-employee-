import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import TodoAbout from './TodoAbout';
import Create from './Create';
import { dividerClasses } from "@mui/material";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet
} from "react-router-dom";

function App(){
    return(
      
     <div>
       <Router>        
            <Navbar/>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/About/:id " element={<TodoAbout/>}/>
              <Route path="/Create/" element={<Create/>}  />            
            </Routes>        
      </Router>        
     </div>
    ); 
};

export default App;