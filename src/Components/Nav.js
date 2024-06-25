import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Nav() {
  return (
    <header id="home">
      <nav id="nav-wrap" className="nav">
        <ul id="nav" className="nav">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/signup" className="link">
             Signup
            </Link>
          </li>
          <li>
          <Link to="/login" className="link">
             Login
            </Link>
          </li>
        
          <li>
          <Link to="/resume" className="link">
             Resume
            </Link>
          <Link to="/resetpassword" className="link">
              Reset Password
            </Link>
          </li>
         
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
