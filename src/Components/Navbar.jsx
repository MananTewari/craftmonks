import React from "react";
import { Link, NavLink } from "react-router-dom";

 function Navbar(){
  return (
    <div className="Header">
    <nav>
      
      <Link to="/" className="title">COT</Link>
     
      <ul>
      <li><NavLink to="/home">Home</NavLink></li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
      
    </nav>
    </div>
  );
};
export default Navbar;
