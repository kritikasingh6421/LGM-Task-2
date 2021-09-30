import React from 'react';
import {  Link } from "react-router-dom";
//import  profiles from "./pages/profiles";
const Navbar= () =>{
    return (
      <div className="front-page">
          <div className="navBar">
              <div className="nav-logo">LGM</div>
              <div className="nav-link">
                   <Link to="/profiles" style={{textDecoration:'none', color:'#D5BFBF', fontSize:'20px'}}>Get User</Link>
              </div>
          </div>
      </div>
    
  );
}
export default Navbar;
