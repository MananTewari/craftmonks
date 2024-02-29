import React from "react";

import { Link } from "react-router-dom";

function Nav() {
  const navStyle = {
    color: "black"
  };
  return (
    <nav>
      <h1>Logo</h1>
      <ul className="nav-links">
        <Link style={navStyle} to="/about">
          <li>About</li>
        </Link>
        <Link style={navStyle} to="/shop">
          <li>Shop</li>
        </Link>
        <Link style={navStyle} to="/Login">
          <li>Log In</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Nav;
