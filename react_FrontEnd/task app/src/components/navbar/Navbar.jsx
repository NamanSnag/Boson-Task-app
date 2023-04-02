import React from "react";
import { Link } from "react-router-dom";

import "./style.scss";

const Navbar = () => {
  let user = false;

  return (
    <div className="navbar">
      <nav className="navContainer">
        <Link to={'/'} className="logo">
          <img
            src="https://bosontech.ai/wp-content/uploads/2021/12/boson_logo.png"
            alt="logo"
          />
        </Link>
        <div className="navItems">
          {user ? (
            <>
              <button className="navButton">Task List</button>
              <button className="navButton">Add Task</button>
              <button className="navButton">Logout</button>
            </>
          ) : (
            <>
              <Link to={'/login'}><button className="navButton">Sign In</button></Link>
              <Link to={'/register'}><button className="navButton">Sign Up</button></Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
