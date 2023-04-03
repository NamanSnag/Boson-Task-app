import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./style.scss";

const Navbar = ({user, setUser}) => {

  const navigate = useNavigate();

  useEffect(() => {
    let u = localStorage.getItem("user");
    setUser(u);
  }, [user, setUser]);

  const handleLogout = async () => {
    await localStorage.removeItem("user");
    setUser(null);
    navigate('/login');
  }

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
          {user != null ? (
            <>
              <Link to={'/task'}><button className="navButton">Dashboard</button></Link>
              <Link to={('/addtask')}><button className="navButton">Add Task</button></Link>
              <button className="navButton" onClick={handleLogout}>Logout</button>
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
